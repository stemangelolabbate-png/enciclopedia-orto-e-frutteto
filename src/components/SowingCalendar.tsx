import React, { useState } from 'react';
import { Plant, ClimateZone } from '../types';
import { PLANTS_DATA, MONTH_NAMES } from '../data/plants';
import { getAdjustedMonths, CLIMATE_ZONES } from '../utils/climateHelper';
import { 
  CalendarDays, 
  Moon, 
  Sprout, 
  Sun, 
  Clock, 
  Sparkles,
  ChevronRight,
  ShieldAlert,
  MapPin
} from 'lucide-react';

interface SowingCalendarProps {
  onSelectPlant: (plant: Plant) => void;
  onOpenCalculator: (plant: Plant) => void;
  climateZone?: ClimateZone;
  onOpenClimateModal?: () => void;
}

export const SowingCalendar: React.FC<SowingCalendarProps> = ({
  onSelectPlant,
  onOpenCalculator,
  climateZone = 'centro',
  onOpenClimateModal,
}) => {
  const currentRealMonth = new Date().getMonth() + 1;
  const [selectedMonth, setSelectedMonth] = useState<number>(currentRealMonth);
  const [categoryFilter, setCategoryFilter] = useState<'tutti' | 'ortaggio' | 'frutto' | 'aromatica'>('tutti');

  const zoneInfo = CLIMATE_ZONES[climateZone] || CLIMATE_ZONES.centro;

  const filteredPlants = PLANTS_DATA.filter((p) => {
    if (categoryFilter === 'tutti') return true;
    return p.categoria === categoryFilter;
  });

  // Groups for the chosen month adjusted for climate zone
  const inPienaTerra = filteredPlants.filter((p) =>
    getAdjustedMonths(p.mesiSeminaTerra, climateZone, 'semina').includes(selectedMonth)
  );
  const inSemenzaio = filteredPlants.filter((p) =>
    getAdjustedMonths(p.mesiSeminaSemenzaio, climateZone, 'semina').includes(selectedMonth)
  );
  const inTrapianto = filteredPlants.filter((p) =>
    getAdjustedMonths(p.mesiTrapianto, climateZone, 'trapianto').includes(selectedMonth)
  );
  const inRaccolta = filteredPlants.filter((p) =>
    getAdjustedMonths(p.mesiRaccolta, climateZone, 'raccolta').includes(selectedMonth)
  );

  return (
    <div id="sowing-calendar-section" className="space-y-6 font-sans">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-md border border-stone-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
              <CalendarDays className="w-4 h-4" />
              <span>Guida alle Stagioni, Clima & Fasi Lunari</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Calendario Lunare & Semine
            </h2>
            <p className="text-stone-300 text-sm mt-1 max-w-xl">
              Scopri cosa seminare all'aperto o al riparo mese per mese, con date calibrate sulla zona geografica del tuo orto.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {onOpenClimateModal && (
              <button
                onClick={onOpenClimateModal}
                className="flex items-center space-x-2 bg-emerald-900/60 hover:bg-emerald-800/80 border border-emerald-700/70 px-3.5 py-2 rounded-2xl transition text-xs font-semibold text-emerald-200"
                title="Modifica zona climatica"
              >
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Zona: <strong>{zoneInfo.titoloBreve}</strong></span>
              </button>
            )}

            <div className="flex items-center space-x-2 bg-stone-800/80 border border-stone-700 p-2 px-3 rounded-2xl">
              <Moon className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-xs text-stone-300">
                Mese: <strong className="text-amber-400 text-sm">{MONTH_NAMES[selectedMonth - 1]}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* 12 Months Horizontal Selector Bar */}
        <div className="mt-6 pt-4 border-t border-stone-800 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max pb-1">
            {MONTH_NAMES.map((monthName, idx) => {
              const monthNum = idx + 1;
              const isCurrent = monthNum === currentRealMonth;
              const isSelected = monthNum === selectedMonth;

              return (
                <button
                  key={idx}
                  onClick={() => setSelectedMonth(monthNum)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex flex-col items-center gap-0.5 ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-400'
                      : isCurrent
                      ? 'bg-stone-800 text-amber-300 border border-amber-500/40 hover:bg-stone-700'
                      : 'bg-stone-800/60 text-stone-400 hover:bg-stone-700 hover:text-white'
                  }`}
                >
                  <span>{monthName}</span>
                  {isCurrent && (
                    <span className="text-[9px] font-normal text-amber-300">Oggi</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Category Filter for Calendar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-stone-200">
        <div className="flex items-center space-x-2 text-xs">
          <span className="text-stone-500 font-medium">Filtra categoria:</span>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setCategoryFilter('tutti')}
              className={`px-3 py-1 rounded-lg font-semibold transition ${
                categoryFilter === 'tutti'
                  ? 'bg-emerald-700 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Tutte
            </button>
            <button
              onClick={() => setCategoryFilter('ortaggio')}
              className={`px-3 py-1 rounded-lg font-semibold transition ${
                categoryFilter === 'ortaggio'
                  ? 'bg-emerald-700 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Ortaggi
            </button>
            <button
              onClick={() => setCategoryFilter('aromatica')}
              className={`px-3 py-1 rounded-lg font-semibold transition ${
                categoryFilter === 'aromatica'
                  ? 'bg-emerald-700 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Aromatiche
            </button>
            <button
              onClick={() => setCategoryFilter('frutto')}
              className={`px-3 py-1 rounded-lg font-semibold transition ${
                categoryFilter === 'frutto'
                  ? 'bg-emerald-700 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Frutti
            </button>
          </div>
        </div>

        <div className="text-xs text-stone-500">
          Clima applicato: <strong className="text-stone-800">{zoneInfo.nome}</strong>
        </div>
      </div>

      {/* 4 Quadrants of the Selected Month */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 1. Semina in Piena Terra */}
        <div className="bg-white rounded-2xl border border-emerald-300 p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  🌱
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 font-serif text-base">
                    Semina in Piena Terra ad {MONTH_NAMES[selectedMonth - 1]}
                  </h3>
                  <span className="text-[11px] text-stone-500">
                    Semina diretta nei solchi dell'orto all'aperto
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                {inPienaTerra.length} piante
              </span>
            </div>

            {inPienaTerra.length === 0 ? (
              <p className="text-xs text-stone-400 italic py-6 text-center">
                Nessuna semina all'aperto consigliata questo mese.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                {inPienaTerra.map((plant) => (
                  <div
                    key={plant.id}
                    onClick={() => onSelectPlant(plant)}
                    className="p-2.5 rounded-xl border border-stone-200 hover:border-emerald-500 hover:bg-emerald-50/50 cursor-pointer transition flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-2.5">
                      <span className="text-2xl">{plant.icona}</span>
                      <div>
                        <span className="text-xs font-bold text-stone-800 group-hover:text-emerald-900 block">
                          {plant.nome}
                        </span>
                        <span className="text-[10px] text-stone-500">
                          Luna {plant.faseLunare}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-emerald-700" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 2. Semina in Semenzaio Protetto */}
        <div className="bg-white rounded-2xl border border-amber-300 p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  🏠
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 font-serif text-base">
                    Semenzaio Protetto / A Caldo
                  </h3>
                  <span className="text-[11px] text-stone-500">
                    Al riparo in serra, cassone caldo o vasetti al chiuso
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                {inSemenzaio.length} piante
              </span>
            </div>

            {inSemenzaio.length === 0 ? (
              <p className="text-xs text-stone-400 italic py-6 text-center">
                Nessuna semina in semenzaio prevista per questo mese.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                {inSemenzaio.map((plant) => (
                  <div
                    key={plant.id}
                    onClick={() => onSelectPlant(plant)}
                    className="p-2.5 rounded-xl border border-stone-200 hover:border-amber-500 hover:bg-amber-50/50 cursor-pointer transition flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-2.5">
                      <span className="text-2xl">{plant.icona}</span>
                      <div>
                        <span className="text-xs font-bold text-stone-800 group-hover:text-amber-900 block">
                          {plant.nome}
                        </span>
                        <span className="text-[10px] text-stone-500">
                          {plant.temperaturaIdeale.germinazioneOttimale}°C ottimali
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-amber-700" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 3. Trapianto Piantine */}
        <div className="bg-white rounded-2xl border border-blue-300 p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                  🪴
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 font-serif text-base">
                    Trapianto Piantine ad {MONTH_NAMES[selectedMonth - 1]}
                  </h3>
                  <span className="text-[11px] text-stone-500">
                    Messa a dimora delle piantine con panetto di terra
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                {inTrapianto.length} piante
              </span>
            </div>

            {inTrapianto.length === 0 ? (
              <p className="text-xs text-stone-400 italic py-6 text-center">
                Nessun trapianto raccomandato in questo periodo.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                {inTrapianto.map((plant) => (
                  <div
                    key={plant.id}
                    onClick={() => onSelectPlant(plant)}
                    className="p-2.5 rounded-xl border border-stone-200 hover:border-blue-500 hover:bg-blue-50/50 cursor-pointer transition flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-2.5">
                      <span className="text-2xl">{plant.icona}</span>
                      <div>
                        <span className="text-xs font-bold text-stone-800 group-hover:text-blue-900 block">
                          {plant.nome}
                        </span>
                        <span className="text-[10px] text-stone-500">
                          {plant.distanze.traPianteCm} cm tra le piante
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-blue-700" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 4. Mese di Raccolta */}
        <div className="bg-white rounded-2xl border border-rose-300 p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold">
                  🧺
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 font-serif text-base">
                    Raccolto & Cestino di {MONTH_NAMES[selectedMonth - 1]}
                  </h3>
                  <span className="text-[11px] text-stone-500">
                    Cosa è maturo e pronto da gustare nell'orto
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800">
                {inRaccolta.length} piante
              </span>
            </div>

            {inRaccolta.length === 0 ? (
              <p className="text-xs text-stone-400 italic py-6 text-center">
                Mese di riposo vegetativo o attesa maturazione.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                {inRaccolta.map((plant) => (
                  <div
                    key={plant.id}
                    onClick={() => onSelectPlant(plant)}
                    className="p-2.5 rounded-xl border border-stone-200 hover:border-rose-500 hover:bg-rose-50/50 cursor-pointer transition flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-2.5">
                      <span className="text-2xl">{plant.icona}</span>
                      <div>
                        <span className="text-xs font-bold text-stone-800 group-hover:text-rose-900 block">
                          {plant.nome}
                        </span>
                        <span className="text-[10px] text-stone-500">
                          {plant.sottoCategoria}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-rose-700" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
