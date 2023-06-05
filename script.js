const container = document.getElementById('mosaic-container');

const numRows = 3;
const numCols = 3;

// Generar matriz de cuadrados
for (let i = 0; i < numRows; i++) {
  for (let j = 0; j < numCols; j++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
}

// Animación de aparición desde arriba hacia abajo
const squares = document.getElementsByClassName('square');
let delay = 0;

for (let i = 0; i < squares.length; i++) {
  const square = squares[i];

  setTimeout(() => {
    square.style.opacity = '1';
    square.style.transform = 'translateY(0)';
  }, delay);

  delay += 100; // Ajusta la duración de la animación y el espacio entre cuadrados aquí si lo deseas
}

// Retraso antes de desaparecer los cuadros
setTimeout(() => {
  let delay = 0;

  for (let i = squares.length - 1; i >= 0; i--) {
    const square = squares[i];

    setTimeout(() => {
      square.style.opacity = '0';
      square.style.transform = 'translateY(-100%)';
    }, delay);

    delay += 100; // Ajusta la duración de la animación y el espacio entre cuadrados aquí si lo deseas
  }
}, 2000); // Retraso de 1 segundo (1000 ms) antes de comenzar a desaparecer

// Obtener el archivo JSON con los colores
fetch('colors.json')
  .then(response => response.json())
  .then(data => {
    const squares = document.getElementsByClassName('square');

    // Modificar los colores de los cuadrados
    for (let i = 0; i < squares.length; i++) {
      const square = squares[i];
      const color = data.colors[i];

      square.style.backgroundColor = color;
    }
  })
  .catch(error => {
    console.error('Error al obtener el archivo JSON:', error);
  });
