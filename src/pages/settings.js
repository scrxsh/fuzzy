import { Layout } from "../components/layout/layout.js";

export function Settings(){
    return Layout(
        `
            <div class="mx-auto p-2 lg:p-12">
                <div class="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 class="text-4xl md:text-5xl font-bold text-primary tracking-tight mb-2">Configuración</h1>
                        <p class="text-on-surface-variant max-w-lg">Gestiona tu identidad digital, firma institucional y preferencias de documentación legal para optimizar tu labor jurídica.</p>
                    </div>
                    <div class="flex gap-3">
                        <button class="px-6 py-2 rounded-full border border-outline-variant text-primary font-semibold hover:bg-surface-container transition-colors">Restablecer</button>
                        <button class="px-6 py-2 rounded-full bg-secondary-container text-on-secondary-container font-bold shadow-md hover:shadow-lg transition-all">Guardar Cambios</button>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-1 space-y-8">
                        <section class="bg-surface-container-lowest rounded-lg p-22 shadow-[0px_32px_64px_-15px_rgba(0,42,81,0.06)] relative overflow-hidden">
                            <div class="absolute top-0 left-0 w-1.5 h-full bg-secondary"></div>
                            <h3 class="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-6">Perfil del Jurista</h3>
                            <div class="flex flex-col items-center text-center">
                                <div class="relative mb-4 group">
                                    <img alt="Perfil" class="w-32 h-32 rounded-full object-cover border-4 border-surface-container" src="https://i.pinimg.com/1200x/46/4b/8a/464b8ac1969f591a2316c8fa1d534027.jpg"/>
                                    <button class="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full shadow-lg group-hover:scale-110 transition-transform">
                                    <i class="material-symbols-outlined text-sm" data-icon="edit">edit</i>
                                    </button>
                                </div>
                                <h2 class="text-xl font-bold text-primary">Eduardo Torres</h2>
                                <p class="text-secondary font-semibold text-sm">Estudiante de Consultorio Jurídico</p>
                                <div class="w-full mt-8 space-y-4 text-left">
                                    <div class="bg-surface-container-low p-4 rounded-xl">
                                        <label class="text-[10px] uppercase font-bold text-outline tracking-wider">Correo Institucional</label>
                                        <p class="text-sm font-medium text-on-surface">etorres@unisangil.edu.co</p>
                                    </div>
                                    <div class="bg-surface-container-low p-4 rounded-xl">
                                        <label class="text-[10px] uppercase font-bold text-outline tracking-wider">Universidad</label>
                                        <p class="text-sm font-medium text-on-surface">UNISANGIL - Sede Chiquinquirá</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="lg:col-span-2 space-y-8">
                        <section class="bg-surface-container-lowest rounded-lg p-8 shadow-sm">
                            <div class="flex items-center gap-3 mb-8">
                                <div class="p-2 bg-secondary-container rounded-lg">
                                <span class="material-symbols-outlined text-on-secondary-container" data-icon="verified_user" style="font-variation-settings: 'FILL' 1;">verified_user</span>
                                </div>
                                <div>
                                <h3 class="font-bold text-primary">Firma Digital e Institucional</h3>
                                <p class="text-xs text-on-surface-variant">Validez jurídica garantizada para todos sus documentos.</p>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="border-2 border-primary-container/10 rounded-xl p-6 flex flex-col items-center justify-center bg-blue-50/20">
                                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                                        <i class="material-symbols-outlined text-3xl text-primary" data-icon="draw" style="font-variation-settings: 'FILL' 1;">draw</i>
                                    </div>
                                    <p class="text-sm font-bold text-primary mb-1">Firma Digital</p>
                                    <span class="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-tighter mb-4">Activada</span>
                                    <button class="text-xs font-bold text-primary hover:underline">ACTUALIZAR FIRMA</button>
                                </div>
                                <div class="border-2 border-dashed border-outline-variant rounded-xl p-6 flex flex-col items-center justify-center hover:bg-surface-container transition-colors cursor-pointer">
                                    <div class="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mb-4">
                                        <i class="material-symbols-outlined text-3xl text-outline" data-icon="upload_file">upload_file</i>
                                    </div>
                                    <p class="text-sm font-bold text-on-surface-variant mb-1">Firma Escaneada</p>
                                    <p class="text-[10px] text-outline uppercase tracking-tight text-center">Suba un archivo PNG transparente para firmas manuales</p>
                                </div>
                            </div>
                        </section>
                        <section class="bg-surface-container-lowest rounded-lg p-8 shadow-sm">
                            <h3 class="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-6">Seguridad</h3>
                            <div class="space-y-4">
                                <button class="w-full flex items-center justify-between p-3 bg-surface-container-lowest rounded-xl hover:bg-white transition-colors group">
                                    <div class="flex items-center gap-3">
                                        <i class="material-symbols-outlined text-primary" data-icon="lock">lock</i>
                                        <span class="text-sm font-medium">Cambiar Contraseña</span>
                                    </div>
                                    <i class="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</i>
                                </button>
                                <div class="flex items-center justify-between p-3">
                                    <div class="flex items-center gap-3">
                                        <i class="material-symbols-outlined text-primary" data-icon="security_update_good">security_update_good</i>
                                        <span class="text-sm font-medium">Autenticación 2FA</span>
                                    </div>
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input checked="" class="sr-only peer" type="checkbox"/>
                                        <div class="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                    </label>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        `
    )
}