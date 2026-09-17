import React from 'react';
import { Flower } from '../types';
import { MONTH_NAMES } from '../data/plants';
import { 
  X, 
  Sun, 
  Droplet, 
  Sparkles, 
  ShieldCheck, 
  Bug, 
  Utensils, 
  Scissors, 
  Info,
  Layers,
  Heart
} from 'lucide-react';

interface FlowerDetailModalProps {
  flower: Flower | null;
  onClose: () => void;
}

export const FlowerDetailModal: React.FC<FlowerDetailModalProps> = ({ flower, onClose }) => {
  if (!flower) return null;

  return (
    <div 
      id="flower-detail-modal-backdrop" 
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-5 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="flower-detail-modal-container"
        className="relative w-full max-w-3xl bg-stone-900 border border-stone-800 rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden text-stone-100 max-h-[92vh] sm:max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Banner */}
        <div className="relative bg-gradient-to-r from-pink-950/80 via-purple-950/80 to-stone-900 p-4 sm:p-6 border-b border-stone-800 shrink-0">
          <button
            id="btn-close-flower-modal"
            onClick={onClose}
            className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-1.5 sm:p-2 rounded-xl bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white transition"
            title="Chiudi scheda"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3 sm:space-x-4 pr-8">
            <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-2xl bg-stone-900/90 border border-pink-500/30 flex items-center justify-center text-3xl sm:text-5xl shadow-lg shrink-0">
              {flower.icona}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                <span className="px-2 py-0.2 sm:px-2.5 sm:py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-pink-900/60 text-pink-300 border border-pink-700/50">
                  {flower.tipo}
                </span>
                <span className="px-2 py-0.2 sm:px-2.5 sm:py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-stone-800 text-stone-300 border border-stone-700 truncate">
                  Famiglia: {flower.famiglia}
                </span>
              </div>
              <h2 className="text-lg sm:text-3xl font-serif font-bold text-white tracking-tight truncate">
                {flower.nome}
              </h2>
              <p className="text-xs sm:text-sm italic text-pink-200/80 font-sans mt-0.5 truncate">
                {flower.nomeScientifico}
              </p>

              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
                {flower.attiraImpollinatori && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.2 sm:px-2.5 sm:py-0.5 rounded-md text-[10px] sm:text-xs font-medium bg-amber-950/70 text-amber-300 border border-amber-800/60">
                    🐝 Attira Api
                  </span>
                )}
                {flower.edule && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.2 sm:px-2.5 sm:py-0.5 rounded-md text-[10px] sm:text-xs font-medium bg-emerald-950/70 text-emerald-300 border border-emerald-800/60">
                    <Utensils className="w-3 h-3" /> Commestibile
                  </span>
                )}
                {flower.amicoOrto && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.2 sm:px-2.5 sm:py-0.5 rounded-md text-[10px] sm:text-xs font-medium bg-cyan-950/70 text-cyan-300 border border-cyan-800/60">
                    <ShieldCheck className="w-3 h-3" /> Difesa Orto
                  </span>
                )}
                {flower.profumata && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.2 sm:px-2.5 sm:py-0.5 rounded-md text-[10px] sm:text-xs font-medium bg-rose-950/70 text-rose-300 border border-rose-800/60">
                    <Sparkles className="w-3 h-3" /> Profumato
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto space-y-6 text-sm text-stone-300">
          
          {/* Description */}
          <div className="bg-stone-800/40 rounded-xl p-4 border border-stone-800">
            <p className="leading-relaxed text-stone-200">
              {flower.descrizione}
            </p>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-stone-800/60 rounded-xl p-3 border border-stone-700/60 text-center">
              <span className="text-xs text-stone-400 block mb-1">Altezza Media</span>
              <span className="text-base font-bold text-stone-100">
                {flower.altezzaMediaCm.min} - {flower.altezzaMediaCm.max} cm
              </span>
            </div>

            <div className="bg-stone-800/60 rounded-xl p-3 border border-stone-700/60 text-center">
              <span className="text-xs text-stone-400 block mb-1">Esposizione</span>
              <span className="text-base font-bold text-amber-300 flex items-center justify-center gap-1">
                <Sun className="w-4 h-4 text-amber-400 shrink-0" />
                {flower.esposizione}
              </span>
            </div>

            <div className="bg-stone-800/60 rounded-xl p-3 border border-stone-700/60 text-center">
              <span className="text-xs text-stone-400 block mb-1">Fabbisogno Idrico</span>
              <span className="text-base font-bold text-sky-300 flex items-center justify-center gap-1">
                <Droplet className="w-4 h-4 text-sky-400 shrink-0" />
                {flower.irrigazione.livello}
              </span>
            </div>

            <div className="bg-stone-800/60 rounded-xl p-3 border border-stone-700/60 text-center">
              <span className="text-xs text-stone-400 block mb-1">Difficoltà</span>
              <span className={`text-base font-bold ${
                flower.difficolta === 'Facile' ? 'text-emerald-400' :
                flower.difficolta === 'Media' ? 'text-amber-400' : 'text-rose-400'
              }`}>
                {flower.difficolta}
              </span>
            </div>
          </div>

          {/* Flowering Calendar Visualization */}
          <div className="bg-stone-800/50 rounded-xl p-4 border border-stone-800">
            <h3 className="text-sm font-semibold text-stone-200 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-pink-400" />
              Calendario di Fioritura e Piantagione
            </h3>
            
            <div className="grid grid-cols-6 sm:grid-cols-12 gap-1.5 text-center">
              {MONTH_NAMES.map((m, idx) => {
                const monthNum = idx + 1;
                const isFlowering = flower.mesiFioritura.includes(monthNum);
                const isPlanting = flower.mesiSeminaPiantagione.includes(monthNum);

                return (
                  <div 
                    key={m}
                    className={`p-1.5 rounded-lg border text-xs transition ${
                      isFlowering
                        ? 'bg-pink-900/50 border-pink-500/70 text-pink-100 font-bold shadow-xs'
                        : isPlanting
                        ? 'bg-amber-950/40 border-amber-600/60 text-amber-200'
                        : 'bg-stone-900/60 border-stone-800 text-stone-500'
                    }`}
                  >
                    <div className="font-mono text-[11px] font-bold uppercase">{m.slice(0, 3)}</div>
                    <div className="text-[10px] mt-0.5">
                      {isFlowering ? '🌸 Fiore' : isPlanting ? '🌱 Semina' : '-'}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4 text-xs text-stone-400 mt-2.5 pt-2 border-t border-stone-800/80">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-pink-900/80 border border-pink-500" />
                Mesi di Fioritura
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-amber-950/60 border border-amber-600" />
                Semina / Piantagione
              </span>
            </div>
          </div>

          {/* Color Palette */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
              Colori Principali delle Corolle
            </h3>
            <div className="flex flex-wrap gap-2">
              {flower.coloriPrincipali.map((colore) => (
                <span 
                  key={colore}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-stone-800 border border-stone-700 text-stone-200 flex items-center gap-1.5"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-pink-400" />
                  {colore}
                </span>
              ))}
            </div>
          </div>

          {/* Companion Benefit for Vegetable Garden (if applicable) */}
          {flower.beneficioOrtoDescrizione && (
            <div className="bg-emerald-950/30 rounded-xl p-4 border border-emerald-800/50">
              <h3 className="text-sm font-semibold text-emerald-300 mb-1.5 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Perché coltivarlo nell'Orto (Bio-difesa & Impollinazione)
              </h3>
              <p className="text-emerald-100/90 text-sm leading-relaxed">
                {flower.beneficioOrtoDescrizione}
              </p>
            </div>
          )}

          {/* Soil & Watering details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-stone-800/30 rounded-xl p-4 border border-stone-800">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1 flex items-center gap-1.5">
                Terreno Ideale
              </h3>
              <p className="text-stone-200 text-sm leading-relaxed">
                {flower.terreno}
              </p>
            </div>

            <div className="bg-stone-800/30 rounded-xl p-4 border border-stone-800">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1 flex items-center gap-1.5">
                <Droplet className="w-3.5 h-3.5 text-sky-400" />
                Consigli di Irrigazione
              </h3>
              <p className="text-stone-200 text-sm leading-relaxed">
                {flower.irrigazione.dettagli}
              </p>
            </div>
          </div>

          {/* Cultivation Tips */}
          <div>
            <h3 className="text-sm font-semibold text-stone-200 mb-2 flex items-center gap-2">
              <Info className="w-4 h-4 text-emerald-400" />
              Consigli Pratici di Coltivazione
            </h3>
            <ul className="space-y-1.5">
              {flower.consigliColtivazione.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-stone-800/30 rounded-lg p-2.5 border border-stone-800/60">
                  <span className="text-pink-400 font-bold text-xs mt-0.5">•</span>
                  <span className="text-stone-300 text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pruning & Maintenance */}
          <div className="bg-stone-800/40 rounded-xl p-4 border border-stone-800">
            <h3 className="text-sm font-semibold text-amber-300 mb-1.5 flex items-center gap-2">
              <Scissors className="w-4 h-4 text-amber-400" />
              Potatura e Manutenzione
            </h3>
            <p className="text-stone-200 leading-relaxed text-sm">
              {flower.potaturaECura}
            </p>
          </div>

          {/* Adversities & Pests */}
          {flower.avversitaComuni.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-rose-300 mb-2 flex items-center gap-2">
                <Bug className="w-4 h-4 text-rose-400" />
                Avversità Comuni & Parassiti
              </h3>
              <div className="flex flex-wrap gap-2">
                {flower.avversitaComuni.map((p, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-rose-950/40 text-rose-200 border border-rose-800/50"
                  >
                    ⚠️ {p}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Historical / Botanical Curiosity */}
          <div className="bg-gradient-to-r from-purple-950/30 to-stone-900 rounded-xl p-4 border border-purple-900/40">
            <h3 className="text-sm font-semibold text-purple-300 mb-1 flex items-center gap-2">
              <Heart className="w-4 h-4 text-pink-400" />
              Curiosità & Storia
            </h3>
            <p className="text-stone-300 text-sm italic leading-relaxed">
              "{flower.curiosita}"
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-stone-900 p-4 border-t border-stone-800 flex items-center justify-end">
          <button
            id="btn-close-flower-modal-bottom"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-sm font-medium transition"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
};
