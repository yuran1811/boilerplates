import './styles/index.css';

import { NUM_PARTICLE, PARTICLE_ALIVE, PARTICLE_ALIVE_DELTA, PARTICLE_RADIUS } from './constants';
import { Coor } from './types';
import { canvasInit, getRandColor } from './utils';

const canvas = document.querySelector('canvas') as HTMLCanvasElement;
const c = canvas.getContext('2d') as CanvasRenderingContext2D;

const mouse: {
  x: number;
  y: number;
} = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

class Particle {
  position: Coor;
  radius: number;
  color: string;
  velocity: Coor;
  alive: number;

  constructor(position: Coor, radius: number, color: string, velocity: Coor) {
    this.position = position;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    this.alive = PARTICLE_ALIVE;
  }

  draw() {
    c.beginPath();
    c.fillStyle = this.color;
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
    c.fill();
    c.closePath();
  }

  update() {
    this.draw();

    this.alive -= PARTICLE_ALIVE_DELTA;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

const particles: Particle[] = [];

const init = () => {
  setTimeout(init, 500);

  for (let i = 0; i < NUM_PARTICLE; i++) {
    const position = {
      x: mouse.x,
      y: mouse.y,
    };
    const velocity = {
      x: Math.cos(i * ((Math.PI * 2) / NUM_PARTICLE)) * 2,
      y: Math.sin(i * ((Math.PI * 2) / NUM_PARTICLE)) * 2,
    };

    particles.push(
      new Particle(
        position,
        PARTICLE_RADIUS,
        getRandColor('hsl', { deg: i, amount: NUM_PARTICLE, hslOpts: { s: 50, l: 50 } }),
        velocity
      )
    );
  }
};

const animation = () => {
  requestAnimationFrame(animation);

  c.fillStyle = `rgba(0, 0, 0, 0.04)`;
  c.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle, idx) => {
    if (particle.alive < 0) {
      particles.splice(idx, 1);
      return;
    }

    particle.update();
  });
};

canvasInit(canvas, c);
init();
animation();

onmousemove = (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
};
onresize = () => {
  canvasInit(canvas, c);
};
