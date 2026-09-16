import React, { useState, useMemo } from 'react';
import { PestDisease } from '../types';
import { DISEASES_DATA } from '../data/diseases';
import { PLANTS_DATA } from '../data/plants';
import { removeAccents } from '../utils/searchHelper';
import { 
  ShieldAlert, 
  Search, 
  X, 
  Leaf, 
  Sparkles, 
  ChevronRight, 
  AlertCircle,
  FlaskConical,
  Bug,
  HelpCircle,
  CheckCircle2
} from 'lucide-react';

interface PestDiseaseManagerProps {
  onSelectPlant: (plantId: string) => void;
  initialDiseaseId?: string | null;
  onClearInitialDisease?: () => void;
}

export const PestDiseaseManager: React.FC<PestDiseaseManagerProps> = ({
  onSelectPlant,
  initialDiseaseId,
  onClearInitialDisease,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('tutti');
  const [selectedDisease, setSelectedDisease] = useState<PestDisease | null>(() => {
    if (initialDiseaseId) {
      return DISEASES_DATA.find((d) => d.id === initialDiseaseId) || null;
    }
    return null;
  });

  // Filter diseases based on search & category
  const filteredDiseases = useMemo(() => {
    return DISEASES_DATA.filter((item) => {
      // Category filter
      if (categoryFilter !== 'tutti' && item.categoria !== categoryFilter) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const queryClean = removeAccents(searchQuery.trim());
        const tokens = queryClean.split(/\s+/).filter(Boolean);

        const haystack = removeAccents([
          item.nome,
          item.nomeScientifico,
          item.categoria,
          item.tipo,
          item.descrizione,
          ...item.pianteColpiteNomi,
          ...item.sintomi,
          item.condizioniFavorevoli,
          ...item.prevenzione,
          ...item.rimediBio.map((r) => `${r.titolo} ${r.ingredientiEDosi} ${r.istruzioniUso}`)
        ].join(' '));

        const matchesAll = tokens.every((tok) => haystack.includes(tok));
        if (!matchesAll) return false;
      }

      return true;
    });
  }, [searchQuery, categoryFilter]);

  const categories = [
    { id: 'tutti', label: 'Tutte le Avversità' },
    { id: 'Fungo / Muffa', label: '🍄 Funghi & Muffe' },
    { id: 'Insetto / Acari', label: '🦗 Insetti & Acari' },
    { id: 'Mollusco / Terricolo', label: '🐌 Lumache & Terricoli' },
    { id: 'Fisiopatia / Carenza', label: '🌑 Fisiopatie & Stress' },
  ];

  return (
    <div id="pest-disease-manager-section" className="space-y-6 font-sans">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-md border border-amber-900/40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-900/60 border border-amber-700/60 text-amber-300 text-xs font-semibold mb-3">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Pronto Soccorso Botanico & Difesa Biologica</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">
            Guida alle Malattie, Parassiti e Rimedi Bio
          </h1>
          <p className="text-stone-300 text-sm sm:text-base mt-2 leading-relaxed">
            Riconosci subito i sintomi (foglie macchiate, muffe, insetti masticatori o carenze nutrizionali) e scopri i trattamenti ecologici certificati per proteggere il tuo raccolto a residuo zero.
          </p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white border border-stone-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            id="input-search-diseases"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cerca sintomo, malattia o pianta (es. foglie gialle, peronospora, afidi, pomodoro, sapone molle...)"
            className="w-full pl-11 pr-10 py-3 rounded-xl border border-stone-300 bg-stone-50 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-sm sm:text-base transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-stone-400 hover:text-stone-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-stone-100">
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                  categoryFilter === cat.id
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-stone-500">
            {filteredDiseases.length} problematiche catalogate
          </span>
        </div>
      </div>

      {/* Disease Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredDiseases.map((disease) => {
          return (
            <div
              key={disease.id}
              id={`disease-card-${disease.id}`}
              className="bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition p-5 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl p-2 rounded-xl bg-stone-50 border border-stone-100">
                      {disease.icona}
                    </span>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-lg font-bold text-stone-900 font-serif">
                          {disease.nome}
                        </h3>
                      </div>
                      <p className="text-xs text-stone-500 italic">
                        {disease.nomeScientifico}
                      </p>
                    </div>
                  </div>

                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    disease.tipo === 'malattia'
                      ? 'bg-purple-100 text-purple-800'
                      : disease.tipo === 'parassita'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {disease.categoria}
                  </span>
                </div>

                {/* Short Description */}
                <p className="text-xs text-stone-600 leading-relaxed mb-3">
                  {disease.descrizione}
                </p>

                {/* Affected Plants Pills - Interactive links! */}
                <div className="mb-3.5 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                  <span className="text-[10px] uppercase font-bold text-stone-500 block mb-1">
                    Piante colpite (clicca per scheda botanica):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {disease.pianteColpiteNomi.map((plantName, idx) => {
                      const foundPlant = PLANTS_DATA.find((p) =>
                        p.nome.toLowerCase().includes(plantName.toLowerCase()) ||
                        plantName.toLowerCase().includes(p.nome.toLowerCase())
                      );
                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            if (foundPlant) onSelectPlant(foundPlant.id);
                          }}
                          className="px-2 py-0.5 rounded-md bg-white border border-stone-200 text-emerald-800 hover:bg-emerald-50 hover:border-emerald-300 text-xs font-medium transition flex items-center gap-1 shadow-2xs"
                          title={`Visualizza scheda di ${plantName}`}
                        >
                          <span>{foundPlant?.icona || '🌱'}</span>
                          <span>{plantName}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Symptoms Preview */}
                <div className="mb-3 text-xs space-y-1">
                  <span className="font-bold text-stone-800 flex items-center gap-1 text-[11px] uppercase tracking-wider">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                    Sintomi principali da riconoscere:
                  </span>
                  <ul className="list-disc list-inside text-stone-600 text-xs space-y-0.5">
                    {disease.sintomi.slice(0, 2).map((sintomo, i) => (
                      <li key={i} className="line-clamp-2 leading-relaxed">
                        {sintomo}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Main Organic Remedy Snippet */}
                {disease.rimediBio[0] && (
                  <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-xs">
                    <span className="font-bold text-emerald-900 block text-[11px] uppercase tracking-wider mb-0.5 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-emerald-600" />
                      Rimedio Bio: {disease.rimediBio[0].titolo}
                    </span>
                    <p className="text-emerald-950 font-medium text-xs">
                      {disease.rimediBio[0].ingredientiEDosi}
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Action */}
              <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] text-stone-500">
                  {disease.rimediBio.length} ricette biologiche complete
                </span>

                <button
                  id={`btn-open-disease-${disease.id}`}
                  onClick={() => setSelectedDisease(disease)}
                  className="px-3.5 py-1.5 bg-stone-900 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition"
                >
                  <span>Vedi Diagnosi & Ricette</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* FULL DETAIL MODAL FOR A SINGLE DISEASE */}
      {selectedDisease && (
        <div
          id="disease-detail-modal-overlay"
          className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6"
          onClick={() => {
            setSelectedDisease(null);
            if (onClearInitialDisease) onClearInitialDisease();
          }}
        >
          <div
            id="disease-detail-modal-content"
            className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-6 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-stone-900 text-white p-6 sm:p-7 flex items-start justify-between border-b border-stone-800 shrink-0">
              <div className="flex items-center space-x-3.5">
                <span className="text-4xl p-2.5 bg-stone-800 rounded-2xl border border-stone-700">
                  {selectedDisease.icona}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase bg-amber-500 text-stone-950">
                      {selectedDisease.categoria}
                    </span>
                    <span className="text-xs text-stone-400 italic">
                      {selectedDisease.nomeScientifico}
                    </span>
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-white tracking-tight">
                    {selectedDisease.nome}
                  </h2>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedDisease(null);
                  if (onClearInitialDisease) onClearInitialDisease();
                }}
                className="p-2 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-stone-800">
              {/* Description */}
              <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                {selectedDisease.descrizione}
              </p>

              {/* Piante colpite */}
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
                <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  Piante suscettibili nell'orto:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDisease.pianteColpiteNomi.map((name, i) => {
                    const plant = PLANTS_DATA.find((p) =>
                      p.nome.toLowerCase().includes(name.toLowerCase()) ||
                      name.toLowerCase().includes(p.nome.toLowerCase())
                    );
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          setSelectedDisease(null);
                          if (plant) onSelectPlant(plant.id);
                        }}
                        className="px-3 py-1 bg-white border border-stone-300 rounded-xl text-xs font-semibold text-emerald-800 hover:bg-emerald-50 hover:border-emerald-400 flex items-center gap-1.5 transition shadow-2xs"
                      >
                        <span>{plant?.icona || '🌱'}</span>
                        <span>{name}</span>
                        <ChevronRight className="w-3 h-3 text-stone-400" />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sintomi Riconoscibili */}
              <div>
                <h3 className="text-base font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  Sintomi tipici da riconoscere sulle piante
                </h3>
                <div className="space-y-2">
                  {selectedDisease.sintomi.map((sintomo, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-amber-50/60 border border-amber-200 text-xs sm:text-sm text-stone-800 flex items-start gap-2.5"
                    >
                      <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{sintomo}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Condizioni Meteo Favorevoli */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs">
                <span className="font-bold text-stone-800 block uppercase tracking-wider mb-1">
                  🌦️ Condizioni ambientali favorevoli allo sviluppo:
                </span>
                <p className="text-stone-700 leading-relaxed">
                  {selectedDisease.condizioniFavorevoli}
                </p>
              </div>

              {/* Prevenzione Agronomica */}
              <div>
                <h3 className="text-base font-bold text-stone-900 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  Prevenzione agronomica naturale
                </h3>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-stone-700">
                  {selectedDisease.prevenzione.map((p, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rimedi Biologici Certificati */}
              <div>
                <h3 className="text-base font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-emerald-700" />
                  Rimedi & Trattamenti Biologici Certificati
                </h3>
                <div className="space-y-4">
                  {selectedDisease.rimediBio.map((rimedio, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-300 shadow-2xs space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-sm sm:text-base text-emerald-950 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center">
                            {idx + 1}
                          </span>
                          {rimedio.titolo}
                        </h4>
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                          {rimedio.frequenza}
                        </span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs">
                        <strong className="text-emerald-900 block mb-0.5">
                          🥣 Ingredienti e Dosi consigliate:
                        </strong>
                        <span className="font-mono text-emerald-950 font-semibold">
                          {rimedio.ingredientiEDosi}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                        <strong className="text-stone-900 font-semibold">Come applicarlo: </strong>
                        {rimedio.istruzioniUso}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex justify-end shrink-0">
              <button
                onClick={() => {
                  setSelectedDisease(null);
                  if (onClearInitialDisease) onClearInitialDisease();
                }}
                className="px-5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold transition"
              >
                Chiudi Diagnosi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
