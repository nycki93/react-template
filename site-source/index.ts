function main() {
    const el: HTMLElement = document.createElement('div');
    el.innerHTML = '<p>Hello from JS!</p>';
    document.body.appendChild(el);
}

main();
