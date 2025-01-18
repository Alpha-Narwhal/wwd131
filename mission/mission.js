const themeSelector = document.querySelector('#mode');
const logo = document.querySelector('.logo');
const body = document.body;
console.log(logo);

function changeTheme() {
  if (themeSelector.value === 'dark') {
    body.classList.add('dark');
    logo.src = 'byui-logo_white.png';
  } else {
    body.classList.remove('dark');
    logo.src = 'byui-logo_blue.webp';
  }
}

themeSelector.addEventListener('change', changeTheme);