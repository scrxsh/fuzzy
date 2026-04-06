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
        </div>






        <div class="layout-container bg-linear-to-r from-gray-100 to-gray-50">
            

            <main class="ml-64 h-screen overflow-y-auto p-4">

                <section class="space-y-6 bg-white mt-6 p-4 rounded-lg shadow-2xl">
                    ${content}
                </section>

                ${Footer()}
            </main>
        </div>
    `
}

