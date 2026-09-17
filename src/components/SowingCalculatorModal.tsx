import React, { useState, useEffect, useRef } from 'react';
import { Plant, ActivePlanting } from '../types';
import { PLANTS_DATA } from '../data/plants';
import { calculateGrowthStatus, PHENOLOGICAL_STAGES } from '../utils/gardenCalculator';
import { 
  X, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Sprout, 
  HelpCircle,
  BookmarkPlus
} from 'lucide-react';

interface SowingCalculatorModalProps {
  initialPlant: Plant | null;
  isOpen: boolean;
  onClose: () => void;
  onSaveToGarden: (planting: Omit<ActivePlanting, 'id' | 'creatoIl'>) => void;
}

export const SowingCalculatorModal: React.FC<SowingCalculatorModalProps> = ({
  initialPlant,
  isOpen,
  onClose,
  onSaveToGarden,
}) => {
  const [selectedPlantId, setSelectedPlantId] = useState<string>(
    initialPlant?.id || PLANTS_DATA[0].id
  );

  const scrollRef = useRef<HTMLDivElement>(null);

  // Lock background body scroll and autofocus scrollable container on open
  useEffect(() => {
    if (!isOpen) return;
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      scrollRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, [isOpen]);

  // Universal wheel handler: allows mouse wheel to scroll content even if cursor is over header, footer or overlay
  const handleWheel = (e: React.WheelEvent) => {
    if (scrollRef.current) {
      if (!scrollRef.current.contains(e.target as Node)) {
        scrollRef.current.scrollTop += e.deltaY;
      }
    }
  };
  
  // Format today as YYYY-MM-DD
  const getTodayString = () => new Date().toISOString().split('T')[0];

  const [dataSemina, setDataSemina] = useState<string>(getTodayString());
  const [tipoAvvio, setTipoAvvio] = useState<'seme' | 'trapianto'>('seme');
  const [nomePersonalizzato, setNomePersonalizzato] = useState<string>('');
  const [note, setNote] = useState<string>('');

  useEffect(() => {
    if (initialPlant) {
      setSelectedPlantId(initialPlant.id);
      setNomePersonalizzato(initialPlant.nome);
    }
  }, [initialPlant]);

  if (!isOpen) return null;

  const currentPlant = PLANTS_DATA.find((p) => p.id === selectedPlantId) || PLANTS_DATA[0];

  const avgDays = Math.round(
    (currentPlant.giorniRaccolto.min + currentPlant.giorniRaccolto.max) / 2
  );

  const dummyPlanting: ActivePlanting = {
    id: 'temp',
    plantId: currentPlant.id,
    nomePersonalizzato: nomePersonalizzato || currentPlant.nome,
    dataSemina: dataSemina || getTodayString(),
    tipoAvvio,
    giorniStimatiRaccolto: avgDays,
    note,
    completata: false,
    creatoIl: new Date().toISOString(),
  };

  const status = calculateGrowthStatus(currentPlant, dummyPlanting);

  const handleQuickDate = (daysAgo: number) => {
    const d = new Date();
    d.setDate(d.getDate() - daysAgo);
    setDataSemina(d.toISOString().split('T')[0]);
  };

  const handleSave = () => {
    onSaveToGarden({
      plantId: currentPlant.id,
      nomePersonalizzato: nomePersonalizzato.trim() || currentPlant.nome,
      dataSemina: dataSemina || getTodayString(),
      tipoAvvio,
      giorniStimatiRaccolto: avgDays,
      note: note.trim(),
      completata: false,
    });
    onClose();
  };

  return (
    <div
      id="sowing-calculator-modal-overlay"
      className="fixed inset-0 z-50 overflow-hidden bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6"
      onClick={onClose}
      onWheel={handleWheel}
    >
      <div
        id="sowing-calculator-modal-content"
        className="relative bg-white w-full max-w-2xl rounded-2xl sm:rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[96vh] sm:max-h-[92vh] h-full sm:h-auto font-sans"
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
      >
        {/* Header */}
        <div className="bg-emerald-900 text-white p-4 sm:p-6 flex items-center justify-between border-b border-emerald-800 shrink-0">
          <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0 pr-2">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-800/80 border border-emerald-700 flex items-center justify-center text-lg sm:text-xl shrink-0">
              🧮
            </div>
            <div className="min-w-0">
              <h2 className="text-lg sm:text-xl font-bold font-serif text-white tracking-tight truncate">
                Calcolatore di Semina
              </h2>
              <p className="text-[11px] sm:text-xs text-emerald-200 truncate">
                Calcola giorni trascorsi, fase e data di raccolta
              </p>
            </div>
          </div>

          <button
            id="btn-close-calc-modal"
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-300 hover:text-white hover:bg-emerald-800 transition shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form & Live Preview */}
        <div 
          ref={scrollRef}
          tabIndex={0}
          className="p-4 sm:p-6 space-y-5 flex-1 min-h-0 overflow-y-auto focus:outline-none pb-12"
        >
          {/* Plant Selector */}
          <div>
            <label htmlFor="select-calc-plant" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              1. Scegli l'Ortaggio, Frutto o Pianta Aromatica
            </label>
            <select
              id="select-calc-plant"
              value={selectedPlantId}
              onChange={(e) => {
                setSelectedPlantId(e.target.value);
                const p = PLANTS_DATA.find((item) => item.id === e.target.value);
                if (p) setNomePersonalizzato(p.nome);
              }}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 text-stone-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {PLANTS_DATA.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.icona} {p.nome} ({p.sottoCategoria}) — ~{p.giorniRaccolto.min}-{p.giorniRaccolto.max} gg al raccolto
                </option>
              ))}
            </select>
          </div>

          {/* Date and Type Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Sowing Date */}
            <div>
              <label htmlFor="input-calc-date" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                <span>2. Data di Semina / Avvio</span>
                <Calendar className="w-3.5 h-3.5 text-stone-400" />
              </label>
              <input
                id="input-calc-date"
                type="date"
                value={dataSemina}
                onChange={(e) => setDataSemina(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-stone-300 bg-stone-50 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />

              {/* Quick Date Shortcuts */}
              <div className="flex items-center gap-1.5 mt-2">
                <button
                  type="button"
                  onClick={() => handleQuickDate(0)}
                  className="px-2 py-0.5 text-[11px] rounded bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium transition"
                >
                  Oggi
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickDate(7)}
                  className="px-2 py-0.5 text-[11px] rounded bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium transition"
                >
                  7 gg fa
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickDate(20)}
                  className="px-2 py-0.5 text-[11px] rounded bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium transition"
                >
                  20 gg fa
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickDate(45)}
                  className="px-2 py-0.5 text-[11px] rounded bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium transition"
                >
                  45 gg fa
                </button>
              </div>
            </div>

            {/* Starting Method */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                3. Metodo di Avvio
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setTipoAvvio('seme')}
                  className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center space-x-1.5 transition ${
                    tipoAvvio === 'seme'
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
                  }`}
                >
                  <Sprout className="w-3.5 h-3.5" />
                  <span>Da Seme</span>
                </button>

                <button
                  type="button"
                  onClick={() => setTipoAvvio('trapianto')}
                  className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center space-x-1.5 transition ${
                    tipoAvvio === 'trapianto'
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100'
                  }`}
                >
                  <span>🪴</span>
                  <span>Trapianto piantina</span>
                </button>
              </div>
              <p className="text-[11px] text-stone-600 mt-1.5">
                {tipoAvvio === 'seme'
                  ? 'Ciclo completo comprensivo di giorni di germinazione.'
                  : 'Ciclo abbreviato di ~20 giorni poiché la piantina è già formata.'}
              </p>
            </div>
          </div>

          {/* DYNAMIC LIVE CALCULATION DASHBOARD */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 text-stone-100 shadow-md space-y-4">
            <div className="flex items-center justify-between border-b border-stone-700 pb-3">
              <div>
                <span className="text-xs text-stone-400 block font-medium">Stato di Crescita</span>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>{currentPlant.icona}</span>
                  <span>{nomePersonalizzato || currentPlant.nome}</span>
                </h4>
              </div>

              <div className="text-right">
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-amber-400">
                  {status.giorniTrascorsi}
                </span>
                <span className="text-xs text-stone-400 block">giorni trascorsi</span>
              </div>
            </div>

            {/* Visual Progress Bar */}
            <div>
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {status.faseNome}
                </span>
                <span className="font-bold text-stone-200">
                  {status.percentualeCompletamento}% del ciclo
                </span>
              </div>

              {/* Progress Track */}
              <div className="w-full bg-stone-700 rounded-full h-3.5 overflow-hidden p-0.5 border border-stone-600">
                <div
                  className="bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 h-full rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${Math.max(4, status.percentualeCompletamento)}%` }}
                ></div>
              </div>

              {/* 6 Phenological steps indicator */}
              <div className="grid grid-cols-6 gap-1 mt-2 text-[10px] text-stone-400 text-center">
                {PHENOLOGICAL_STAGES.map((stage, i) => (
                  <span
                    key={i}
                    className={`truncate ${
                      i <= status.faseIndice ? 'text-emerald-300 font-bold' : 'text-stone-500'
                    }`}
                  >
                    {stage}
                  </span>
                ))}
              </div>
            </div>

            {/* Countdown and estimated date grid */}
            <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
              <div className="p-2.5 rounded-xl bg-stone-800/80 border border-stone-700">
                <span className="text-stone-400 block mb-0.5 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" />
                  Giorni al Raccolto
                </span>
                <span className="text-base font-bold text-amber-300">
                  {status.percentualeCompletamento >= 100
                    ? 'Pronto per la raccolta!'
                    : `~ ${status.giorniRimanenti} giorni`}
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-stone-800/80 border border-stone-700">
                <span className="text-stone-400 block mb-0.5 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-blue-400" />
                  Data Stimata Raccolta
                </span>
                <span className="text-sm font-bold text-stone-100">
                  {status.dataStimataRaccolto}
                </span>
              </div>
            </div>

            {/* Agronomist Advice Box */}
            <div className="p-3 rounded-xl bg-emerald-950/70 border border-emerald-800 text-xs">
              <span className="text-emerald-300 font-bold block mb-1 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                Consiglio per il Giorno {status.giorniTrascorsi}:
              </span>
              <p className="text-stone-300 leading-relaxed">
                {status.consiglioAttuale}
              </p>
            </div>
          </div>

          {/* Optional notes / custom location */}
          <div>
            <label htmlFor="input-calc-notes" className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
              Note Personali / Posizione nell'Orto (Opzionale)
            </label>
            <input
              id="input-calc-notes"
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Es. 'Cassone rialzato 2', 'Bagnato con macerato d'ortica', 'Seme antico biologico'"
              className="w-full px-3.5 py-2 rounded-xl border border-stone-300 bg-stone-50 text-stone-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-3.5 sm:p-5 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-3.5 py-2.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-stone-600 hover:bg-stone-200 rounded-xl transition border border-stone-200 sm:border-0"
          >
            Chiudi
          </button>

          <button
            id="btn-save-to-my-garden"
            type="button"
            onClick={handleSave}
            className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white text-xs sm:text-sm font-semibold shadow-sm transition active:scale-95"
          >
            <BookmarkPlus className="w-4 h-4 shrink-0" />
            <span>Salva nel Mio Orto</span>
          </button>
        </div>
      </div>
    </div>
  );
};
