import confetti from "canvas-confetti";

export function confettiBlast() {
  console.log("🎆 Confetti GO BRRRR!");

  const duration = 3000; // 3 seconds
  const animationEnd = Date.now() + duration;
  const defaults = {
    startVelocity: 50,
    spread: 720,
    ticks: 100,
    gravity: 0.9,
    zIndex: 999,
  };

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    const particleCount = 80;

    // Fire confetti from random left + right
    confetti({
      ...defaults,
      particleCount,
      origin: { x: Math.random() * 0.3, y: Math.random() * 0.3 },
    });

    confetti({
      ...defaults,
      particleCount,
      origin: { x: 1 - Math.random() * 0.3, y: Math.random() * 0.3 },
    });

    // Optional: more center blast
    confetti({
      ...defaults,
      particleCount,
      origin: { x: 0.5, y: 0.2 },
    });
  }, 200);
}
