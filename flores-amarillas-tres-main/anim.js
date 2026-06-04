// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Fue nuclear coincidir", time: 0 },
  { text: "Al contacto detonamos", time: 2 },
  { text: "No nos preocupamos", time: 3 },
  { text: "Nadie nos detiene a los dos", time: 5 },
  { text: "Cuando estamos juntos", time: 11 },
  { text: "Siento como el mundo", time: 12 },
  { text: "Gira alrededor", time: 14 },
  { text: "Cuando tu me abrazas", time: 16 },
  { text: "Siento que le quitas", time: 17 },
  { text: "El calor al sol", time: 19 },
  { text: "Morfina a mi dolor <3", time: 25 },
  { text: "Y estoy yo", time: 32 },
  { text: "Aquí y en otra vida", time: 34 },
  { text: "Para protegerte", time: 35 },
  { text: "Siempre del dolor", time: 36 },
  { text: "Sostenerte fuerte", time: 41 },
  { text: "Y cuando estés abajo", time: 42 },
  { text: "Ser tu propulsor", time: 43 },
  { text: "Ser morfina a tu dolor <3", time: 48 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);