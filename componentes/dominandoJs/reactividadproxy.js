document.addEventListener("DOMContentLoaded", () => {
    const state = new Proxy(
        { counter: 0},
        {
            set(obj, prop, newValue) {
                obj[prop] = newValue;
                if (prop === "counter") {
                    updateCounter();
                }

                return true;
            }
        },
    );

    const counterSpan = document.getElementById("counter");
    const increseButton = document.getElementById("increase");
    const decreaseButton = document.getElementById("decrease");

    const updateCounter = () => {
        counterSpan.textContent = state.counter;
    }

    increseButton.addEventListener("click", () => {
        state.counter++;
    });

    decreaseButton.addEventListener("click", () => {
        state.counter--;
    });

    updateCounter();
});