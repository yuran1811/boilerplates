export const getRandColor = (
  mode: string,
  opts?: { deg: number; amount: number; hslOpts?: { s: number; l: number } }
) => {
  switch (mode) {
    case 'rgb':
      return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    case 'rgba':
      return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random()})`;
    case 'hsl':
      return `hsl(${opts ? 255 * (opts.deg / opts.amount) : Math.random() * 255}, ${
        opts?.hslOpts?.s ? opts.hslOpts.s : Math.random() * 100
      }%, ${opts?.hslOpts?.l ? opts.hslOpts.l : Math.random() * 100}%)`;
  }
  return '';
};

export const canvasInit = (canvas: HTMLCanvasElement, c: CanvasRenderingContext2D) => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  c.fillStyle = `rgba(0, 0, 0, 0.5)`;
  c.fillRect(0, 0, canvas.width, canvas.height);
};
