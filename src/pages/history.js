import { Layout } from "../components/layout/layout.js";

export function History() {
    return Layout(
    `
        <section class="px-8 md:px-12 py-28 bg-white text-center">
            <div class="max-w-4xl mx-auto space-y-10">
                <h2 class="font-headline text-4xl md:text-6xl font-extrabold text-primary tracking-tight">¿Listo para modernizar su práctica jurídica?</h2>
                <p class="text-on-surface-variant text-xl md:text-2xl font-light">Únase a la élite legal de UNISANGIL y comience a generar documentos con validez académica y técnica superior.</p>
                <div class="pt-8">
                    <button class="bg-[#F9B233] text-[#004077] px-16 py-6 rounded-2xl font-black text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
                        EMPEZAR AHORA GRATIS
                    </button>
                    <p class="mt-6 text-sm text-slate-400 font-semibold tracking-wide">Exclusivo para la comunidad UNISANGIL y aliados externos.</p>
                </div>
            </div>
        </section>
    `
    );
}