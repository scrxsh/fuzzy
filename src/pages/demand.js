import { Layout } from "../components/layout/layout.js";

export function Demand() {
    return Layout(
        `
        <section class="px-8 md:px-12 py-20">
            <div class="max-w-6xl mx-auto">
                <div class="mb-12">
                    <h2 class="font-headline text-3xl font-bold text-primary">Excelencia Editorial en el Derecho</h2>
                    <div class="w-24 h-2 bg-[#F9B233] mt-3 rounded-full"></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="md:col-span-2 bg-white p-10 rounded-[2.5rem] shadow-sm flex flex-col justify-between border-t-8 border-[#004077]">
                        <div class="space-y-6">
                            <span class="material-symbols-outlined text-5xl text-[#004077]" style="font-variation-settings: 'FILL' 1;">speed</span>
                            <h3 class="text-3xl font-bold font-headline text-[#004077]">Generación Ultra Rápida</h3>
                            <p class="text-on-surface-variant text-lg leading-relaxed">
                            Reduzca el tiempo de redacción de 45 minutos a solo 2. Nuestra inteligencia editorial rellena automáticamente los campos críticos basándose en su base de datos de jurisprudencia.
                            </p>
                        </div>
                        <div class="mt-12 flex -space-x-3">
                            <img alt="Avatar" class="w-12 h-12 rounded-full border-4 border-white" src="https://i.pinimg.com/736x/d1/81/e4/d181e44cf0a7d5f9190bc96939da4164.jpg"/>
                            <img alt="Avatar" class="w-12 h-12 rounded-full border-4 border-white" src="https://i.pinimg.com/1200x/1c/85/2e/1c852ea928150dfcf54c5457dbca0a35.jpg"/>
                            <div class="w-12 h-12 rounded-full border-4 border-white bg-[#feb637] flex items-center justify-center text-[#004077] text-xs font-bold">
                            +2k
                            </div>
                            <span class="ml-6 self-center text-sm text-on-surface-variant font-semibold">Estudiantes y abogados ya lo usan</span>
                        </div>
                    </div>
                    <div class="bg-[#004077] text-white p-10 rounded-[2.5rem] shadow-xl flex flex-col justify-between">
                        <div class="space-y-6">
                            <span class="material-symbols-outlined text-5xl text-[#feb637]" style="font-variation-settings: 'FILL' 1;">fact_check</span>
                            <h3 class="text-2xl font-bold font-headline">Precisión Legal Garantizada</h3>
                            <p class="text-blue-100 leading-relaxed text-lg">
                            Cada cláusula es revisada por el comité de jurisprudencia de UNISANGIL, asegurando cumplimiento total con el Código de Comercio.
                            </p>
                        </div>
                        <a class="text-[#feb637] font-bold flex items-center gap-2 hover:gap-4 transition-all" href="#">
                        Leer más <span class="material-symbols-outlined">arrow_right_alt</span>
                        </a>
                    </div>
                    <div class="bg-white p-8 rounded-4xl shadow-sm border-l-8 border-[#F9B233]">
                        <div class="space-y-4">
                            <span class="material-symbols-outlined text-4xl text-[#F9B233]" style="font-variation-settings: 'FILL' 1;">account_balance</span>
                            <h4 class="text-xl font-bold font-headline text-[#004077]">Demanda Ejecutiva</h4>
                            <p class="text-on-surface-variant text-sm">Prepare el paquete probatorio completo para el proceso ejecutivo de forma automática.</p>
                        </div>
                    </div>
                    <div class="bg-white p-8 rounded-4xl shadow-sm border-l-8 border-slate-300">
                        <div class="space-y-4">
                            <span class="material-symbols-outlined text-4xl text-slate-400" style="font-variation-settings: 'FILL' 1;">security</span>
                            <h4 class="text-xl font-bold font-headline text-[#004077]">Firma Digital</h4>
                            <p class="text-on-surface-variant text-sm">Integración segura con protocolos de autenticidad para validez documental inmediata.</p>
                        </div>
                    </div>
                    <div class="bg-white p-8 rounded-4xl shadow-sm border-l-8 border-[#004077]">
                        <div class="space-y-4">
                            <span class="material-symbols-outlined text-4xl text-[#004077]" style="font-variation-settings: 'FILL' 1;">cloud_sync</span>
                            <h4 class="text-xl font-bold font-headline text-[#004077]">Historial en Nube</h4>
                            <p class="text-on-surface-variant text-sm">Acceda a sus títulos valores desde cualquier dispositivo con cifrado de grado militar.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
    );
}