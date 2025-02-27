document.addEventListener("DOMContentLoaded", () => {
    class ParentComponent extends HTMLElement {
        constructor() {
            super();
            this.state = {
                counter : 0,
            };
            this.render();
        }
    
        render(){
            this.innerHTML = `<button id="increase">Incrementar</button>
                             <button id="decrease">Decrementar</button>
                             <child-component id="value"></child-component>
            `;
            this.updateChildComponent();
    
            this.querySelector("#increase").addEventListener("click", () => {
                this.state.counter++;
                this.updateChildComponent();
            });
    
            this.querySelector("#decrease").addEventListener("click", () => {
                this.state.counter--;
                this.updateChildComponent();
            });
        }
    
        updateChildComponent () {
            this.querySelector("child-component").setAttribute(
                "counter",
                this.state.counter
            );
        }
    }

    class ChildComponent extends HTMLElement {
        static get observedAttributes(){
            return ["counter"];
        }

        attributeChangedCallback(name, oldValue, newValue){
            if (name === "counter"){
                this.render(newValue);
            }
        }

        connectedCallback(){
            const initialValue = this.getAttribute("counter") || 0; 
            this.render(initialValue);
        }

        render(counterValue){
            this.textContent = `Valor del Contador en el hijo: ${counterValue}`;
        }
    }
    
    customElements.define("parent-component", ParentComponent);
    customElements.define("child-component", ChildComponent);
})