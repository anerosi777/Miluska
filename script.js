function entrarAlMundo() {
  document.getElementById("pantalla-inicio").style.display = "none";
  document.getElementById("contenido-principal").style.display = "block";
}

const textoTitulo = "Cargando nuestro rinconcito de cariño dentro de internet 💖";
let i = 0;
function escribirTitulo() {
  if (i < textoTitulo.length) {
    document.getElementById("titulo-inicio").innerHTML += textoTitulo.charAt(i);
    i++;
    setTimeout(escribirTitulo, 60);
  } else {
    const audio = document.getElementById("audio-bienvenida");
    audio.play().catch(() => {
      console.log("Reproducción automática bloqueada por el navegador.");
    });
  }
}
window.addEventListener("load", escribirTitulo);

function mostrarCarta() {
  const carta = document.getElementById("carta");
  carta.style.display = carta.style.display === "none" ? "block" : "none";
}

function mostrarMensaje() {
  document.getElementById("secreto").style.display = "block";
}

function mostrarFormulario() {
  const form = document.getElementById("formulario");
  form.style.display = form.style.display === "none" ? "block" : "none";
}

function enviarMensaje(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const mensaje = document.getElementById("mensaje").value;
  const imagen = document.getElementById("imagen").files[0];

  const contenedor = document.getElementById("mensajesEnviados");
  const nuevoMensaje = document.createElement("div");
  nuevoMensaje.className = "mensaje-guardado";
  nuevoMensaje.innerHTML = `<strong>${nombre}</strong>: ${mensaje}`;

  if (imagen) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.style.maxWidth = "100px";
      img.style.display = "block";
      nuevoMensaje.appendChild(img);
      guardarMensaje(nombre, mensaje, e.target.result);
    };
    reader.readAsDataURL(imagen);
  } else {
    guardarMensaje(nombre, mensaje, null);
  }
  contenedor.appendChild(nuevoMensaje);
  document.getElementById("nombre").value = "";
  document.getElementById("mensaje").value = "";
  document.getElementById("imagen").value = "";
}

function guardarMensaje(nombre, mensaje, imagen) {
  const mensajes = JSON.parse(localStorage.getItem("mensajesMiluska") || "[]");
  mensajes.push({ nombre, mensaje, imagen });
  localStorage.setItem("mensajesMiluska", JSON.stringify(mensajes));
}

function borrarMensajes() {
  if (confirm("¿Estás seguro de borrar todos los mensajes?")) {
    localStorage.removeItem("mensajesMiluska");
    document.getElementById("mensajesEnviados").innerHTML = "";
  }
}

window.addEventListener("load", () => {
  const mensajes = JSON.parse(localStorage.getItem("mensajesMiluska") || "[]");
  const contenedor = document.getElementById("mensajesEnviados");
  mensajes.forEach(({ nombre, mensaje, imagen }) => {
    const msg = document.createElement("div");
    msg.className = "mensaje-guardado";
    msg.innerHTML = `<strong>${nombre}</strong>: ${mensaje}`;
    if (imagen) {
      const img = document.createElement("img");
      img.src = imagen;
      img.style.maxWidth = "100px";
      img.style.display = "block";
      msg.appendChild(img);
    }
    contenedor.appendChild(msg);
  });
});

function reproducirCancionAleatoria() {
  const canciones = [
    { archivo: "2.mp3", nombre: "Miluskita hermosa" },
    { archivo: "3.mp3", nombre: "Miluskita bella" },
    { archivo: "5.mp3", nombre: "Miluskita superbonita" },
    { archivo: "6.mp3", nombre: "Miluskita supermamá" },
    { archivo: "7.mp3", nombre: "Miluskita mi futura novia" },
    { archivo: "8.mp3", nombre: "Miluskita la niña de hermosa sonrisa" },
    { archivo: "9.mp3", nombre: "Miluskita la ingeniera más bella" },
      { archivo: "10.mp3", nombre: "Miluskita mi futura esposa" }
  ];
  const indice = Math.floor(Math.random() * canciones.length);
  const cancion = canciones[indice];
  const reproductor = document.getElementById("reproductor-aleatorio");
  const nombreCancion = document.getElementById("nombre-cancion");
  reproductor.src = cancion.archivo;
  reproductor.play();
  nombreCancion.textContent = `🎶 Sonando: ${cancion.nombre}`;
}