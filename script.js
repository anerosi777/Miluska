const fechaCumple = new Date("2025-06-22T00:00:00");

function actualizarContador() {
  const ahora = new Date();
  const diferencia = fechaCumple - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  document.getElementById("contador").innerHTML =
    `<strong>${dias}</strong> días, <strong>${horas}</strong> horas, <strong>${minutos}</strong> minutos, <strong>${segundos}</strong> segundos<br>
    ¡Miluska estas cada vez más cerca de celebrar tu día!, Estoy muy emocionado y esto es un pequeño detalle para que sepas que lo mejor esta por venir 🎈`;
}

setInterval(actualizarContador, 1000);
actualizarContador();

const poemas = [
  "En tu día celebro tu magia, tu dulzura y tu voz que me abraza.",
  "Miluska, tu sonrisa enciende el sol y tu risa llena el aire de flores.",
  "Eres como un poema sin fin, lleno de ternura, fuerza y luz.",
  "Tu presencia es regalo, tu amor melodía que nunca termina.",
  "Cada día contigo es un verso nuevo que ilumina el corazón."
];

const canciones = [
  'Abel Pintos - Bailando Con Tu Sombra (Alelí) (Official Audio).mp3',
  'AIRBAG - Cae el Sol - Video oficial.mp3',
  'Como Te Extraño.mp3',
  'Enanitos Verdes - Mariposas.mp3',
  'Mac Salvador - NECESITO DE TI (Gran Teatro Nacional 2018).mp3',
  'Tanto Amor.mp3'
];

function mostrarSorpresa() {
  const poemaAleatorio = poemas[Math.floor(Math.random() * poemas.length)];
  document.getElementById("poema").textContent = poemaAleatorio;

  const cancionAleatoria = canciones[Math.floor(Math.random() * canciones.length)];
  const reproductor = document.getElementById("player");
  reproductor.src = cancionAleatoria;
  reproductor.play();

  document.getElementById("sorpresa").style.display = "block";
}
