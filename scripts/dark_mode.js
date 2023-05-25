const button = document.querySelector('#darkMode_btn');
let isDarkMode = false;

const light = {
  backgroundColor: 'rgb(170, 156, 146)',
  fontColor: 'rgb(0, 0, 0)',
  cursorClickRadios: 'rgb(170, 156, 146)'
};

const dark = {
  backgroundColor: 'rgb(0, 0, 0)',
  fontColor: 'rgb(170, 156, 146)',
  cursorClickRadios: 'rgb(0, 0, 0)'
};

function toggleMode() {
  isDarkMode = !isDarkMode;

  const { backgroundColor, fontColor, cursorClickRadios } = isDarkMode ? dark : light;

  root.style.setProperty('--background_color', backgroundColor);
  root.style.setProperty('--font_color', fontColor);
  root.style.setProperty('--cursor_clickColor', cursorClickRadios);

  button.textContent = isDarkMode ? 'Light' : 'Dark';
}

button.addEventListener('click', toggleMode);
