function sayHello() {
  const output = document.getElementById("output");
  output.textContent = "bahri bich yanjah eyji majeur";
}

const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});
