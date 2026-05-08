import { useEffect, useRef } from "react";

function createConfettiPiece(canvas: HTMLCanvasElement) {
  const colors = ["#ff0000", "#ff6600", "#ffcc00", "#33cc33", "#3399ff", "#cc33ff", "#ff69b4"];
  return {
    x: Math.random() * canvas.width,
    y: -10,
    size: Math.random() * 8 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    speedY: Math.random() * 3 + 2,
    speedX: (Math.random() - 0.5) * 4,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 10,
  };
}

export function SunsetBanner(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let pieces: ReturnType<typeof createConfettiPiece>[] = [];
    let animationId: number;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function burst() {
      if (!canvas) return;
      for (let i = 0; i < 30; i++) {
        pieces.push(createConfettiPiece(canvas));
      }
    }

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pieces = pieces.filter((p) => p.y < canvas.height + 20);

      pieces.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotationSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    }

    burst();
    const interval = setInterval(burst, 5000);
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="w-full bg-red-600 text-white py-4 px-6 text-center relative z-50 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="max-w-4xl mx-auto relative z-10">
        <p className="font-bold text-lg">
          🎉 DeFiChain has been sunset 🎉
        </p>
        <p className="text-sm mt-1 opacity-90">
          This project is no longer actively maintained. The information on this
          site is kept for historical reference only. Thanks for the memories!
        </p>
      </div>
    </div>
  );
}
