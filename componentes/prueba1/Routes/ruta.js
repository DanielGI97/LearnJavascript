//Para probarlo iniciar un servidor local.
//Puedes usar la extensión de VS Live Server.
function navigate(event, path){
    event.preventDefault();
    window.history.pushState({}, "", path);
    render(path);
}

function render(path){
    const app = document.getElementById("app");
    app.innerHTML = "Loading...";
    console.log("funciona");

    setTimeout(() => {
        switch (path) {
            case "/":
                app.innerHTML = "<h1>Darío</h1>";
                break;
            case "/about":
                app.innerHTML = "<h1>Victoria</h1>";
                break;
            case "/youtube":
                window.open('https://www.youtube.com/', '_blank');
                app.innerHTML = "<h1>YouTube abierto</h1>";
                break;
            default:
                app.innerHTML = "<h1>Page not found</h1>";
        }
    }, 500);
    
   /*
    switch (path) {
        case "/":
            app.innerHTML = "<h1>Darío</h1>";
            break;
        case "/about":
            app.innerHTML = "<h1>Victoria</h1>";
            break;
        default:
            app.innerHTML = "<h1>Page not found</h1>";
    }
    */
}

window.onpopstate = () => render(window.location.pathname);