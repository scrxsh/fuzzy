import { Landing } from "./pages/landing.js";
import { Demand } from "./pages/demand.js";
import { History } from "./pages/history.js";
import { Settings } from "./pages/settings.js";

const routes = {
    '/': Landing,
    '/demandas': Demand,
    '/historial': History,
    '/configuracion': Settings
}

export function router(){
    const path = window.location.pathname;
    const view = routes[path];

    if(!view){
        return `<h2>404 - Página no encontrada</h2>`
    }
    
    return view();
}

export function routerLinkActive(){
    const path = window.location.pathname;

    //Router Link Activo para cambiar estilos
    document.querySelectorAll('[data-link]').forEach(link => {
        const href = link.getAttribute('href');

        const isActive = href === path;

        //Jugar con las clases
        link.classList.toggle('active-link', isActive);
        link.classList.toggle('nav-link', !isActive)
    });
}