// ─── Topographic contour background — marching-squares + sine noise ─────────

// Fewer levels & lower alpha vs. the reference → less dense, less bright
const COLS = 90;
const NUM_LEVELS = 14;
const MIN_V = -2.2;
const MAX_V = 2.2;

function noise2D(x: number, y: number, t: number): number {
  return (
    Math.sin(x * 1.3 + t * 0.4) * Math.cos(y * 1.1 + t * 0.3) +
    Math.sin(x * 0.7 - y * 0.9 + t * 0.25) * 0.7 +
    Math.cos(x * 2.1 + y * 1.7 + t * 0.5) * 0.4 +
    Math.sin(x * 0.4 + y * 2.3 - t * 0.2) * 0.5 +
    Math.cos(x * 1.8 - y * 0.6 + t * 0.35) * 0.3
  );
}

function lerpEdge(a: number, b: number, va: number, vb: number, level: number): number {
  return Math.abs(vb - va) < 0.0001 ? (a + b) / 2 : a + (b - a) * (level - va) / (vb - va);
}

function buildField(cols: number, rows: number, t: number): number[][] {
  const field: number[][] = [];
  for (let j = 0; j <= rows; j++) {
    field[j] = [];
    for (let i = 0; i <= cols; i++) {
      field[j][i] = noise2D((i / cols) * 4.5, (j / rows) * 7, t);
    }
  }
  return field;
}

export function drawTopoFrame(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  t: number,
): void {
  ctx.clearRect(0, 0, W, H);

  const rows = Math.round(COLS * H / W);
  const cw = W / COLS;
  const ch = H / rows;
  const field = buildField(COLS, rows, t);

  for (let li = 0; li < NUM_LEVELS; li++) {
    const level = MIN_V + (li / (NUM_LEVELS - 1)) * (MAX_V - MIN_V);
    const prox = 1 - Math.abs(level) / 2.2;

    ctx.beginPath();
    ctx.strokeStyle = `rgba(${Math.round(232 + prox * 23)},${Math.round(80 + prox * 40)},10,${0.13 + prox * 0.26})`;
    ctx.lineWidth = 0.7 + prox * 0.4;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < COLS; i++) {
        const x0 = i * cw, y0 = j * ch, x1 = x0 + cw, y1 = y0 + ch;
        const v00 = field[j][i], v10 = field[j][i + 1], v01 = field[j + 1][i], v11 = field[j + 1][i + 1];
        const top = lerpEdge(x0, x1, v00, v10, level);
        const bot = lerpEdge(x0, x1, v01, v11, level);
        const lft = lerpEdge(y0, y1, v00, v01, level);
        const rgt = lerpEdge(y0, y1, v10, v11, level);
        const c = (v00 > level ? 8 : 0) | (v10 > level ? 4 : 0) | (v11 > level ? 2 : 0) | (v01 > level ? 1 : 0);
        const segs: [number, number, number, number][] = [];

        switch (c) {
          case 1: case 14: segs.push([x0, lft, bot, y1]); break;
          case 2: case 13: segs.push([bot, y1, x1, rgt]); break;
          case 3: case 12: segs.push([x0, lft, x1, rgt]); break;
          case 4: case 11: segs.push([top, y0, x1, rgt]); break;
          case 5:          segs.push([top, y0, x0, lft], [bot, y1, x1, rgt]); break;
          case 6: case 9:  segs.push([top, y0, bot, y1]); break;
          case 7: case 8:  segs.push([x0, lft, top, y0]); break;
          case 10:         segs.push([x0, lft, bot, y1], [top, y0, x1, rgt]); break;
        }
        for (const s of segs) { ctx.moveTo(s[0], s[1]); ctx.lineTo(s[2], s[3]); }
      }
    }
    ctx.stroke();
  }
}
