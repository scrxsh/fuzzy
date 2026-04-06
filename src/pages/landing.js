import { Layout } from "../components/layout/layout.js";

export function Landing() {
    return Layout(
        `
        <section class="relative px-8 md:px-12 py-16 overflow-hidden">
            <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div class="flex-1 space-y-8 z-10">
                            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container text-primary-container font-label text-xs font-extrabold uppercase tracking-widest">
                                <i class="material-symbols-outlined text-sm">verified</i>
                                Consultorio Jurídico UNISANGIL
                            </div>
                            <h1 class="font-label text-5xl md:text-7xl font-bold text-primary leading-tight tracking-tighter">
                                Asistente Jurídico para <span class="text-secondary">Letras de Cambio</span>
                            </h1>
                            <p class="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed font-light">
                                Transforme la gestión de sus títulos valores con precisión institucional. Cree, valide y prepare documentos ejecutivos con el respaldo académico de la Facultad de Derecho.
                            </p>
                            <div class="flex flex-col sm:flex-row gap-4 pt-4">
                                <button class="bg-[#004077] text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2">
                                    Iniciar Trámite
                                    <i class="material-symbols-outlined">arrow_forward</i>
                                </button>
                                <button class="border-2 border-[#004077] text-[#004077] px-10 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-low transition-all flex items-center justify-center gap-2">
                                    Ver Tutorial
                                </button>
                            </div>
                    </div>
                    <div class="flex-1 relative w-full aspect-square md:aspect-auto h-125 group">
                        <div class="absolute inset-0 bg-[#004077]/5 rounded-[4rem] rotate-3 -z-10"></div>
                        <div class="absolute inset-4 bg-white shadow-2xl rounded-[3rem] overflow-hidden pointer-events-none">
                            <img alt="Legal documents and gavel" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxtlWLtocjXgHZfQ6lg4IvBZu5ypAXLkYpRE9dFIHSa_QbgoW4f440eYnITMOIIR9rt0cZf5loRDjgVLA7uwcoE-YWx22RCgsfihWfrKGf3t3e7sCljC1kt61nPsNgUHWOjQiwtWbxyn0eW9Qwb6n1RfFTusPnIVPO_nkjB_WEl4Hfa6TdCe336ENr392zBTFLTQTo9oYiCJEEdVi6-SLdKmB9CQeABP38VsFjUY7FaCfftBctTeE6ieMKngc5PZsdyf0A2xV6e3wK"/>
                            <div class="absolute bottom-6 left-6 right-6 glass-panel p-6 rounded-2xl border border-white/20">
                                <div class="flex items-center gap-4">
                                    <div class="bg-[#feb637] p-3 rounded-xl text-primary-container">
                                        <i class="material-symbols-outlined">attach_file</i>
                                    </div>
                                <div>
                                <p class="font-headline font-bold text-[#004077]">Letra de Cambio No. 442-B | Minerva</p>
                                <p class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Último Modelo Generado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </section>
        `
    );
}