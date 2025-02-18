class MyWatch extends HTMLElement {
    constructor() {
        super();
        this.interval = null;
    }

    // Corrección del nombre del método
    connectedCallback() {
        this.showTime();
        this.interval = setInterval(() => {
            this.showTime(); // Corrección de mayúsculas
        }, 1000);
    }

    showTime() {
        this.textContent = new Date().toLocaleTimeString(); // Mostrar la hora en lugar de la fecha
    }

    disconnectedCallback() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    // Corrección del nombre del método estático
    static get observedAttributes() {
        return []; // Vacío si no necesitas observar atributos
    }
}

customElements.define("my-watch", MyWatch);
