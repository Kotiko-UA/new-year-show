const compliteText = document.querySelector('.compolite-text-wrap');
const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  window.setTimeout(() => {
    compliteText.style.display = 'flex';
  }, 1000);
}
