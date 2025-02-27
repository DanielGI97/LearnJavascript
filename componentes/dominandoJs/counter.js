document.addEventListener("DOMContentLoaded", () => {
    class Counter extends HTMLElement {
        constructor(){
            super();
            this.counter = 0;
            this.innerHTML = `<button id="increase">+</button>
                             <button id="decrease">-</button>
                             <span id="value">${this.counter}</span>`;
    
            this.querySelector("#increase").addEventListener("click", () => {
                this.counter++;
                this.updateCounter();
            });

            this.querySelector("#decrease").addEventListener("click", () => {
                this.counter--;
                this.updateCounter();
            });
        }
    
        updateCounter() {
            this.querySelector("#value").textContent = this.counter >= 0 ? this.counter : 0;
        }
    }

    class CounterWithAttributes extends HTMLElement {
        static get observedAttributes(){
            return ["initial-value"];
        }

        constructor(){
            super();
            this.counter = parseInt(this.getAttribute("initial-value")) | 0;
            this.render();
        }

        attributeChangedCallback(name, oldValue, newValue){
            if ( name === "initial-value"){
                this.counter = parseInt(newValue);
                this.render();
            }
        }

        render(){
            this.innerHTML = `<button id="increase">Increase</button>
                             <span id="value">${this.counter}</span>`;
            this.querySelector("#increase").addEventListener("click", () => {
                this.counter++;
                this.updateCounter();
            });
        }

        updateCounter(){
            this.querySelector("#value").textContent = this.counter;
        }
    }

    customElements.define("my-counter", Counter);
    customElements.define("my-counter-attributes", CounterWithAttributes);
});