import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
    return <p>Hello from React!</p>;
}

function main() {
    const el = document.getElementById('app');
    if (!el) throw new Error("Can't find element with id 'app'");
    const root = createRoot(el);
    root.render(<App />);
}

main();
