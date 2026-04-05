import { Sidebar } from './sidebar/sidebar.js'
import {Header} from './header/header.js'
import {Footer} from './footer/footer.js'

export function Layout(content){
    return `
        <div class="layout-container bg-linear-to-r from-gray-100 to-gray-50">
            ${Sidebar()}

            <main class="ml-64 h-screen overflow-y-auto p-4">
                ${Header()}

                <section class="space-y-6 bg-white mt-6 p-4 rounded-lg shadow-2xl">
                    ${content}
                </section>

                ${Footer()}
            </main>
        </div>
    `
}

