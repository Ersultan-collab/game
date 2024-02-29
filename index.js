// let menu = document.querySelectorAll('.header-li');
// for(let i of menu){
//     i.style.borderBottom = 'none';
//     i.style.transition = 'border-bottom 1s ease-out';
//     i.addEventListener('mouseenter', () => {
//         i.style.borderBottom = '2px solid yellow';
//         i.style.transition = 'border-bottom 1s ease';
//         i.style.marginBottom = '5px';
//     })
//     i.addEventListener('mouseleave', () => {
//         i.style.borderBottom = 'none';
//         i.style.transition = 'border-bottom 1s ease-out';
//     })
// }

// document.addEventListener('DOMContentLoaded', () => {
//     let elements = [
//         {
//             img: 'img/1252748.png',
//             name: 'Red Dead Redemption 2',
//             text: 'Америка, 1899 год.',
//             price: '6 600₸'
//         },
//         {
//             img: 'img/R.jpg',
//             name: 'God of War:\n Ragnarök',
//             text: 'God of war',
//             price: '18 999₸'
//         },
//         {
//             img: 'img/ab5f2c6bad22fae90effb5fd64fa196f.jpeg',
//             name: 'Elden Ring',
//             text: 'A new fantasy action rpg',
//             price: '17 999₸'
//         }
//     ];      

//     let div = document.querySelector('.header-section');
//     div.style.marginLeft = '200px';
//     div.style.transition = 'margin-left 1s ease-out';
//     setTimeout(() => {
//         div.style.marginLeft = '0px';
//     }, 4000)

//     let texts = document.querySelectorAll('.header-section-text');

//     for (let i = 0; i < texts.length; i++) {
//         texts[i].style.opacity = '0';
//         setTimeout(() => {
//             texts[i].style.opacity = '1';
//             texts[i].style.transition = 'opacity 0.5s ease-out';
//         }, 500)
//         setTimeout(() => {
//             texts[i].style.opacity = '0';
//             texts[i].style.transition = 'opacity 0.5s ease-out';
//         }, 4500)
//     }

//     let index = 0;
//     let timer;

//     function render() {
//         div.style.marginLeft = '200px';
//         div.style.transition = 'margin-left 1s ease-out';
//         setTimeout(() => {
//             div.style.marginLeft = '0px';
//         }, 4000)

//         let div_img = document.querySelector('.div-img');
//         div_img.style.backgroundImage = `url(${elements[index].img})`;

//         let background = document.querySelector('.header-section-banner');
//         background.style.backgroundImage = `url(${elements[index].img})`;
//         background.style.transition = 'background-image 1s ease-out';

//         let h1 = document.querySelector('.header-section-text-h1');
//         let p = document.querySelector('.header-section-text-p');
//         let price = document.querySelector('.price');

//         h1.textContent = elements[index].name;
//         p.textContent = elements[index].text;
//         price.textContent = elements[index].price;

//         for (let i = 0; i < texts.length; i++) {
//             texts[i].style.opacity = '0';
//             setTimeout(() => {
//                 texts[i].style.opacity = '1';
//                 texts[i].style.transition = 'opacity 0.5s ease-out';
//             }, 500)
//             setTimeout(() => {
//                 texts[i].style.opacity = '0';
//                 texts[i].style.transition = 'opacity 0.5s ease-out';
//             }, 4500)
//         }

//         index++;
//         if (index == elements.length) {
//             index = 0;
//         }
//         console.log(index);
//     }

//     timer = setInterval(render, 5000);
    
// });


// categories
let categories_games = [
    {
        id: 1,
        img: 'img/4265773.jpg',
        name:'Open World Games',
    },
    {
        id: 2,
        img: 'img/3490521.jpg',
        name:'Fighting Games',
    },
    {
        id: 3,
        img: 'img/3244581.jpg',
        name:'RPG Games',
    },
    {
        id: 4,
        img: 'img/5208016.jpg',
        name:'Action Games',
    }
]

function createCategoriesCard(categoryName) {
    const div = document.createElement('div');
    div.classList.add('categories-card');
    div.addEventListener('mouseenter', () => {
        imgDiv.style.transform = 'scale(1.05)';
        imgDiv.style.transition = 'transform 0.5s ease-out';
    })
    div.addEventListener('mouseleave', () => {
        imgDiv.style.transform = 'none';
        imgDiv.style.transition = 'transform 0.5s ease-out';
    })

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('categories-card-img');
    imgDiv.style.backgroundImage = `url(${categoryName.img})`;

    const h1 = document.createElement('h1');
    h1.textContent = categoryName.name;

    div.appendChild(imgDiv);
    div.appendChild(h1);

    return div;
}

let games_games = document.querySelector('.categories-cards');
for(let i of categories_games) {
    let card = createCategoriesCard(i);
    games_games.appendChild(card);
}




// games_discount and games_free
let games_discount = [
    {
        id: 1,
        img: 'img/battle.jpg',
        name:'Battlefield V',
        price: '13 600₸'
    },
    {
        id: 2,
        img: 'img/wp13355414-lies-of-p-4k-wallpapers.png',
        name:'Lies of P',
        price: '16 500₸'
    },
    {
        id: 3,
        img: 'img/ab5f2c6bad22fae90effb5fd64fa196f.jpeg',
        name: 'Elden Ring',
        price: '17 999₸'
    },
    {
        id: 4,
        img: 'img/9695841.jpg',
        name:'Spider man 2',
        price: '18 999₸'
    },
    {
        id: 5,
        img: 'img/wp6352566.jpg',
        name:'Cyberpunk 2077',
        price: '13 108₸'
    },
]

let games_free = [
    {
        id: 6,
        img: 'img/1346544.png',
        name:'Fortnite',
        price: 'free'
    },
    {
        id: 7,
        img: 'img/wp2462450.jpg',
        name:'PUBG',
        price: 'free'
    },
    {
        id: 8,
        img: 'img/cs2.jpg',
        name:'CS 2',
        price: 'free'
    },
    {
        id: 9,
        img: 'img/warframe-video-game-3840x2160-14197.jpeg',
        name:'Warframe',
        price: 'free'
    },
    {
        id: 10,
        img: 'img/451589.jpg',
        name:'Destiny 2',
        price: 'free'
    },
]

let local = JSON.parse(localStorage.getItem('cart'));

function createDiscountGameCard(game) {
    // Create elements
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('discount-game-card');

    var imgDiv = document.createElement('div');
    imgDiv.classList.add('discount-game-img');
    imgDiv.style.backgroundImage = `url(${game.img})`;
    imgDiv.style.transform = 'scale(1.0)';

    var textDiv = document.createElement('div');
    textDiv.classList.add('discount-game-card-text');

    var titleH1 = document.createElement('h1');
    titleH1.textContent = game.name;
    titleH1.style.color = 'white';
    titleH1.style.width = '100%';
    titleH1.style.position = 'absolute';
    titleH1.style.bottom = '0';

    var priceH3 = document.createElement('h3');
    priceH3.textContent = game.price;
    priceH3.style.color = 'white';
    priceH3.style.opacity = 0.
    

    var buttonDiv = document.createElement('div');
    buttonDiv.classList.add('text-button');


    var aboutButton = document.createElement('button');
    aboutButton.classList.add('text-button-one');
    aboutButton.textContent = 'About the game';
    aboutButton.style.opacity = '0';
    aboutButton.style.cursor = 'pointer';
    aboutButton.addEventListener('click', () => {
        window.location.href = `games.html?game=${game.id}`;
    })

    var heartButton = document.createElement('button');
    heartButton.classList.add('text-button-two');
    heartButton.style.opacity = '0';
    

    
    var heartIcon = document.createElement('ion-icon');
    heartIcon.setAttribute('name', 'heart-outline');
    heartIcon.classList.add('button-icon');
    if(isAddedToCart){
        heartIcon.setAttribute('name', 'heart');
        heartButton.style.color ='red';
        heartButton.enabled = false  
    }else{
        heartIcon.setAttribute('name', 'heart-outline');
        heartButton.addEventListener('click', () => {
            addToCart(game);
        })
    }
    cardDiv.addEventListener('mouseenter', () => {
        titleH1.style.bottom = '70px';
        titleH1.style.transition = 'bottom 0.5s ease-out';
        priceH3.style.opacity = '1';
        priceH3.style.transition = 'opacity 1s ease-out';
        aboutButton.style.opacity = '1';
        aboutButton.style.transition = 'opacity 1s ease-out';
        heartButton.style.opacity = '1';
        heartButton.style.transition = 'opacity 1s ease-out';
        imgDiv.style.transform ='scale(1.07)';
        imgDiv.style.transition = 'transform 0.5s ease-out';
    })
    cardDiv.addEventListener('mouseleave', () => {
        titleH1.style.bottom = '0';
        titleH1.style.transition = 'bottom 0.7s ease-out';
        priceH3.style.opacity = '0';
        priceH3.style.transition = 'opacity 0.5s ease-out';
        aboutButton.style.opacity = '0';
        aboutButton.style.transition = 'opacity 0.5s ease-out';
        heartButton.style.opacity = '0';
        heartButton.style.transition = 'opacity 0.5s ease-out';
        imgDiv.style.transform ='scale(1.0)';
        imgDiv.style.transition = 'transform 0.5s ease-out';
    });

    // Construct the structure
    textDiv.appendChild(titleH1);
    textDiv.appendChild(priceH3);

    heartButton.appendChild(heartIcon);
    buttonDiv.appendChild(aboutButton);
    buttonDiv.appendChild(heartButton);
    textDiv.appendChild(buttonDiv);

    cardDiv.appendChild(imgDiv);
    cardDiv.appendChild(textDiv);

    // Return the constructed card
    return cardDiv;
}

function isAddedToCart(product) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart.find((p) => p.id == product.id) != null;
}

function addToCart(product) {
    const cart = localStorage.getItem("cart");
    const cartItems = JSON.parse(cart) || [];
    if (cartItems.find(item  => item.id == product.id)) {
      return;
    }
    cartItems.push({...product, quantity: 1});
    localStorage.setItem("cart", JSON.stringify(cartItems));
    window.location.reload()
  }

let div = document.querySelector('.discount-game-cards');
for(let i of games_discount){
    let card = createDiscountGameCard(i);
    div.appendChild(card);
}

let div_free = document.querySelector('.free-games-cards');
for(let j of games_free){
    let card = createDiscountGameCard(j);
    div_free.appendChild(card);
}
// let arr = []
// localStorage.setItem('cart', JSON.stringify(arr))

// games_featured
let cards = [
    {
        id: 1,
        img: 'img/624cd2bcb0ab3c4a44e73588dc7f210b.jpeg',
        name: 'Call of Duty'
    },
    {
        id: 2,
        img: 'img/532397-assassins-creed-2-hd-wallpaper-background-download.jpg',
        name: 'Assassins creed 2'
    },
    {
        id: 3,
        img: 'img/hogwarts-legacy-key-art-01-ps5-en-02oct20.webp',
        name: 'Hogwarts legacy'
    },
    {
        id: 4,
        img: 'img/14119.jpg',
        name: 'The witcher 3'
    }
]



function createCardDiv(i) {
    // Create elements
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card-div');

    const img = document.createElement('img');
    img.src = i.img;
    img.alt = '';
    img.style.width = '50%';
    img.style.height = '100%';
    img.classList.add('featured-game-img');

    const p = document.createElement('p');
    p.textContent = i.name;

    // Append elements
    cardDiv.appendChild(img);
    cardDiv.appendChild(p);

    cardDiv.addEventListener('click', () => {
        let index = cards[i.id - 1]; 
        let img = document.querySelector('.featured-game-card-img');
        img.style.opacity = 0;
        img.style.transition = 'opacity 0.5s ease';

    
        let text = document.querySelector('.featured-game-card-text h1');
        text.style.opacity = 0;
        text.style.transition = 'opacity 0.5s ease';
    
        img.addEventListener('transitionend', function() {
            img.style.backgroundImage = `url(${index.img})`;
            text.textContent = index.name;
            img.style.opacity = 1;
            text.style.opacity = 1;
        }, { once: true }); // Указываем { once: true }, чтобы обработчик сработал только один раз
    });
    

    return cardDiv;
}

let div2 = document.querySelector('.featured-game-card-divs');

for(let i of cards){
    let card = createCardDiv(i);
    div2.appendChild(card);
}


let img = document.querySelector('.Featured-game-cards-cardd');

let div_img = document.querySelector('.featured-game-card-img');
img.addEventListener('mouseenter', () => {
    div_img.style.transform ='scale(1.05)';
    div_img.style.transition = 'transform 0.5s ease-out';
})

img.addEventListener('mouseleave', () => {
    div_img.style.transform ='scale(1.0)';
    div_img.style.transition = 'transform 0.5s ease-out';
})




// table games
let new_releases = [
    {
        id: 11,
        img: 'img/skull&bones.jpg',
        name: 'Skull and Bones',
        price:'20 000₸'
    },
    {
        id: 12,
        img: 'img/783028.jpg',
        name:'Dead by daylight',
        price: '5 000₸'
    },
    {
        id: 13,
        img: 'img/gta-5-in-photoshop-grand-theft-auto-five-wallpaper-preview.jpg',
        name:'GTA V',
        price: '8 100₸'
    },
    {
        id: 14,
        img: 'img/nightingale-4k-pt-2560x1600.jpg',
        name:'Nightingale',
        discount: true,
        last_price: '7 600₸',
        price: '6 840₸'
    },
    {
        id: 15,
        img: 'img/motoff702.jpg',
        name: 'Alan Wake 2',
        price: '16 750₸'
    },
]

let mast_played = [
    {
        id: 16,
        img: 'img/1346544.png',
        name:'Fortnite',
        price: 'free'
    },
    {
        id: 17,
        img: 'img/1335863.jpg',
        name:'Rocket League',
        price: 'free'
    },
    {
        id: 18,
        img: 'img/gta-5-in-photoshop-grand-theft-auto-five-wallpaper-preview.jpg',
        name:'GTA V',
        price: '8 100₸'
    },
    {
        id: 19,
        img: 'img/valorant-agent-omen-3840x2160-14510.jpeg',
        name:'Valorant',
        price: 'free'
    },
    {
        id: 20,
        img: 'img/2505746.jpg',
        name:'Genshin Impact',
        price: 'free'
    },
]

let new_releas = [
    {
        id: 21,
        img: 'img/wp6448284.jpg',
        name:'The Last of Us',
        price: '23 499₸'
    },
    {
        id: 22,
        img: 'img/1143078.jpg',
        name:'Mortal Kombat X',
        price: '6 700₸'
    },
    {
        id: 23,
        img: 'img/wp6429396.jpg',
        name:"Assassin's creed: Valhalla",
        price: '3 674₸'
    },
    {
        id: 24,
        img: 'img/R.jpg',
        name: 'God of War',
        price: '18 999₸'
    },
    {
        id: 25,
        img: 'img/hogwarts-legacy-key-art-01-ps5-en-02oct20.webp',
        name: 'Hogwarts legacy',
        price:'22 999₸'
    },
]
function createTableGamesCard(i) {
    // Create elements
    var cardDiv = document.createElement('div');
    cardDiv.className = 'table-games-card';
    cardDiv.addEventListener('click', () => {
        window.location.href =`games.html?game=${i.id}`;
    })

    var button = document.createElement('button');
    button.className = 'text-button-two';
    button.style.position = 'absolute';
    button.style.right = '5px';
    button.style.opacity = '0';
    var icon = document.createElement('ion-icon');
    icon.className = 'button-icon';
    icon.setAttribute('name', 'heart-outline');

   

    cardDiv.addEventListener('mouseenter', () => {
        cardDiv.style.backgroundColor = 'rgba(128, 128, 128, 0.449)'
        cardDiv.style.transition = 'background-color 0.5s ease-out';
        button.style.opacity = '1';
        button.style.transition = 'opacity 0.5s ease';
    })

    cardDiv.addEventListener('mouseleave', () => {
        cardDiv.style.backgroundColor = 'transparent';
        cardDiv.style.transition = 'background-color 0.5s ease-out';
        button.style.opacity = '0';
        button.style.transition = 'opacity 0.5s ease';
    })

    var imgDiv = document.createElement('div');
    imgDiv.className = 'table-games-card-img';
    imgDiv.style.backgroundImage = `url(${i.img})`;
    imgDiv.style.position = 'relative';
    let div_text = document.createElement('div');

    var titleH1 = document.createElement('h1');
    titleH1.style.fontSize = '17px';
    titleH1.style.color = 'white';
    titleH1.textContent = i.name;

    var priceH2 = document.createElement('h2');
    priceH2.style.fontSize = '17px';
    priceH2.style.color = 'white';

    if(i.discount){
        let div_h2 = document.createElement('div');
        let last_h1= document.createElement("h2");
        div_h2.style.display = 'flex';
        div_h2.style.alignItems = 'center';
        div_h2.style.gap = '10px';
        last_h1.style.fontSize = '17px';
        last_h1.style.textDecoration = 'line-through';
        last_h1.style.color = 'gray';
        last_h1.textContent = i.last_price;
        priceH2.textContent = i.price;
        div_h2.appendChild(last_h1);
        div_h2.appendChild(priceH2);
        div_text.appendChild(titleH1);
        div_text.appendChild(div_h2);
    }else{
        priceH2.textContent = i.price;
        div_text.appendChild(titleH1);
        div_text.appendChild(priceH2);
    }

    // Append elements
    button.appendChild(icon);
    imgDiv.appendChild(button);
    cardDiv.appendChild(imgDiv);
    cardDiv.appendChild(div_text);
    
   

    return cardDiv;
}

let div5 = document.querySelector('.table-games-cards');

for(let i of new_releas){
    let card = createTableGamesCard(i);
    div5.appendChild(card);
}

let div3 = document.querySelector('.top_sellers_games');

for(let i of new_releases){
    let card = createTableGamesCard(i);
    div3.appendChild(card);
}

let div4 = document.querySelector('.most-played-games')

for(let i of mast_played){
    let card = createTableGamesCard(i);
    div4.appendChild(card);
}
