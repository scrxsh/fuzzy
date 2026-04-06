import { Sidebar } from './sidebar/sidebar.js'
import {Header} from './header/header.js'
import {Footer} from './footer/footer.js'

export function Layout(content){
    return `
        <div class="bg-surface text-on-surface">
            ${Header()}
            <aside class="hidden lg:flex flex-col h-screen w-72 fixed left-0 top-0 pt-24 bg-slate-50 text-sm font-medium z-40 transition-all duration-300 ease-in-out">
                ${Sidebar()}
            </aside>
            <main class="ml-0 lg:ml-72 pt-20 min-h-screen bg-on-primary">
                ${content}
                ${Footer()}
            </main>
        </div>
    `
}

