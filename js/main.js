const compliteText = document.querySelector('.compolite-text-wrap');
const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  setTimeout(() => {
    compliteText.style.display = 'flex';
    e.target.reset();
  }, 500);

  setTimeout(() => {
    compliteText.style.display = 'none';
  }, 5000);
}

const mainBackground = document.querySelector('#main-bgd');

const startBgdParallaxAnim = (e) => {
  const bgd = document.querySelector('#main-bgd');
  const speed = bgd.getAttribute('data-speed');
  const { clientX: mouseX, clientY: mouseY } = e;

  const x = (window.innerWidth - (mouseX) * speed) / 100 - 100;
  const y = (window.innerHeight - mouseY * speed) / 100;

  bgd.style.transform = `translateX(${x}px) translateY(${y}px)`;
};

let prevX;
let prevY;

const startProjectorParallaxAnim = (e) => {
  const projectors = document.querySelectorAll('.christmas-ball');

  projectors.forEach((projector) => {
    const speed = projector.getAttribute('data-speed');
    const { clientX: mouseX, clientY: mouseY } = e;

    let x = (window.innerHeight - mouseX * speed) / 100 + (5 * speed);
    let y = (window.innerWidth - mouseY * speed) / 100 + (5 * speed);

    projector.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
};

const startLogoAnim = (e) => {
  const logo = document.querySelector('#main-toy-img');
  const speed = logo.getAttribute('data-speed');
  const { clientX: mouseX, clientY: mouseY } = e;

  const x = (window.innerHeight - e.pageX * speed) / 100 - 50;
  const y = (window.innerWidth - e.pageY * speed) / 100 - 40;

  logo.style.transform = `translateX(${x}px) translateY(${y}px)`;
};

document.addEventListener('mousemove', (e) => {
  startBgdParallaxAnim(e);
  startProjectorParallaxAnim(e);
  startLogoAnim(e);
});
