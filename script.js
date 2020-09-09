const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('#nav');
const toggleIcon = document.querySelector('#toggle-icon');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const textBox = document.querySelector('#text-box');

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');       
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}
    

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);