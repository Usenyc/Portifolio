document.addEventListener("DOMContentLoaded", () => {
  // Circle container interactions
  const circleContainer = document.getElementById('circleContainer');
  if (circleContainer) {
    const circle1 = circleContainer.querySelector('.circle1');
    const circle2 = circleContainer.querySelector('.circle2');
    const messages = [
      document.getElementById('message1'),
      document.getElementById('message2'),
      document.getElementById('message3'),
      document.getElementById('message4')
    ].filter(Boolean);

    circleContainer.addEventListener('mouseenter', () => {
      if (circle1) circle1.style.transform = 'translateX(-50%) translateY(-100px)';
      if (circle2) circle2.style.transform = 'translateX(-50%) translateY(150px)';
      setTimeout(() => messages.forEach(msg => (msg.style.opacity = 1)), 600);
    });

    circleContainer.addEventListener('mouseleave', () => {
      if (circle1) circle1.style.transform = 'translateX(-50%)';
      if (circle2) circle2.style.transform = 'translateX(-50%)';
      messages.forEach(msg => (msg.style.opacity = 0));
    });
  }

  // Small horizontal oscillation for elemento2
  const elemento2 = document.getElementById('elemento2');
  if (elemento2) {
    let animationId;
    let direction = 1;
    let position = 0;

    elemento2.addEventListener('mouseenter', () => {
      animationId = setInterval(() => {
        position += direction * 2;
        if (position > 30 || position < -30) direction *= -1;
        elemento2.style.transform = `translateX(${position}px)`;
      }, 16);
    });

    elemento2.addEventListener('mouseleave', () => {
      clearInterval(animationId);
      position = 0;
      elemento2.style.transform = 'translateX(0)';
    });
  }

  // Footer hover lift
  const footerImg = document.querySelector('.footer');
  if (footerImg) {
    footerImg.addEventListener('mouseenter', () => {
      footerImg.style.transform = 'translateX(-50%) translateY(-30px)';
    });
    footerImg.addEventListener('mouseleave', () => {
      footerImg.style.transform = 'translateX(-50%) translateY(0)';
    });
  }

  // 3D CTA button
  const btn = document.getElementById('cta3d');
  if (btn) {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotY = ((x - cx) / cx) * 10;
      const rotX = -((y - cy) / cy) * 8;
      const lift = 14;

      btn.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${lift}px)`;
      const shine = btn.querySelector('.shine');
      if (shine) {
        const px = (x / rect.width) * 100;
        const py = (y / rect.height) * 100;
        shine.style.background = `radial-gradient(140px 70px at ${px}% ${py}%, rgba(255,255,255,0), transparent 60%)`;
      }
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translateZ(0)';
    });

    btn.addEventListener('click', () => {
      btn.style.transition = 'transform 120ms ease';
      btn.style.transform += ' scale(0.98)';
      setTimeout(() => {
        btn.style.transition = 'transform 180ms ease';
        btn.style.transform = 'translateZ(12px)';
      }, 120);
    });
  }

  // Bottom tabs tilt group
  const tabs = [
    document.getElementById('tab-bottom1'),
    document.getElementById('tab-bottom2'),
    document.getElementById('tab-bottom3')
  ].filter(Boolean);
  const bottomContainer = document.querySelector('.bottom3-part');
  if (bottomContainer && tabs.length) {
    bottomContainer.addEventListener('mousemove', (e) => {
      const rect = bottomContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * 10;

      tabs.forEach(tab => {
        tab.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        tab.style.textShadow = `${-rotateY}px ${rotateX}px 20px rgba(255, 255, 255, 0)`;
      });
    });

    bottomContainer.addEventListener('mouseleave', () => {
      tabs.forEach(tab => {
        tab.style.transform = 'translate(-50%, -50%) rotateX(0deg) rotateY(0deg)';
        tab.style.textShadow = '0 8px 18px rgba(255, 255, 255, 0.16)';
      });
    });
  }
});

