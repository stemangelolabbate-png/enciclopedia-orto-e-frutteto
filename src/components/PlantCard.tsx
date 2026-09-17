import React from 'react';
import { Plant } from '../types';
import { Clock, Sprout, Sun, Droplets, Moon, ChevronRight, Calculator } from 'lucide-react';

interface PlantCardProps {
  plant: Plant;
  onSelectPlant: (plant: Plant) => void;
  onOpenCalculator: (plant: Plant) => void;
}

export const PlantCard: React.FC<PlantCardProps> = ({
  plant,
  onSelectPlant,
  onOpenCalculator,
}) => {
  const currentMonth = new Date().getMonth() + 1;
  const isSowableNowInGround = plant.mesiSeminaTerra.includes(currentMonth);
  const isSowableNowInNursery = plant.mesiSeminaSemenzaio.includes(currentMonth);
  const isHarvestableNow = plant.mesiRaccolta.includes(currentMonth);

  const getDifficultyBadge = (diff: Plant['difficolta']) => {
    switch (diff) {
      case 'Facile':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Media':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Esperto':
        return 'bg-purple-100 text-purple-800 border-purple-200';
    }
  };

  const getCategoryColor = (cat: Plant['categoria']) => {
    switch (cat) {
      case 'ortaggio':
        return 'border-t-4 border-t-emerald-600';
      case 'frutto':
        return 'border-t-4 border-t-rose-500';
      case 'aromatica':
        return 'border-t-4 border-t-teal-500';
    }
  };

  return (
    <div
      id={`plant-card-${plant.id}`}
      className={`bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group ${getCategoryColor(
        plant.categoria
      )}`}
    >
      <div className="p-4 sm:p-5">
        {/* Top Badges & Status */}
        <div className="flex items-start justify-between gap-2 mb-2.5 sm:mb-3 min-h-[26px]">
          <div className="flex flex-wrap gap-1.5 items-center">
            <span
              className={`px-2 sm:px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-semibold border ${getDifficultyBadge(
                plant.difficolta
              )}`}
            >
              {plant.difficolta}
            </span>
            <span className="px-2 py-0.5 rounded-full text-[11px] sm:text-xs bg-stone-100 text-stone-600 font-medium">
              {plant.sottoCategoria}
            </span>
          </div>

          {/* Sowing Status Badge */}
          {isSowableNowInGround && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs shrink-0 whitespace-nowrap">
              Semina ora
            </span>
          )}
          {!isSowableNowInGround && isSowableNowInNursery && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200 shadow-2xs shrink-0 whitespace-nowrap">
              Semenzaio ora
            </span>
          )}
          {!isSowableNowInGround && !isSowableNowInNursery && isHarvestableNow && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-bold bg-orange-50 text-orange-800 border border-orange-200 shrink-0 whitespace-nowrap">
              Raccolta ora
            </span>
          )}
        </div>

        {/* Title & Scientific Info */}
        <div className="flex items-start space-x-2.5 sm:space-x-3 mb-2 min-h-[50px]">
          <span className="text-2xl sm:text-3xl p-1.5 sm:p-2 rounded-xl bg-stone-50 border border-stone-100 group-hover:scale-110 transition-transform duration-200 shrink-0 mt-0.5">
            {plant.icona}
          </span>
          <div className="min-w-0 flex-1">
            <h3 
              className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-emerald-700 transition leading-snug line-clamp-2"
              title={plant.nome}
            >
              {plant.nome}
            </h3>
            <p 
              className="text-[11px] sm:text-xs text-stone-500 italic line-clamp-1 mt-0.5"
              title={`${plant.nomeScientifico} · ${plant.famiglia}`}
            >
              {plant.nomeScientifico} · {plant.famiglia}
            </p>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-[11px] sm:text-xs text-stone-600 line-clamp-2 mb-3 sm:mb-4 leading-relaxed">
          {plant.descrizione}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 p-2 sm:p-2.5 bg-stone-50/80 rounded-xl border border-stone-100 text-xs">
          {/* Giorni Raccolto */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 text-stone-700">
            <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <div>
              <span className="text-[9px] sm:text-[10px] text-stone-500 uppercase font-semibold block">Raccolto</span>
              <span className="font-bold text-stone-800 text-xs sm:text-sm">
                {plant.giorniRaccolto.min}-{plant.giorniRaccolto.max} gg
              </span>
            </div>
          </div>

          {/* Giorni Germinazione */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 text-stone-700">
            <Sprout className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <div>
              <span className="text-[9px] sm:text-[10px] text-stone-500 uppercase font-semibold block">Germoglia</span>
              <span className="font-bold text-stone-800 text-xs sm:text-sm">
                {plant.giorniGerminazione.min}-{plant.giorniGerminazione.max} gg
              </span>
            </div>
          </div>

          {/* Esposizione */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 text-stone-700">
            <Sun className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <div className="min-w-0">
              <span className="text-[9px] sm:text-[10px] text-stone-500 uppercase font-semibold block">Luce</span>
              <span className="font-medium text-stone-800 truncate block text-[11px] sm:text-xs">
                {plant.esposizione}
              </span>
            </div>
          </div>

          {/* Fase Lunare */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 text-stone-700">
            <Moon className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
            <div className="min-w-0">
              <span className="text-[9px] sm:text-[10px] text-stone-500 uppercase font-semibold block">Luna</span>
              <span className="font-medium text-stone-800 truncate block text-[11px] sm:text-xs">
                {plant.faseLunare}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-3.5 sm:px-5 py-2.5 sm:py-3 bg-stone-50 border-t border-stone-100 flex items-center justify-between gap-2">
        <button
          id={`btn-calc-plant-${plant.id}`}
          onClick={() => onOpenCalculator(plant)}
          className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2 sm:py-1.5 px-2.5 sm:px-3 rounded-xl text-xs font-semibold bg-white border border-stone-300 text-stone-700 hover:bg-stone-100 active:bg-stone-200 transition active:scale-95"
          title="Calcola i giorni dalla semina e stima il raccolto"
        >
          <Calculator className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Calcola</span>
        </button>

        <button
          id={`btn-detail-plant-${plant.id}`}
          onClick={() => onSelectPlant(plant)}
          className="flex-1 inline-flex items-center justify-center space-x-1 py-2 sm:py-1.5 px-2.5 sm:px-3 rounded-xl text-xs font-semibold bg-emerald-700 hover:bg-emerald-800 text-white transition shadow-2xs active:scale-95"
        >
          <span>Scheda</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
