const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const open = document.getElementById('open');
const close = document.getElementById('close');


menu.addEventListener('click', ()=>{
  nav.classList.toggle('hidden')
  open.classList.toggle('hidden')
  close.classList.toggle('hidden')
})