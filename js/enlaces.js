DesarrolloWeb = document.getElementById('desarrolloWeb');


function URLS(Boton, URL) {
    Boton.addEventListener("click", () => {
        location.href = URL;
    });
}



URLS(DesarrolloWeb, "./html/desarrolloWeb.html")
