const cardEl = document.querySelector('.container .row');
const cardsUrlEndpoint = 'https://lanciweb.github.io/demo/api/pictures/';
const overlayEl = document.querySelector(".overlay");


fetch(cardsUrlEndpoint)
  .then(res => res.json())
  .then(cards => {
    console.log(cards);

    // Funzione per generare le card
    function renderCards(card) {
      let markup = `
        <div class="col-12 col-md-6 col-xl-4 my-4 d-flex justify-content-center">
          <div class="cards p-3">
            <img src="${card.url}" class="card-img-top" alt="" width="100px" height="200px">
            <img src="./assets/img/pin.svg" alt="" width="20px" class="pin">
            <div class="card-body">
              <div class="card-text">
                ${card.date}
              </div>
              <div class="title-img">
                ${card.title}
              </div>
            </div>
          </div>
        </div>`;
      console.log(markup);
      return markup;
    }

    // Aggiungi tutte le card al DOM
    cards.forEach(card => {
      let markup = renderCards(card);
      cardEl.insertAdjacentHTML('beforeend', markup);
    });

    // Dopo che tutte le card sono aggiunte, seleziona tutte le immagini
    const cardPhotos = document.querySelectorAll('.card-img-top');

    // Aggiungi l'event listener su ogni immagine
    cardPhotos.forEach(cardPhoto => {
      cardPhoto.addEventListener('click', function() {
        overlayEl.classList.remove("display-none");
        console.log(cardPhoto);
      });
    });

  })
  .catch(err => console.error("Errore nel fetch:", err));

const buttonEl = document.querySelector(".overlay .closeOverlay")
buttonEl.addEventListener('click', function() {
  overlayEl.classList.add("display-none");
});

 



