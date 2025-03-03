const cardEl = document.querySelector('.container .row');
const cardsUrlEndpoint = 'https://lanciweb.github.io/demo/api/pictures/';
const overlayEl = document.querySelector(".overlay")
const overlayContent = document.querySelector(".overlay .overlay-content");



fetch(cardsUrlEndpoint)
  .then(res => res.json())
  .then(cards => {

    console.log(cards);



    cards.forEach(card =>{
        let markup = renderCards(card)
        cardEl.insertAdjacentHTML('beforeend', markup);  
        const cardPhotos = document.querySelectorAll('.cards .card-img-top')


        cardPhotos.forEach(cardPhoto => {
          cardPhoto.addEventListener('click', function() {
            
            overlayEl.classList.remove("display-none");
      
          
          });
        });   
      })
      

  }).catch(err => console.error(err));

  


  

  function renderCards(cards){
    let markup = `
                 <div class="col-12 col-md-6 col-xl-4 my-4 d-flex justify-content-center">
                    <div class="cards p-3">
                         
                          <img src="${cards.url}" class="card-img-top" alt="" width="100px" height="200px">
                        <img src="./assets/img/pin.svg" alt="" width="20px" class="pin"></img>
                      
                        <div class="card-body">
                          <div class="card-text">
                            ${cards.date}
                          </div>
                          <div class="title-img">
                            ${cards.title}
                          </div>
                        </div>
                      </div>
                </div>`
        console.log(markup);
        return markup           
  }

  

    overlayEl.addEventListener('click', function() {
    overlayEl.classList.add("display-none");
  });

 



