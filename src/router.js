import { Landing } from "./pages/landing.js";
import { About } from "./pages/about.js";
import { Contact } from "./pages/contact.js";

const routes = {
    '/': Landing,
    '/about': About,
    '/contact': Contact
}

export function router(){
    const path = window.location.pathname;
    const view = routes[path] || Landing;

    if(!view){
        return `<h2>404 - Página no encontrada</h2>`
    }
    
    return view();
}