/*import { loadCSS } from "../../../common/loadCSS.js";*/

export function Footer() {
    //Importar el css propio
    /*loadCSS('/src/components/footer/footer.css')*/

    return `
            <footer class="w-full py-8 border-t border-slate-200 text-xs uppercase tracking-widest font-medium">
                <div class="flex flex-col md:flex-row justify-between items-center px-12 ml-0 lg:ml-72 gap-8">
                    <div class="flex flex-col gap-2">
                        <p class="text-slate-400">Télefono: (608) 726 6058 Ext. 2324</p>
                        <p class="text-slate-400">Correo: consultoriojuridicochinquira@unisangil.edu.co</p>
                        <p class="text-slate-400">© 2026 Fundación Universitaria de San Gil. Todos los derechos reservados.</p>
                    </div>
                    <div class="flex gap-8">
                        <a class="text-slate-400 hover:text-[#feb637] transition-colors opacity-80 hover:opacity-100" href="https://www.unisangil.edu.co/wp-content/uploads/Documentos/Institucionales/Resoluciones/res_214_politica_tratamieto_datos_personales.pdf" target="_blank" rel="noopener noreferrer">Política de Privacidad</a>
                        <a class="text-slate-400 hover:text-[#feb637] transition-colors opacity-80 hover:opacity-100" href="https://unisangil.edu.co/?page_id=23456" target="_blank" rel="noopener noreferrer">Documentos institucionales</a>
                    </div>
                </div>
            </footer>
    `;
}