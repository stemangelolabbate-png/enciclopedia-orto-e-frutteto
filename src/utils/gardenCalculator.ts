import { Plant, ActivePlanting, PlantReminder, ClimateZone } from '../types';

export interface GrowthStatus {
  giorniTrascorsi: number;
  giorniTotaliPrevisti: number;
  giorniRimanenti: number;
  percentualeCompletamento: number;
  faseNome: string;
  faseDescrizione: string;
  faseIndice: number; // 0 to 5
  dataStimataRaccolto: string;
  consiglioAttuale: string;
  statoRaccolto: 'in_attesa' | 'imminente' | 'pronto' | 'scaduto';
  promemoria: PlantReminder[];
}

export function calculateGrowthStatus(
  plant: Plant, 
  planting: ActivePlanting,
  zone: ClimateZone | string = 'centro'
): GrowthStatus {
  const oggi = new Date();
  oggi.setHours(0, 0, 0, 0);

  const dataSemina = new Date(planting.dataSemina);
  dataSemina.setHours(0, 0, 0, 0);

  const diffTime = oggi.getTime() - dataSemina.getTime();
  const giorniTrascorsi = Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)));

  // Se trapianto, i giorni per il raccolto sono ridotti del tempo di semenzaio (~20 giorni)
  const riduzioneTrapianto = planting.tipoAvvio === 'trapianto' ? Math.round(plant.giorniGerminazione.max + 15) : 0;
  
  // Clima adjustment: Sud matures slightly quicker in full heat (-5%), Nord slightly slower (+5%)
  const climateFactor = zone === 'sud' ? 0.95 : zone === 'nord' ? 1.05 : 1.0;
  const giorniTotaliPrevisti = Math.max(
    15, 
    Math.round((planting.giorniStimatiRaccolto - riduzioneTrapianto) * climateFactor)
  );

  const giorniRimanenti = Math.max(0, giorniTotaliPrevisti - giorniTrascorsi);
  const percentualeCompletamento = Math.min(100, Math.round((giorniTrascorsi / giorniTotaliPrevisti) * 100));

  // Data stimata raccolto
  const dataRaccolto = new Date(dataSemina.getTime() + giorniTotaliPrevisti * (1000 * 60 * 60 * 24));
  const dataStimataRaccolto = dataRaccolto.toLocaleDateString('it-IT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Fasi fenologiche
  const germMax = planting.tipoAvvio === 'trapianto' ? 0 : plant.giorniGerminazione.max;
  let faseNome = '';
  let faseDescrizione = '';
  let faseIndice = 0;
  let consiglioAttuale = '';

  if (giorniTrascorsi <= germMax && planting.tipoAvvio === 'seme') {
    faseIndice = 0;
    faseNome = 'Fase di Germinazione';
    faseDescrizione = `Il seme sta assorbendo umidità nel substrato. Germoglierà tra ${Math.max(1, plant.giorniGerminazione.min - giorniTrascorsi)} e ${Math.max(1, plant.giorniGerminazione.max - giorniTrascorsi)} giorni.`;
    consiglioAttuale = `Mantieni il terreno umido a pioggia finissima senza smuovere i semi. Temperatura ideale: ~${plant.temperaturaIdeale.germinazioneOttimale}°C.`;
  } else if (percentualeCompletamento < 30) {
    faseIndice = 1;
    faseNome = 'Radicazione e Prime Foglie';
    faseDescrizione = 'Le piantine hanno emesso le prime foglioline vere ed espandono le radici nel terreno.';
    consiglioAttuale = `Se hai seminato fitto, dirada lasciando circa ${plant.distanze.traPianteCm} cm tra le piantine. Luce solare diretta fondamentale.`;
  } else if (percentualeCompletamento < 60) {
    faseIndice = 2;
    faseNome = 'Sviluppo Vegetativo';
    faseDescrizione = 'La pianta irrobustisce il fusto, espande la chioma e sviluppa vigorosamente la massa fogliare.';
    consiglioAttuale = `${plant.cureColturali[0] || 'Arieggia il suolo superficiale ed elimina le erbe infestanti.'} Irrigazione: livello ${plant.irrigazione.livello.toLowerCase()}.`;
  } else if (percentualeCompletamento < 85) {
    faseIndice = 3;
    faseNome = plant.categoria === 'aromatica' || plant.sottoCategoria === 'Foglia' ? 'Crescita Piena' : 'Fioritura & Allegagione';
    faseDescrizione = plant.sottoCategoria === 'Foglia' 
      ? 'Il cespo è florido e sta completando la compattazione delle foglie.' 
      : 'I fiori si stanno trasformando in piccoli frutti o le radici si stanno ingrossando.';
    consiglioAttuale = plant.cureColturali[1] || 'Assicura irrigazione costante senza sbalzi idrici che causerebbero spaccature o cascola dei fiori.';
  } else if (percentualeCompletamento < 100) {
    faseIndice = 4;
    faseNome = 'Maturazione Finale';
    faseDescrizione = `Mancano circa ${giorniRimanenti} giorni alla maturazione ottimale. I frutti prendono colore e zuccheri.`;
    consiglioAttuale = plant.proprietaERaccolta;
  } else {
    faseIndice = 5;
    faseNome = 'Tempo di Raccolta!';
    faseDescrizione = 'La pianta ha completato il suo ciclo colturale stimato ed è pronta per essere gustata!';
    consiglioAttuale = `Procedi alla raccolta con forbici o cesoie pulite nelle ore fresche del mattino! ${plant.proprietaERaccolta}`;
  }

  let statoRaccolto: 'in_attesa' | 'imminente' | 'pronto' | 'scaduto' = 'in_attesa';
  if (percentualeCompletamento >= 100) {
    statoRaccolto = giorniTrascorsi > giorniTotaliPrevisti + 15 ? 'scaduto' : 'pronto';
  } else if (giorniRimanenti <= 7) {
    statoRaccolto = 'imminente';
  }

  // Generate actionable reminders based on encyclopedic plant data
  const promemoria: PlantReminder[] = [];

  // 1. Irrigazione reminder
  let irrigazioneFrequenza = 3;
  if (plant.irrigazione.livello === 'Abbondante') irrigazioneFrequenza = 1;
  else if (plant.irrigazione.livello === 'Costante') irrigazioneFrequenza = 2;
  else if (plant.irrigazione.livello === 'Moderata') irrigazioneFrequenza = 4;
  else if (plant.irrigazione.livello === 'Bassa') irrigazioneFrequenza = 6;

  // Check days since last watered
  const lastWateredDate = planting.ultimoAnnaffiato ? new Date(planting.ultimoAnnaffiato) : null;
  const daysSinceWatered = lastWateredDate 
    ? Math.floor((oggi.getTime() - lastWateredDate.getTime()) / (1000 * 60 * 60 * 24))
    : giorniTrascorsi;

  const isWateringDue = daysSinceWatered >= irrigazioneFrequenza;

  promemoria.push({
    id: `irr-${planting.id}`,
    tipo: 'irrigazione',
    titolo: isWateringDue ? `Irrigazione necessaria (Livello ${plant.irrigazione.livello})` : `Terreno idratato (${plant.irrigazione.livello})`,
    descrizione: plant.irrigazione.dettagli,
    frequenzaGiorni: irrigazioneFrequenza,
    urgente: isWateringDue && !planting.completata,
    completato: !isWateringDue,
  });

  // 2. Concimazione / Fertirrigazione reminder
  if (!planting.completata) {
    if (giorniTrascorsi >= 18 && giorniTrascorsi <= 45) {
      promemoria.push({
        id: `conc-veg-${planting.id}`,
        tipo: 'concimazione',
        titolo: 'Concimazione di Spinta Vegetativa',
        descrizione: 'Apporta macerato di ortica diluito (1:10) o compost superficiale per sostenere la crescita vigorosa.',
        frequenzaGiorni: 14,
        urgente: giorniTrascorsi % 14 === 0,
        completato: Boolean(planting.ultimoConcimato && (oggi.getTime() - new Date(planting.ultimoConcimato).getTime()) / (1000 * 60 * 60 * 24) < 10),
      });
    } else if (giorniTrascorsi > 45 && plant.sottoCategoria === 'Frutto') {
      promemoria.push({
        id: `conc-fior-${planting.id}`,
        tipo: 'concimazione',
        titolo: 'Supporto Potassico per Frutti e Zuccheri',
        descrizione: 'Aggiungi una spolverata di cenere di legna o macerato di consolina per arricchire di potassio e sapore.',
        frequenzaGiorni: 15,
        urgente: giorniTrascorsi % 15 === 0,
        completato: Boolean(planting.ultimoConcimato && (oggi.getTime() - new Date(planting.ultimoConcimato).getTime()) / (1000 * 60 * 60 * 24) < 12),
      });
    }
  }

  // 3. Prevenzione Parassiti & Malattie
  if (!planting.completata && plant.avversita.length > 0) {
    const mainAdv = plant.avversita[0];
    promemoria.push({
      id: `dif-${planting.id}`,
      tipo: 'difesa',
      titolo: `Controllo preventivo: ${mainAdv.nome}`,
      descrizione: `Verifica il retro delle foglie. Rimedio bio: ${mainAdv.rimedioBio}`,
      frequenzaGiorni: 10,
      urgente: giorniTrascorsi >= 14 && giorniTrascorsi % 10 === 0,
      completato: Boolean(planting.ultimoTrattamentoBio && (oggi.getTime() - new Date(planting.ultimoTrattamentoBio).getTime()) / (1000 * 60 * 60 * 24) < 7),
    });
  }

  // 4. Specific Cultural Care (e.g. Tomato pruning, hilling potatoes, thinning)
  if (!planting.completata && plant.cureColturali.length > 0) {
    promemoria.push({
      id: `cura-${planting.id}`,
      tipo: 'cura',
      titolo: `Cura colturale consigliata`,
      descrizione: plant.cureColturali[0],
      frequenzaGiorni: 7,
      urgente: giorniTrascorsi > 10 && giorniTrascorsi % 7 === 0,
      completato: false,
    });
  }

  return {
    giorniTrascorsi,
    giorniTotaliPrevisti,
    giorniRimanenti,
    percentualeCompletamento,
    faseNome,
    faseDescrizione,
    faseIndice,
    dataStimataRaccolto,
    consiglioAttuale,
    statoRaccolto,
    promemoria
  };
}

export const PHENOLOGICAL_STAGES = [
  'Germinazione',
  'Prime foglie',
  'Crescita vegetativa',
  'Fioritura / Ingrossamento',
  'Maturazione',
  'Raccolto'
];
