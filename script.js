const toggleSwtich = document.querySelector('#togglebox');
const nav = document.querySelector('#nav');
const toggleIcon = document.querySelector('#toggle-icon');
const img1 = document.querySelector('#image1');
const img2 = document.querySelector('#image2');
const img3 = document.querySelector('#image3');
const textBox = document.querySelector('#text-box');

function swtichPictures(color) {
  img1.src = `img/undraw_conceptual_idea_${color}.svg`;
  img2.src = `img/undraw_feeling_proud_${color}.svg`;
  img3.src = `img/undraw_proud_coder_${color}.svg`;
}

function toggleDarkLightMode(isDark) {
  nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
  isDark
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');

  isDark ? swtichPictures('dark') : swtichPictures('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleDarkLightMode(false);
  }
}

toggleSwtich.addEventListener('change', switchTheme);

// Check local storage gor Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwtich.checked = true;
    toggleDarkLightMode(true);
  }
}
