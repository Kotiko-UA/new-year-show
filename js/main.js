const compliteText = document.querySelector('.compolite-text-wrap');
const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  window.setTimeout(() => {
    compliteText.style.display = 'flex';
    e.target.reset();
  }, 1000);
  window.setTimeout(() => {
    compliteText.style.display = 'none';
  }, 5000);
}
