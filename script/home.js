
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

document.addEventListener("DOMContentLoaded", () => {
  const footerImg = document.querySelector(".footer");

  footerImg.addEventListener("mouseenter", () => {
    // sobe a imagem suavemente
    footerImg.style.transform = "translateX(-50%) translateY(-30px)";
  });

  footerImg.addEventListener("mouseleave", () => {
    // volta para posição original
    footerImg.style.transform = "translateX(-50%) translateY(0)";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("cta3d");

  // Tilt 3D conforme posição do mouse dentro do botão
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;      // posição do mouse X
    const y = e.clientY - rect.top;       // posição do mouse Y
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    // intensidade do tilt
    const rotY = ((x - cx) / cx) * 10;    // gira no eixo Y (esquerda/direita)
    const rotX = -((y - cy) / cy) * 8;    // gira no eixo X (cima/baixo)
    const lift = 14;                      // altura (translateZ)

    btn.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${lift}px)`;

    // opcional: deslocar o brilho acompanhando o mouse
    const shine = btn.querySelector(".shine");
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;
    shine.style.background = `radial-gradient(140px 70px at ${px}% ${py}%, rgba(255, 255, 255, 0.26), transparent 60%)`;
  });

  // Ao sair do botão, volta ao estado inicial
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translateZ(0)";
  });

  // Clique com efeito breve de “pulso”
  btn.addEventListener("click", () => {
    btn.style.transition = "transform 120ms ease";
    btn.style.transform += " scale(0.98)";
    setTimeout(() => {
      btn.style.transition = "transform 180ms ease";
      btn.style.transform = "translateZ(12px)"; // retorna levantado se estiver em hover
    }, 120);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const tabs = [
    document.getElementById("tab-bottom1"),
    document.getElementById("tab-bottom2"),
    document.getElementById("tab-bottom3")
  ];
  const container = document.querySelector(".bottom3-part");

  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // calcula rotação proporcional
    const rotateX = ((y - centerY) / centerY) * 10; 
    const rotateY = ((x - centerX) / centerX) * 10;

    tabs.forEach(tab => {
      // mantém posição original, só inclina
      tab.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      tab.style.textShadow = `${-rotateY}px ${rotateX}px 20px rgba(255, 255, 255, 0.3)`;
    });
  });

  container.addEventListener("mouseleave", () => {
    tabs.forEach(tab => {
      tab.style.transform = "translate(-50%, -50%) rotateX(0deg) rotateY(0deg)";
      tab.style.textShadow = "0 8px 18pxrgba(255, 255, 255, 0.44)";
    });
  });
});
