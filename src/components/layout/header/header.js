export function Header(){
    return `
        <nav class="fixed top-0 w-full z-50 bg-primary-container/80 backdrop-blur-md flex justify-between items-center px-8 h-20 shadow-lg shadow-primary-container/10 font-semibold">
            <div class="text-xl font-bold tracking-tight text-white">Asistente Legal - UNISANGIL</div>
            <div class="hidden md:flex items-center gap-8">
                <a class="text-[#feb637] border-b-2 border-[#feb637] pb-1 cursor-pointer scale-95 active:scale-90 transition-transform" href="#">Asistente Virtual</a>
                <a class="text-white/80 hover:bg-white/10 px-3 py-2 rounded-lg duration-200 cursor-pointer scale-95 active:scale-90 transition-transform" href="#">Ayuda</a>
                <button class="bg-[#feb637] text-primary-container px-5 py-2 rounded-lg font-bold hover:shadow-lg transition-all scale-95 active:scale-90">
                    Nueva Letra
                </button>
            </div>
            <div class="flex items-center gap-4 text-white/80">
                <i class="material-symbols-outlined cursor-pointer hover:text-[#feb637] transition-colors">notifications</i>
                <i class="material-symbols-outlined cursor-pointer hover:text-[#feb637] transition-colors">account_circle</i>
            </div>
        </nav>
    `;
}