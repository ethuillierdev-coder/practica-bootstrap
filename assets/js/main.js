// Botón con id=btnTop
const btnTop = document.getElementById("btnTop");
if (btnTop) {
    btnTop.style.opacity = "1";
    btnTop.style.visibility = "visible";

    btnTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth"});
    });
}

// Este es un metodo para generar un cuadro de alerta
window.alert('Hola Mundo');