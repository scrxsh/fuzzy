export function Header(){
    return `
        <header class="bg-gray-900 text-gray-50 p-5">
            <h1 class="text-2xl font-bold">Fuzzy</h1>
            <nav>
                <a href="/" data-link>Inicio</a>
                <a href="/about" data-link>Nosotros</a>
                <a href="/contact" data-link>Contacto</a>
            </nav>
        </header>
    `;
}