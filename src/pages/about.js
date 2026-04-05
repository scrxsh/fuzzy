import { Layout } from "../components/layout/layout.js";

export function About() {
    return Layout(
        `
        <main class="p-12">
            <h2>Nosotros</h2>
            <p>Somos una empresa que ama JavaScript puro</p>
        </main>
    `
    );
}