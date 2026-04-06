export function Sidebar(){
    return `
        <div class="mb-8 px-6 flex items-center gap-3">
            <div class="w-10 h-10 bg-primary-container rounded flex items-center justify-center">
                <i class="material-symbols-outlined text-white">balance</i>
            </div>
            <div>
                <h3 class="text-primary-container font-black text-lg">Consultorio Jurídico</h3>
                <p class="text-[10px] text-slate-500 uppercase tracking-widest">Unisangil - Sede Chiquinquirá</p>
            </div>
        </div>

        <nav class="flex-1">
            <a class="flex items-center gap-3 px-6 py-4 text-primary-container active-link href="/" data-link>
                <i class="material-symbols-outlined" data-icon="home_app_logo">home_app_logo</i>
                Inicio
            </a>
            <a class="flex items-center gap-3 px-6 py-4 text-slate-500 nav-link" href="/nosotros" data-link>
                <i class="material-symbols-outlined" data-icon="cases">cases</i>
                Generador de demanda
                </a>
            <a class="flex items-center gap-3 px-6 py-4 text-slate-500 nav-link" href="/contacto" data-link>
                <i class="material-symbols-outlined" data-icon="history">history</i>
                Historial
            </a>
            <a class="flex items-center gap-3 px-6 py-4 text-slate-500 nav-link" href="#">
                <i class="material-symbols-outlined" data-icon="settings">settings</i>
                Configuración
            </a>
        </nav>

        <div class="mt-auto p-6">
            <div class="space-y-2">
                <a class="flex items-center gap-3 px-2 py-2 text-slate-400 hover:text-[#004077] transition-colors text-xs" href="#">
                    <i class="material-symbols-outlined text-sm" data-icon="logout">logout</i>
                    Cerrar sesión
                </a>
            </div>
        </div>
    `
}