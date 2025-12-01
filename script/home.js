const img = document.querySelector(".side-img");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;

  img.style.transform = `
    var(--base-transform)
    rotateX(${y * -1}deg)
    rotateY(${x}deg)
    translateZ(20px)
  `;
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById('circleContainer');
  const circle1 = container.querySelector('.circle1');
  const circle2 = container.querySelector('.circle2');
  const messages = [
    document.getElementById('message1'),
    document.getElementById('message2'),
    document.getElementById('message3'),
    document.getElementById('message4')
  ];

  container.addEventListener('mouseenter', () => {
    circle1.style.transform = 'translateX(-50%) translateY(-100px)';
    circle2.style.transform = 'translateX(-50%) translateY(150px)';
    setTimeout(() => {
      messages.forEach(msg => msg.style.opacity = 1);
    }, 600);
  });

  container.addEventListener('mouseleave', () => {
    circle1.style.transform = 'translateX(-50%)';
    circle2.style.transform = 'translateX(-50%)';
    messages.forEach(msg => msg.style.opacity = 0);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const elemento2 = document.getElementById("elemento2");
  let animationId;
  let direction = 1;
  let position = 0;

  elemento2.addEventListener("mouseenter", () => {
    // inicia animação
    animationId = setInterval(() => {
      position += direction * 2; // velocidade (px por frame)

      // limites do movimento
      if (position > 30 || position < -30) {
        direction *= -1; // inverte direção
      }

      // aplica transformação
      elemento2.style.transform = `translateX(${position}px)`;
    }, 16); // ~60fps
  });

  elemento2.addEventListener("mouseleave", () => {
    // para animação
    clearInterval(animationId);
    position = 0;
    elemento2.style.transform = "translateX(0)";
  });
});

