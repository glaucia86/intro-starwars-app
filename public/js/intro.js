/**
 * Arquivo: intro.js
 * Data: 20/12/2019
 * Descrição: Lógica da Intro do filme Star Wars.
 * Author: Glaucia Lemos
 */

let width = window.innerWidth;
let height = window.innerHeight;

const intro = document.getElementsByClassName('intro')[0];
const historia = document.getElementsByClassName('historia')[0];
const paragrafos = document.getElementsByClassName('paragrafos')[0];
const som = document.getElementById('som');

intro.style.fontSize = width / 30 + 'px';
historia.style.fontSize = width / 20 + 'px';
paragrafos.style.height = height + 'px';

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  intro.style.fontSize = width / 30 + 'px';
  historia.style.fontSize = width / 20 + 'px';
  paragrafos.style.height = height + 'px';
});

function iniciar() {
  intro.className = 'intro intro_texto intro_animacao';
  historia.className = 'historia historia_texto historia_animacao';
  som.play();
}

/* Fundo de estrelas */

let canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

canvas.width = width;
canvas.height = height;

const num = 100;
const size = 2;
const elements = [];

function inicio() {
  for (let i = 0; i < num; i++) {
    elements[i] = {
      x: Math.ceil(Math.random() * width),
      y: Math.ceil(Math.random() * height),
      size: Math.random() * size,
    };
  }
}

function nevar() {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < num; i++) {
    const e = elements[i];
    ctx.beginPath();
    ctx.fillStyle = '#FFFFFF';
    ctx.arc(e.x, e.y, e.size, 0, 2 * Math.PI);
    ctx.fill();
  }
}

inicio();
nevar();
