import React from 'react';
import { Plant, ClimateZone } from '../types';
import { MONTH_NAMES } from '../data/plants';
import { getAdjustedMonths, CLIMATE_ZONES } from '../utils/climateHelper';
import { 
  X, 
  Clock, 
  Sprout, 
  Sun, 
  Droplets, 
  Moon, 
  Thermometer, 
  Ruler, 
  Heart, 
  AlertTriangle, 
  ShieldCheck, 
  Sparkles, 
  Calculator,
  Layers,
  MapPin,
  ExternalLink
} from 'lucide-react';

interface PlantDetailModalProps {
  plant: Plant | null;
  onClose: () => void;
  onOpenCalculator: (plant: Plant) => void;
  onSelectAnotherPlant: (plantName: string) => void;
  climateZone?: ClimateZone;
  onOpenDiseaseManager?: (diseaseId?: string) => void;
}

export const PlantDetailModal: React.FC<PlantDetailModalProps> = ({
  plant,
  onClose,
  onOpenCalculator,
  onSelectAnotherPlant,
  climateZone = 'centro',
  onOpenDiseaseManager,
}) => {
  if (!plant) return null;

  const zoneInfo = CLIMATE_ZONES[climateZone] || CLIMATE_ZONES.centro;

  // Compute climate-adjusted months
  const adjustedSemenzaio = getAdjustedMonths(plant.mesiSeminaSemenzaio, climateZone, 'semina');
  const adjustedTerra = getAdjustedMonths(plant.mesiSeminaTerra, climateZone, 'semina');
  const adjustedTrapianto = getAdjustedMonths(plant.mesiTrapianto, climateZone, 'trapianto');
  const adjustedRaccolta = getAdjustedMonths(plant.mesiRaccolta, climateZone, 'raccolta');

  return (
    <div 
      id="plant-detail-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex flex-col items-center justify-start p-2 sm:p-4 md:p-6 overscroll-contain"
      onClick={onClose}
    >
      <div
        id="plant-detail-modal-content"
        className="relative bg-white w-full max-w-4xl rounded-2xl sm:rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-auto max-h-[94vh] sm:max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-stone-900 text-stone-100 p-4 sm:p-7 flex items-start justify-between border-b border-stone-800 shrink-0">
          <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 pr-2">
            <div className="text-3xl sm:text-5xl p-2 sm:p-3 bg-stone-800/80 rounded-2xl border border-stone-700 shadow-inner shrink-0">
              {plant.icona}
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
                <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-emerald-600/30 text-emerald-300 border border-emerald-500/40">
                  {plant.categoria.toUpperCase()}
                </span>
                <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-stone-800 text-stone-300 border border-stone-700">
                  {plant.sottoCategoria}
                </span>
                <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-stone-800 text-amber-300 border border-amber-500/30">
                  {plant.difficolta}
                </span>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold font-serif text-white tracking-tight truncate">
                {plant.nome}
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 italic truncate">
                {plant.nomeScientifico} · Fam. {plant.famiglia}
              </p>
            </div>
          </div>

          <button
            id="btn-close-modal"
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800 transition shrink-0"
            aria-label="Chiudi scheda"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-8 space-y-6 sm:space-y-8 divide-y divide-stone-100 font-sans overscroll-contain pb-8">
          {/* Botanical Introduction */}
          <div>
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans">
              {plant.descrizione}
            </p>
          </div>

          {/* Quick Metrics Cards */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-stone-800">
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70 flex flex-col justify-between">
              <span className="text-xs font-medium text-stone-700 flex items-center gap-1.5 mb-1">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                Tempo al Raccolto
              </span>
              <span className="text-lg font-bold text-stone-900">
                {plant.giorniRaccolto.min} - {plant.giorniRaccolto.max} gg
              </span>
              <span className="text-[11px] text-stone-500 mt-0.5">
                Dalla semina / trapianto
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70 flex flex-col justify-between">
              <span className="text-xs font-medium text-stone-700 flex items-center gap-1.5 mb-1">
                <Sprout className="w-3.5 h-3.5 text-emerald-600" />
                Germinazione
              </span>
              <span className="text-lg font-bold text-stone-900">
                {plant.giorniGerminazione.min} - {plant.giorniGerminazione.max} gg
              </span>
              <span className="text-[11px] text-stone-500 mt-0.5">
                A {plant.temperaturaIdeale.germinazioneOttimale}°C nel suolo
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70 flex flex-col justify-between">
              <span className="text-xs font-medium text-stone-700 flex items-center gap-1.5 mb-1">
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                Esposizione Solare
              </span>
              <span className="text-base font-bold text-stone-900">
                {plant.esposizione}
              </span>
              <span className="text-[11px] text-stone-500 mt-0.5">
                6-8h di luce diretta
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70 flex flex-col justify-between">
              <span className="text-xs font-medium text-stone-700 flex items-center gap-1.5 mb-1">
                <Droplets className="w-3.5 h-3.5 text-blue-500" />
                Irrigazione
              </span>
              <span className="text-base font-bold text-stone-900">
                {plant.irrigazione.livello}
              </span>
              <span className="text-[11px] text-stone-500 mt-0.5 truncate">
                {plant.irrigazione.livello === 'Costante' ? 'Terreno sempre fresco' : 'Senza ristagni'}
              </span>
            </div>
          </div>

          {/* Lunar Phase Advice */}
          <div className="pt-6">
            <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 flex items-start space-x-3.5">
              <div className="p-2.5 rounded-xl bg-amber-400/20 text-amber-300 shrink-0">
                <Moon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-sm text-stone-100">
                    Fase Lunare Consigliata: Luna {plant.faseLunare}
                  </h4>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-stone-800 text-amber-300 font-medium">
                    Tradizione Contadina
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-300 mt-1 leading-relaxed">
                  {plant.faseLunareDettaglio}
                </p>
              </div>
            </div>
          </div>

          {/* 12-Month Planting & Harvest Schedule with Climate Adaptation */}
          <div className="pt-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                Calendario Annuale di Semina e Raccolta
              </h3>
              <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium">
                <MapPin className="w-3.5 h-3.5" />
                <span>Adattato per: <strong>{zoneInfo.titoloBreve}</strong></span>
              </span>
            </div>
            
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 overflow-x-auto">
              <div className="grid grid-cols-12 gap-1 min-w-[550px] text-center text-xs">
                {MONTH_NAMES.map((m, idx) => {
                  const monthNum = idx + 1;
                  const isSemenzaio = adjustedSemenzaio.includes(monthNum);
                  const isTerra = adjustedTerra.includes(monthNum);
                  const isTrapianto = adjustedTrapianto.includes(monthNum);
                  const isRaccolta = adjustedRaccolta.includes(monthNum);

                  return (
                    <div key={idx} className="flex flex-col items-center">
                      <span className="text-[11px] font-semibold text-stone-600 mb-1">
                        {m.substring(0, 3)}
                      </span>
                      <div className="w-full h-16 rounded-lg bg-white border border-stone-200 flex flex-col justify-center items-center gap-0.5 p-1 shadow-2xs">
                        {isSemenzaio && (
                          <span className="w-full py-0.5 rounded text-[9px] font-bold bg-amber-100 text-amber-800 leading-none">
                            Semenz.
                          </span>
                        )}
                        {isTerra && (
                          <span className="w-full py-0.5 rounded text-[9px] font-bold bg-emerald-600 text-white leading-none">
                            Terra
                          </span>
                        )}
                        {isTrapianto && (
                          <span className="w-full py-0.5 rounded text-[9px] font-bold bg-blue-100 text-blue-800 leading-none">
                            Trap.
                          </span>
                        )}
                        {isRaccolta && (
                          <span className="w-full py-0.5 rounded text-[9px] font-bold bg-rose-100 text-rose-800 leading-none">
                            Raccolto
                          </span>
                        )}
                        {!isSemenzaio && !isTerra && !isTrapianto && !isRaccolta && (
                          <span className="text-stone-300 text-xs">-</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="mt-3 pt-3 border-t border-stone-200 flex flex-wrap items-center justify-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-amber-100 border border-amber-300"></span>
                  <span className="text-stone-600">Semina in Semenzaio protetto</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-emerald-600"></span>
                  <span className="text-stone-600 font-medium">Semina in Piena Terra</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-blue-100 border border-blue-300"></span>
                  <span className="text-stone-600">Trapianto piantina</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-rose-100 border border-rose-300"></span>
                  <span className="text-stone-600">Periodo di Raccolta</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sowing Distances & Temperatures */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Distanze & Densità */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <h4 className="text-sm font-bold text-stone-900 mb-2.5 flex items-center gap-2">
                <Ruler className="w-4 h-4 text-emerald-600" />
                Distanze e Sesto d'Impianto
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-700">
                <li className="flex justify-between border-b border-stone-200 pb-1">
                  <span className="text-stone-500">Distanza tra le piante:</span>
                  <strong className="text-stone-900">{plant.distanze.traPianteCm} cm</strong>
                </li>
                <li className="flex justify-between border-b border-stone-200 pb-1">
                  <span className="text-stone-500">Distanza tra le file:</span>
                  <strong className="text-stone-900">{plant.distanze.traFileCm} cm</strong>
                </li>
                <li className="flex justify-between">
                  <span className="text-stone-500">Profondità di semina:</span>
                  <strong className="text-stone-900">{plant.distanze.profonditaSeminaCm} cm</strong>
                </li>
              </ul>
            </div>

            {/* Temperature Ideali */}
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <h4 className="text-sm font-bold text-stone-900 mb-2.5 flex items-center gap-2">
                <Thermometer className="w-4 h-4 text-amber-600" />
                Temperature di Coltivazione
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-700">
                <li className="flex justify-between border-b border-stone-200 pb-1">
                  <span className="text-stone-500">Germinazione Minima / Ottimale:</span>
                  <strong className="text-stone-900">
                    {plant.temperaturaIdeale.germinazioneMin}°C / {plant.temperaturaIdeale.germinazioneOttimale}°C
                  </strong>
                </li>
                <li className="flex justify-between border-b border-stone-200 pb-1">
                  <span className="text-stone-500">Crescita Minima:</span>
                  <strong className="text-stone-900">{plant.temperaturaIdeale.crescitaMin}°C</strong>
                </li>
                <li className="flex justify-between">
                  <span className="text-stone-500">Crescita Massima tollerata:</span>
                  <strong className="text-stone-900">{plant.temperaturaIdeale.crescitaMax}°C</strong>
                </li>
              </ul>
            </div>
          </div>

          {/* Plant Companions (Consociazioni) */}
          <div className="pt-6">
            <h3 className="text-base font-bold text-stone-900 mb-3 flex items-center gap-2">
              <Heart className="w-4 h-4 text-rose-500" />
              Consociazioni Botaniche nell'Orto
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Amiche */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-2">
                  ✅ Piante Amiche (Favoriscono la crescita)
                </span>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {plant.consociazioni.amiche.map((amica, i) => (
                    <button
                      key={i}
                      onClick={() => onSelectAnotherPlant(amica)}
                      className="px-2.5 py-1 rounded-lg bg-white border border-emerald-300 text-emerald-900 text-xs font-semibold hover:bg-emerald-100 transition flex items-center gap-1 shadow-2xs"
                    >
                      <span>{amica}</span>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-emerald-900/80 leading-relaxed">
                  {plant.consociazioni.motivo}
                </p>
              </div>

              {/* Nemiche */}
              <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block mb-2">
                  ❌ Piante Nemiche (Evitare la vicinanza)
                </span>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {plant.consociazioni.nemiche.map((nemica, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-white border border-rose-300 text-rose-900 text-xs font-semibold"
                    >
                      {nemica}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-rose-900/80 leading-relaxed">
                  Competizione per nutrienti simili, sostanze inibitorie radicali o condivisione di medesimi parassiti e funghi.
                </p>
              </div>
            </div>
          </div>

          {/* Soil and Irrigation Details */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <h4 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-stone-600" />
                Terreno & Substrato Ideale
              </h4>
              <p className="text-stone-700 leading-relaxed">
                {plant.terreno}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
              <h4 className="text-sm font-bold text-stone-900 mb-2 flex items-center gap-2">
                <Droplets className="w-4 h-4 text-blue-500" />
                Dettagli Irrigazione
              </h4>
              <p className="text-stone-700 leading-relaxed">
                {plant.irrigazione.dettagli}
              </p>
            </div>
          </div>

          {/* Cultural Care Checklist */}
          <div className="pt-6">
            <h3 className="text-base font-bold text-stone-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Cure Colturali & Segreti dell'Orto
            </h3>
            <div className="space-y-2">
              {plant.cureColturali.map((cura, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200/80 text-xs sm:text-sm text-stone-700">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{cura}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pests & Biological Remedies - Directly Linked to Disease Section! */}
          <div className="pt-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                Avversità Comuni & Rimedi Biologici
              </h3>
              {onOpenDiseaseManager && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenDiseaseManager();
                  }}
                  className="text-xs font-semibold text-amber-700 hover:text-amber-900 flex items-center gap-1"
                >
                  <span>Apri Pronto Soccorso Bio</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {plant.avversita.map((avv, idx) => (
                <div 
                  key={idx} 
                  onClick={() => {
                    if (onOpenDiseaseManager) {
                      onClose();
                      onOpenDiseaseManager(avv.nome.toLowerCase());
                    }
                  }}
                  className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 text-xs cursor-pointer hover:border-amber-400 hover:bg-amber-50/40 transition group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-stone-900 group-hover:text-amber-950 flex items-center gap-1">
                      {avv.nome}
                      <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-amber-700" />
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      avv.tipo === 'parassita' ? 'bg-amber-100 text-amber-800' : 'bg-purple-100 text-purple-800'
                    }`}>
                      {avv.tipo}
                    </span>
                  </div>
                  <p className="text-stone-600 mt-1">
                    <strong className="text-emerald-700 font-medium">Rimedio Bio:</strong> {avv.rimedioBio}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Culinary and Historical Curiosities */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/70 text-xs">
              <h4 className="text-sm font-bold text-amber-950 mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Proprietà e Raccolta
              </h4>
              <p className="text-amber-900/90 leading-relaxed">
                {plant.proprietaERaccolta}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 text-xs">
              <h4 className="text-sm font-bold text-stone-900 mb-1.5">
                📜 Curiosità Storica & Botanica
              </h4>
              <p className="text-stone-600 leading-relaxed italic">
                "{plant.curiosita}"
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-3.5 sm:p-6 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shrink-0">
          <div className="text-xs text-stone-500 hidden sm:block">
            Tempo medio stimato per la raccolta: <strong>{plant.giorniRaccolto.min} - {plant.giorniRaccolto.max} giorni</strong>
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <button
              id="btn-modal-close-footer"
              onClick={onClose}
              className="px-3.5 py-2.5 sm:px-4 sm:py-2 rounded-xl text-stone-600 hover:bg-stone-200 text-xs sm:text-sm font-medium transition border border-stone-200 sm:border-0"
            >
              Chiudi
            </button>

            <button
              id="btn-modal-open-calc"
              onClick={() => {
                onClose();
                onOpenCalculator(plant);
              }}
              className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white text-xs sm:text-sm font-semibold shadow-sm transition active:scale-95"
            >
              <Calculator className="w-4 h-4 shrink-0" />
              <span>Calcola Semina di {plant.nome}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
