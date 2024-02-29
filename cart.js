let games_discount = JSON.parse(localStorage.getItem('cart'))

function createCard(i) {
    // Create elements
    var cardDiv = document.createElement("div");
    cardDiv.className = "card";

    var cardImgDiv = document.createElement("div");
    cardImgDiv.className = "card-img";
    cardImgDiv.style.backgroundImage = `url(${i.img})`;

    var cardTextsDiv = document.createElement("div");
    cardTextsDiv.className = "card-texts";

    var cardTextDiv = document.createElement("div");
    cardTextDiv.className = "card-text";

    var titleH1 = document.createElement("h1");
    titleH1.textContent = i.name;

    var priceH3 = document.createElement("h3");
    priceH3.textContent = i.price;

    var removeButton = document.createElement("button");
    removeButton.className = "remove";
    removeButton.textContent = "Remove";

    // Append elements
    cardTextDiv.appendChild(titleH1);
    cardTextDiv.appendChild(priceH3);

    cardTextsDiv.appendChild(cardTextDiv);
    cardTextsDiv.appendChild(removeButton);

    cardDiv.appendChild(cardImgDiv);
    cardDiv.appendChild(cardTextsDiv);

    return cardDiv;
}

let cards = document.querySelector('.cards')
for(let i of games_discount){
    let card = createCard(i);
    cards.appendChild(card);
}