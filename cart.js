let games_discount = JSON.parse(localStorage.getItem('cart'))

function createCard(i) {
    // Create elements
    var cardDiv = document.createElement("div");
    cardDiv.className = "card";

    cardDiv.addEventListener('mouseenter', () => {
      cardImg.style.transform = 'scale(1.05)'
      cardImg.style.transition = 'transform 0.5s ease-out'
    })
    cardDiv.addEventListener('mouseleave', () => {
      cardImg.style.transform = 'scale(1.0)'
      cardImg.style.transition = 'transform 0.5s ease-out'
    })

    var cardImgDiv = document.createElement("div");
    cardImgDiv.className = "card-img";

    let cardImg = document.createElement("div");
    cardImg.className = "cards-img"
    cardImg.style.backgroundImage = `url(${i.img})`;

    var cardTextsDiv = document.createElement("div");
    cardTextsDiv.className = "card-texts";

    var cardTextDiv = document.createElement("div");
    cardTextDiv.className = "card-text";

    var titleH1 = document.createElement("h1");
    titleH1.textContent = i.name;
    titleH1.style.cursor = "pointer";
    titleH1.addEventListener('mouseenter', () => {
      titleH1.style.color = 'yellow';
      titleH1.style.transition = 'color 0.5s ease-out'
    })
    titleH1.addEventListener('mouseleave', () => {
      titleH1.style.color = 'white';
      titleH1.style.transition = 'color 0.5s ease-out'
    })
    titleH1.addEventListener('click', () => {
      window.location.href = `games.html?game=${i.id}`;
    })

    var priceH3 = document.createElement("h3");
    if(i.price == 'free'){
      priceH3.textContent = 'free'
    }else{
      priceH3.textContent = i.price + '₸';
    }
    

    var removeButton = document.createElement("button");
    removeButton.className = "remove";
    removeButton.textContent = "Remove";
    removeButton.addEventListener('click', () => {
        removeProduct(i);
    })

    // Append elements
    cardTextDiv.appendChild(titleH1);
    cardTextDiv.appendChild(priceH3);

    cardTextsDiv.appendChild(cardTextDiv);
    cardTextsDiv.appendChild(removeButton);

    cardImgDiv.appendChild(cardImg)

    cardDiv.appendChild(cardImgDiv);
    cardDiv.appendChild(cardTextsDiv);

    return cardDiv;
}

let cards = document.querySelector('.cards')
for(let i of games_discount){
    let card = createCard(i);
    cards.appendChild(card);
}

function removeProduct(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((p) => p.id != product.id);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
  }

let ogj = JSON.parse(localStorage.getItem('cart')) || [];
let price = document.querySelector('.price p');
let total_price = document.querySelector('.total-price p');
let sum = 0
for(let i of ogj){
    if(i.price == 'free'){
        price.textContent = 'free';
    }else{
        let p = i.price.split(' ')
        sum += Number(p.join(''))
    }

}
price.textContent = getPrice(sum) + '₸';
total_price.textContent = getPrice(sum) + '₸';

function getPrice(price) {
    let priceStr = String(price);
    if (priceStr.length > 4) {
      const priceSlices = [];
      for (let i = priceStr.length - 3; i >= 0; i -= 3) {
        priceSlices.unshift(priceStr.slice(i > 0 ? i : 0, i + 3));
        priceStr = priceStr.slice(0, i);
      }
      priceSlices.unshift(priceStr);
      priceStr = priceSlices.join(" ");
    }
    return priceStr;
  }