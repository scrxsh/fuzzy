import { Layout } from "../components/layout/layout.js";

export function Landing() {
    return Layout(`
        <main class="p-12">
            <h2>Bienvenido</h2>
            <p>Esta es una landing page simple en JavaScript Vanilla.</p>
        </main>
    `
    );
}