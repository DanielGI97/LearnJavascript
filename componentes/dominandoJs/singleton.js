const ConfigManager = (function () {
    let instance;
    let states = {}; // Estado privado
    
    function createInstance() {
        // Retornar un objeto con los métodos públicos
        return {
            add: function (state, value) {
                if (!states.hasOwnProperty(state)) {
                    states[state] = value;
                    console.log("Se ha añadido el estado: " + state);
                } else {
                    alert("Ya existe ese state.");
                }
            },
            get: function (state) {
                return states[state];
            }
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function runApp() {
    const instance1 = ConfigManager.getInstance();
    const instance2 = ConfigManager.getInstance();

    console.log("Same instance?", instance1 === instance2); // true
    instance1.add("comando", "hola");
    console.log(instance1.get("comando")); // "hola"
}

runApp();