import React, { useRef, useEffect } from 'react';
import { ClimateZone } from '../types';
import { CLIMATE_ZONES } from '../utils/climateHelper';
import { MapPin, X, Check, ThermometerSnowflake, SunMedium, Compass } from 'lucide-react';

interface ClimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedZone: ClimateZone;
  onSelectZone: (zone: ClimateZone) => void;
  isFirstVisit?: boolean;
}

export const ClimateModal: React.FC<ClimateModalProps> = ({
  isOpen,
  onClose,
  selectedZone,
  onSelectZone,
  isFirstVisit = false,
}) => {
  if (!isOpen) return null;

  const scrollRef = useRef<HTMLDivElement>(null);

  // Lock background body scroll and autofocus scroll area on mount
  useEffect(() => {
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      scrollRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = origOverflow;
      clearTimeout(timer);
    };
  }, []);

  // Universal wheel handler: allows mouse wheel to scroll content even if cursor is over header, footer or overlay
  const handleWheel = (e: React.WheelEvent) => {
    if (scrollRef.current) {
      if (!scrollRef.current.contains(e.target as Node)) {
        scrollRef.current.scrollTop += e.deltaY;
      }
    }
  };

  const zones: { id: ClimateZone; icon: React.ReactNode; badge: string; color: string }[] = [
    {
      id: 'nord',
      icon: <ThermometerSnowflake className="w-6 h-6 text-sky-500" />,
      badge: 'Gelate tardive · Semine posticipate a primavera',
      color: 'border-sky-200 hover:border-sky-400 bg-sky-50/40',
    },
    {
      id: 'centro',
      icon: <Compass className="w-6 h-6 text-emerald-600" />,
      badge: 'Clima temperato · Calendario standard italiano',
      color: 'border-emerald-200 hover:border-emerald-400 bg-emerald-50/40',
    },
    {
      id: 'sud',
      icon: <SunMedium className="w-6 h-6 text-amber-500" />,
      badge: 'Inverni miti · Semine anticipate · Raccolti lunghi',
      color: 'border-amber-200 hover:border-amber-400 bg-amber-50/40',
    },
  ];

  return (
    <div
      id="climate-modal-overlay"
      className="fixed inset-0 z-50 overflow-hidden bg-stone-900/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6"
      onClick={onClose}
      onWheel={handleWheel}
    >
      <div
        id="climate-modal-content"
        className="relative bg-white w-full max-w-2xl rounded-2xl sm:rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[96vh] sm:max-h-[92vh] h-full sm:h-auto"
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
      >
        {/* Header */}
        <div className="bg-stone-900 text-white p-4 sm:p-7 flex items-start justify-between border-b border-stone-800 shrink-0">
          <div className="flex items-center space-x-3 sm:space-x-3.5 min-w-0 pr-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-xl sm:text-2xl shrink-0">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
            </div>
            <div className="min-w-0">
              <div className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/60 text-[10px] sm:text-[11px] font-semibold mb-1">
                <span>Personalizzazione Geografica</span>
              </div>
              <h2 className="text-lg sm:text-2xl font-serif font-bold text-white tracking-tight truncate">
                Dove si trova il tuo orto?
              </h2>
              <p className="text-[11px] sm:text-sm text-stone-300 mt-0.5 line-clamp-2 sm:line-clamp-none">
                Seleziona la tua zona per calibrare le date di semina e raccolto.
              </p>
            </div>
          </div>

          {!isFirstVisit && (
            <button
              id="btn-close-climate-modal"
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800 transition shrink-0"
              aria-label="Chiudi"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Zones List */}
        <div 
          ref={scrollRef}
          tabIndex={0}
          className="p-4 sm:p-6 space-y-3 sm:space-y-3.5 flex-1 min-h-0 overflow-y-auto font-sans focus:outline-none pb-8"
        >
          {zones.map(({ id, icon, badge, color }) => {
            const info = CLIMATE_ZONES[id];
            const isSelected = selectedZone === id;

            return (
              <div
                key={id}
                id={`climate-zone-card-${id}`}
                onClick={() => onSelectZone(id)}
                className={`p-3.5 sm:p-5 rounded-2xl border-2 cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 ${
                  isSelected
                    ? 'border-emerald-600 bg-emerald-50/70 shadow-sm ring-2 ring-emerald-200'
                    : `border-stone-200 ${color}`
                }`}
              >
                <div className="flex items-start space-x-3 sm:space-x-3.5 min-w-0">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-white shadow-2xs border border-stone-200/80 shrink-0">
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
                      <h3 className="text-sm sm:text-base font-bold text-stone-900 font-serif">
                        {info.nome}
                      </h3>
                      <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md font-medium bg-white border border-stone-200 text-stone-600">
                        {badge}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {info.descrizione}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-emerald-800 font-medium mt-1 bg-white/70 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg border border-emerald-100 line-clamp-1 sm:line-clamp-none">
                      💡 {info.consiglio}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center justify-end">
                  {isSelected ? (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  ) : (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-stone-300 flex items-center justify-center text-stone-400">
                      <span className="w-2.5 h-2.5 rounded-full bg-transparent"></span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-3.5 sm:p-5 bg-stone-50 border-t border-stone-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-stone-500">
            Attiva: <strong className="text-stone-800">{CLIMATE_ZONES[selectedZone].titoloBreve}</strong>
          </span>

          <button
            id="btn-confirm-climate"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold shadow-sm transition"
          >
            {isFirstVisit ? 'Salva e Inizia a Coltivare 🌱' : 'Applica Zona'}
          </button>
        </div>
      </div>
    </div>
  );
};
