import { loadCSS } from "../../../common/loadCSS.js";

export function Footer() {
    //Importar el css propio
    loadCSS('/src/components/footer/footer.css')

    return `
        <footer class="text-3xl font-bold bg-gray-900 text-center p-5 text-gray-50">
            <p>© 2026 - Fuzzy</p>
        </footer>
    `;
}