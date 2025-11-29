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