let carrosel = document.querySelector(".carousel-container");
let cards = document.querySelectorAll(".favorite-card");
let buttonprevious = document.querySelector("#button-previous");
let buttonNext = document.querySelector("#button-next");

let currentIndex = 0; // index atual

let cardsWidth = cards[0].offsetWidth; // tamanho do card individua
let gapCarrosel = parseInt(getComputedStyle(carrosel).gap); // pega o tamanho do gap do elemento pai
let totalCardStep = cardsWidth + gapCarrosel; // soma tamanho toal card  com o gap do elemento pai
let carroselWidth = carrosel.offsetWidth; // pega o tamanho do elemento pai
let cardsVisiveis = Math.floor(carroselWidth / totalCardStep); // divide tamanho do elemento pai pela soma do tamanho do card e o gap do elemento pai
let maxIndex = cards.length - cardsVisiveis; // numero cards 7 - cards visiveis 4 = 3 0123, 1234 ,2345, 3456
let maxDeslocamento = -(cards.length * totalCardStep - carroselWidth);

function updateCarouselPosition() {
  // funcao para dar update carrosel fazer o deslocamento
  let deslocamento = -currentIndex * totalCardStep;
  if (deslocamento < maxDeslocamento) {
    deslocamento = maxDeslocamento;
    currentIndex = cards.length - cardsVisiveis;
  }

  if (deslocamento > 0) {
    deslocamento = 0;
    currentIndex = 0;
  }

  carrosel.style.transform = `translateX(${deslocamento}px)`;
}

buttonNext.addEventListener("click", () => {
  // adicionando o botao de evento ao clicar para fazer a transicao
  currentIndex++;
  if (currentIndex >= maxIndex) {
    currentIndex = 0;
  }
  updateCarouselPosition();
});

buttonprevious.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = maxIndex;
  }
  updateCarouselPosition();
});
