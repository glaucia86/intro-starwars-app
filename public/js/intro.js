/**
 * File: 04/05/2022
 * Descrição: Star Wars Intro Logic
 * Author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

let width = window.innerWidth;
let height = window.innerHeight;

const intro = document.getElementsByClassName('intro')[0];
const story = document.getElementsByClassName('story')[0];
const paragraphs = document.getElementsByClassName('paragraphs')[0];
const sound = document.getElementById('sound');

intro.style.fontSize = width / 30 + 'px';
story.style.fontSize = width / 20 + 'px';
paragraphs.style.height = height + 'px';

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  intro.style.fontSize = width / 30 + 'px';
  story.style.fontSize = width / 20 + 'px';
  paragraphs.style.height = height + 'px';
});

function start() {
  intro.className = 'intro text_intro animation_intro';
  story.className = 'story text_story animation_story';
  sound.play();
}

/* Background with Stars */

let canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

canvas.width = width;
canvas.height = height;

const num = 100;
const size = 2;
const elements = [];

function starts() {
  for (let i = 0; i < num; i++) {
    elements[i] = {
      x: Math.ceil(Math.random() * width),
      y: Math.ceil(Math.random() * height),
      size: Math.random() * size,
    };
  }
}

function snow() {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < num; i++) {
    const e = elements[i];
    ctx.beginPath();
    ctx.fillStyle = '#FFFFFF';
    ctx.arc(e.x, e.y, e.size, 0, 2 * Math.PI);
    ctx.fill();
  }
}

starts();
snow();
