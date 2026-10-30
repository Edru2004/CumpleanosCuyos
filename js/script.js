
// ==================================
// CONFIGURACIÓN DE LA INVITACIÓN
// ==================================

const configuracion = {

    fechaEvento: "2027-05-16T16:00:00",
telefonoWhatsApp: "522481429390",
    mensajeWhatsApp:
        "¡Hola! Confirmo mi asistencia al cumpleaños de hipo y greñas ",

    ubicacion:
        "https://www.google.com/https://maps.app.goo.gl/xf32sekfeP2ZJFGY9/search/?api=1&query=Tu+Direccion"

};


// ==================================
// CUENTA REGRESIVA
// ==================================

function actualizarContador() {

    const fecha = new Date(configuracion.fechaEvento);
    const ahora = new Date();

    const diferencia = fecha - ahora;

    if (diferencia <= 0) {

        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";

        return;
    }

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferencia / 1000) % 60
    );

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}

actualizarContador();

setInterval(actualizarContador, 1000);


// ==================================
// MÚSICA
// ==================================

const musica = document.getElementById("musica");
const botonMusica = document.getElementById("boton-musica");

botonMusica.addEventListener("click", async () => {

    if (musica.paused) {

        try {
            await musica.play();
            botonMusica.textContent = "⏸ Pausar música";
        } catch (error) {
            alert("No se pudo reproducir la canción.");
        }

    } else {

        musica.pause();
        botonMusica.textContent = "▶ Escuchar música";

    }

});


// ==================================
// WHATSAPP
// ==================================

const enlaceWhatsApp =
    "https://wa.me/" +
    configuracion.telefonoWhatsApp +
    "?text=" +
    encodeURIComponent(configuracion.mensajeWhatsApp);

document.getElementById("whatsapp").href = enlaceWhatsApp;


// ==================================
// GOOGLE MAPS
// ==================================

document.getElementById("mapa").href =
    configuracion.ubicacion;
