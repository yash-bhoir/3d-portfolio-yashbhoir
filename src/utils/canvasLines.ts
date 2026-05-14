export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const PARTICLE_COUNT = 38;
const CONNECTION_DISTANCE = 140;
const SPEED = 0.55;
// rgba components — keep low for a dim, subtle look
const LINE_RGB = '180, 180, 180';

export function createParticles(w: number, h: number): Particle[] {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * SPEED,
    vy: (Math.random() - 0.5) * SPEED,
  }));
}

export function stepParticles(particles: Particle[], w: number, h: number): void {
  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;
  }
}

export function drawFrame(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  w: number,
  h: number,
): void {
  ctx.clearRect(0, 0, w, h);

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > CONNECTION_DISTANCE) continue;

      const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.18;
      ctx.beginPath();
      ctx.strokeStyle = `rgba(${LINE_RGB}, ${alpha})`;
      ctx.lineWidth = 0.8;
      ctx.moveTo(particles[i].x, particles[i].y);
      ctx.lineTo(particles[j].x, particles[j].y);
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.fillStyle = `rgba(${LINE_RGB}, 0.22)`;
    ctx.arc(particles[i].x, particles[i].y, 1.5, 0, Math.PI * 2);
    ctx.fill();
  }
}
