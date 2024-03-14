// general
const accordSection = document.querySelectorAll(`.accordion-section`);
let i;

accordSection.forEach((i) => {
  i.addEventListener(`click`, () => {
    i.classList.toggle(`open`);
  });
});
