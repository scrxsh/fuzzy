import { router } from "./router.js";
import { routerLinkActive } from "./router.js";

function render(){
    const app = document.getElementById('app');

    app.innerHTML = `
        ${router()}
    `;

    addEvents();
    routerLinkActive()
}

function addEvents() {
    document.querySelectorAll('[data-link]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const url = link.getAttribute('href');
            history.pushState(null, null, url);
            render();
        });
    });
}

window.addEventListener('popstate', render);
window.addEventListener('load', render);