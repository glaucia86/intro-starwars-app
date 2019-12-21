/**
 * Arquivo: intro.js
 * Data: 20/12/2019
 * Descrição: Lógica da Intro do filme Star Wars.
 * Author: Glaucia Lemos
 */

let width = window.innerWidth;
let height = window.innerHeight;

let intro = document.getElementsByClassName('intro')[0];

intro.style.fontSize = width / 30 + 'px';

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  intro.style.fontSize = width / 30 + 'px';
});
