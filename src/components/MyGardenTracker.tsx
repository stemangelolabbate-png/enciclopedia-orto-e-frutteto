import React, { useState } from 'react';
import { ActivePlanting, ClimateZone } from '../types';
import { PLANTS_DATA } from '../data/plants';
import { calculateGrowthStatus } from '../utils/gardenCalculator';
import { 
  Sprout, 
  Calendar, 
  Clock, 
  CheckCircle, 
  Trash2, 
  PlusCircle, 
  Info,
  Droplets,
  Sparkles,
  ShieldAlert,
  Bell,
  Check
} from 'lucide-react';

interface MyGardenTrackerProps {
  plantings: ActivePlanting[];
  onToggleComplete: (id: string) => void;
  onDeletePlanting: (id: string) => void;
  onOpenNewPlanting: () => void;
  onSelectPlant: (plantId: string) => void;
  climateZone?: ClimateZone;
  onLogCareAction?: (plantingId: string, actionType: 'irrigazione' | 'concimazione' | 'difesa') => void;
}

export const MyGardenTracker: React.FC<MyGardenTrackerProps> = ({
  plantings,
  onToggleComplete,
  onDeletePlanting,
  onOpenNewPlanting,
  onSelectPlant,
  climateZone = 'centro',
  onLogCareAction,
}) => {
  const [filterActive, setFilterActive] = useState<'attive' | 'raccolte' | 'tutte'>('attive');

  const activeCount = plantings.filter((p) => !p.completata).length;
  const completedCount = plantings.filter((p) => p.completata).length;

  const filteredPlantings = plantings.filter((p) => {
    if (filterActive === 'attive') return !p.completata;
    if (filterActive === 'raccolte') return p.completata;
    return true;
  });

  // Calculate all reminders across active crops
  const activePlantingsStatus = plantings
    .filter((p) => !p.completata)
    .map((planting) => {
      const plant = PLANTS_DATA.find((item) => item.id === planting.plantId) || PLANTS_DATA[0];
      const status = calculateGrowthStatus(plant, planting, climateZone);
      return { planting, plant, status };
    });

  // Collect urgent reminders
  const urgentReminders = activePlantingsStatus.flatMap(({ planting, plant, status }) =>
    status.promemoria
      .filter((rem) => rem.urgente)
      .map((rem) => ({ ...rem, plantingId: planting.id, plantName: planting.nomePersonalizzato, plantIcon: plant.icona }))
  );

  return (
    <div id="my-garden-tracker-section" className="space-y-6 font-sans">
      {/* Top Banner & Statistics */}
      <div className="bg-gradient-to-r from-emerald-900 via-stone-900 to-emerald-950 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-md border border-emerald-800/40">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
          <div>
            <div className="flex items-center space-x-2 text-emerald-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-1">
              <Sprout className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Diario & Monitoraggio Giornaliero</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Il Mio Orto Virtuale
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-xl line-clamp-2 sm:line-clamp-none">
              Segui l'avanzamento giorno per giorno di tutte le tue piante seminate o trapiantate, 
              con i giorni rimanenti al raccolto e promemoria agronomici.
            </p>
          </div>

          <div className="flex items-center justify-between sm:justify-start flex-wrap gap-2.5 sm:gap-3 pt-2 sm:pt-0 border-t border-emerald-800/60 sm:border-0">
            <div className="flex items-center gap-2">
              <div className="bg-stone-800/80 border border-stone-700/80 rounded-xl sm:rounded-2xl px-3 py-2 sm:p-3.5 text-center min-w-[75px] sm:min-w-[90px]">
                <span className="text-xl sm:text-2xl font-extrabold font-mono text-emerald-400 block leading-tight">
                  {activeCount}
                </span>
                <span className="text-[10px] sm:text-[11px] text-stone-400 uppercase font-semibold">Crescita</span>
              </div>

              <div className="bg-stone-800/80 border border-stone-700/80 rounded-xl sm:rounded-2xl px-3 py-2 sm:p-3.5 text-center min-w-[75px] sm:min-w-[90px]">
                <span className="text-xl sm:text-2xl font-extrabold font-mono text-amber-400 block leading-tight">
                  {completedCount}
                </span>
                <span className="text-[10px] sm:text-[11px] text-stone-400 uppercase font-semibold">Raccolte</span>
              </div>
            </div>

            <button
              id="btn-add-crop-tracker"
              onClick={onOpenNewPlanting}
              className="flex-1 sm:flex-initial px-3.5 py-2.5 sm:px-4 sm:py-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-xl sm:rounded-2xl text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition active:scale-95 shrink-0"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Nuova Coltura</span>
            </button>
          </div>
        </div>
      </div>

      {/* Action Center / Reminders of the Day */}
      {urgentReminders.length > 0 && (
        <div id="urgent-reminders-panel" className="bg-amber-50/90 border-2 border-amber-300/80 rounded-2xl p-4 sm:p-5 shadow-xs">
          <div className="flex items-center space-x-2 text-amber-900 font-bold text-sm sm:text-base mb-3">
            <Bell className="w-4 h-4 text-amber-600 animate-bounce" />
            <span>Promemoria & Azioni per Oggi ({urgentReminders.length} da eseguire)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {urgentReminders.map((rem, idx) => (
              <div
                key={idx}
                className="p-3 bg-white rounded-xl border border-amber-200/80 shadow-2xs flex items-start justify-between gap-3"
              >
                <div className="flex items-start space-x-2.5">
                  <span className="text-2xl shrink-0">{rem.plantIcon}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs sm:text-sm text-stone-900">
                        {rem.plantName}
                      </span>
                      <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded uppercase ${
                        rem.tipo === 'irrigazione'
                          ? 'bg-blue-100 text-blue-800'
                          : rem.tipo === 'concimazione'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {rem.tipo}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 font-medium mt-0.5">
                      {rem.titolo}
                    </p>
                    <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">
                      {rem.descrizione}
                    </p>
                  </div>
                </div>

                {onLogCareAction && (
                  <button
                    onClick={() => onLogCareAction(rem.plantingId, rem.tipo as any)}
                    className="px-2.5 py-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-semibold text-xs transition shrink-0 flex items-center gap-1"
                    title="Segna azione eseguita"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Fatto</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="flex items-center justify-between border-b border-stone-200 pb-3">
        <div className="flex items-center space-x-2">
          <button
            id="tab-filter-active"
            onClick={() => setFilterActive('attive')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
              filterActive === 'attive'
                ? 'bg-emerald-800 text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            In Crescita ({activeCount})
          </button>

          <button
            id="tab-filter-completed"
            onClick={() => setFilterActive('raccolte')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
              filterActive === 'raccolte'
                ? 'bg-emerald-800 text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Raccolte ({completedCount})
          </button>

          <button
            id="tab-filter-all"
            onClick={() => setFilterActive('tutte')}
            className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
              filterActive === 'tutte'
                ? 'bg-emerald-800 text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Tutte ({plantings.length})
          </button>
        </div>
      </div>

      {/* Empty State */}
      {filteredPlantings.length === 0 && (
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-dashed border-stone-300">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center text-3xl mx-auto mb-4">
            🌱
          </div>
          <h3 className="text-lg font-bold text-stone-800 font-serif">
            Nessuna pianta registrata in questa sezione
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto mt-1 mb-6">
            Inizia a tracciare una semina o un trapianto nell'orto: potrai calcolare giorno dopo giorno
            i giorni trascorsi e vedere la data stimata del raccolto.
          </p>
          <button
            onClick={onOpenNewPlanting}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 transition shadow-sm"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Aggiungi una Pianta al Tuo Orto</span>
          </button>
        </div>
      )}

      {/* Grid of Active Plantings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredPlantings.map((planting) => {
          const plant = PLANTS_DATA.find((p) => p.id === planting.plantId) || PLANTS_DATA[0];
          const status = calculateGrowthStatus(plant, planting, climateZone);

          const dataFormattata = new Date(planting.dataSemina).toLocaleDateString('it-IT', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          });

          return (
            <div
              key={planting.id}
              id={`planting-card-${planting.id}`}
              className={`bg-white rounded-2xl border p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${
                planting.completata
                  ? 'border-stone-300 opacity-85 bg-stone-50/70'
                  : status.percentualeCompletamento >= 100
                  ? 'border-emerald-500 ring-2 ring-emerald-200'
                  : 'border-stone-200'
              }`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-2.5 mb-3">
                  <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0">
                    <span className="text-2xl sm:text-3xl p-2 sm:p-2.5 bg-stone-50 border border-stone-100 rounded-xl shrink-0">
                      {plant.icona}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <h3 className="text-base sm:text-lg font-bold text-stone-900 truncate">
                          {planting.nomePersonalizzato}
                        </h3>
                        {planting.completata && (
                          <span className="px-1.5 py-0.2 rounded-full text-[9px] sm:text-[10px] font-bold bg-stone-200 text-stone-700">
                            Raccolto ✓
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => onSelectPlant(plant.id)}
                        className="text-[11px] sm:text-xs text-emerald-700 hover:text-emerald-900 underline flex items-center gap-1 mt-0.5 truncate"
                      >
                        <span className="truncate">{plant.nome}</span>
                        <Info className="w-3 h-3 inline shrink-0" />
                      </button>
                    </div>
                  </div>

                  {/* Day Counter Big Badge */}
                  <div className="text-right shrink-0">
                    <div className="inline-block px-2.5 py-1 bg-stone-900 text-amber-400 font-mono font-black text-xs sm:text-sm rounded-xl shadow-xs">
                      Giorno {status.giorniTrascorsi}
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-stone-500 block mt-0.5">
                      {planting.tipoAvvio === 'seme' ? 'da semina' : 'da trapianto'}
                    </span>
                  </div>
                </div>

                {/* Progress Bar & Status */}
                <div className="my-4 bg-stone-50 p-3.5 rounded-xl border border-stone-100">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-bold text-stone-800 flex items-center gap-1.5">
                      <Sprout className="w-3.5 h-3.5 text-emerald-600" />
                      {status.faseNome}
                    </span>
                    <span className="font-semibold text-emerald-700">
                      {status.percentualeCompletamento}%
                    </span>
                  </div>

                  {/* Visual Track */}
                  <div className="w-full bg-stone-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        planting.completata
                          ? 'bg-stone-500'
                          : status.percentualeCompletamento >= 100
                          ? 'bg-emerald-500'
                          : 'bg-emerald-600'
                      }`}
                      style={{ width: `${Math.max(4, status.percentualeCompletamento)}%` }}
                    ></div>
                  </div>

                  {/* Phase steps */}
                  <div className="flex justify-between text-[9px] text-stone-500 mt-1.5">
                    <span>Avvio ({dataFormattata})</span>
                    <span>
                      {status.percentualeCompletamento >= 100
                        ? '🎉 Pronto per la raccolta!'
                        : `Stima raccolta: ${status.dataStimataRaccolto}`}
                    </span>
                  </div>
                </div>

                {/* Growth Metric Pills */}
                <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                  <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-100">
                    <span className="text-[10px] text-stone-600 uppercase font-semibold block flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-500" />
                      Tempo Rimanente
                    </span>
                    <span className="font-bold text-stone-800">
                      {status.percentualeCompletamento >= 100
                        ? '0 giorni (raccolta in corso)'
                        : `~ ${status.giorniRimanenti} giorni mancanti`}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-100">
                    <span className="text-[10px] text-stone-600 uppercase font-semibold block flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-blue-500" />
                      Metodo di Coltivazione
                    </span>
                    <span className="font-medium text-stone-800 capitalize">
                      {planting.tipoAvvio === 'seme' ? 'Da seme nel terreno' : 'Trapianto da piantina'}
                    </span>
                  </div>
                </div>

                {/* Agronomist Live Advice */}
                {!planting.completata && (
                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 mb-3 leading-relaxed">
                    <strong className="text-emerald-800 font-semibold block mb-0.5">
                      🌱 Consiglio del giorno:
                    </strong>
                    {status.consiglioAttuale}
                  </div>
                )}

                {/* Quick Care Actions (Watering, Feeding, Pest check) */}
                {!planting.completata && onLogCareAction && (
                  <div className="mb-3 p-2 sm:p-2.5 bg-stone-50 rounded-xl border border-stone-100 flex flex-wrap items-center justify-between gap-1.5 text-xs">
                    <span className="text-[11px] font-bold text-stone-600">Cura:</span>
                    <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
                      <button
                        onClick={() => onLogCareAction(planting.id, 'irrigazione')}
                        className="px-2 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 flex items-center gap-1 font-medium transition active:scale-95 text-[11px] sm:text-xs"
                        title="Registra annaffiatura oggi"
                      >
                        <Droplets className="w-3 h-3 text-blue-600" />
                        <span>Bagnato</span>
                      </button>

                      <button
                        onClick={() => onLogCareAction(planting.id, 'concimazione')}
                        className="px-2 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1 font-medium transition active:scale-95 text-[11px] sm:text-xs"
                        title="Registra concimazione o macerato oggi"
                      >
                        <Sparkles className="w-3 h-3 text-emerald-600" />
                        <span>Concimato</span>
                      </button>

                      <button
                        onClick={() => onLogCareAction(planting.id, 'difesa')}
                        className="px-2 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 flex items-center gap-1 font-medium transition active:scale-95 text-[11px] sm:text-xs"
                        title="Registra trattamento biologico oggi"
                      >
                        <ShieldAlert className="w-3 h-3 text-amber-600" />
                        <span>Difesa</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Notes if any */}
                {planting.note && (
                  <p className="text-xs text-stone-500 italic bg-stone-50 px-3 py-1.5 rounded-lg border border-stone-100 mb-3">
                    "{planting.note}"
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                <button
                  id={`btn-toggle-harvest-${planting.id}`}
                  onClick={() => onToggleComplete(planting.id)}
                  className={`flex-1 sm:flex-initial flex items-center justify-center space-x-1.5 px-3.5 py-2 sm:py-1.5 rounded-xl text-xs font-semibold transition active:scale-95 ${
                    planting.completata
                      ? 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                      : 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-2xs'
                  }`}
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>
                    {planting.completata ? 'In crescita' : 'Segna come Raccolto!'}
                  </span>
                </button>

                <button
                  id={`btn-delete-crop-${planting.id}`}
                  onClick={() => onDeletePlanting(planting.id)}
                  className="p-2 sm:p-1.5 rounded-lg text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition"
                  title="Elimina coltivazione dal diario"
                  aria-label="Elimina coltivazione"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
