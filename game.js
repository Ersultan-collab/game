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
    if(game.price == 'free') {
        priceH3.textContent = 'free';
    }else{
        priceH3.textContent = game.price + '₸';
    }
    
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
    if(isAddedToCart(game)){
        heartIcon.setAttribute('name', 'heart')
        heartButton.enabled = false
    }else{
        heartIcon.setAttribute('name', 'heart-outline')
        heartButton.addEventListener('click', () => {
            
            confirm('added to cart') ? addToCart(game) : removeFromCart(game);
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
    let cartItem = cartItems.find(item  => item.id == product.id)
    console.log(cartItem);
    if (cartItem) {
      return;
    }
    cartItems.push({...product, quantity: 1});
    localStorage.setItem("cart", JSON.stringify(cartItems));
    window.location.reload()
  }



//   [
//     {
//         "id": 1,
//         "img": "img/battle.jpg",
//         "name": "Battlefield V",
//         "price": "13 600"
//     },
//     {
//         "id": 2,
//         "img": "img/wp13355414-lies-of-p-4k-wallpapers.png",
//         "name": "Lies of P",
//         "price": "16 500"
//     },
//     {
//         "id": 3,
//         "img": "img/ab5f2c6bad22fae90effb5fd64fa196f.jpeg",
//         "name": "Elden Ring",
//         "price": "17 999"
//     },
//     {
//         "id": 4,
//         "img": "img/9695841.jpg",
//         "name": "Spider man 2",
//         "price": "18 999"
//     },
//     {
//         "id": 5,
//         "img": "img/wp6352566.jpg",
//         "name": "Cyberpunk 2077",
//         "price": "13 108"
//     },
//     {
//         "id": 6,
//         "img": "img/1346544.png",
//         "name": "Fortnite",
//         "price": "free"
//     },
//     {
//         "id": 7,
//         "img": "img/wp2462450.jpg",
//         "name": "PUBG",
//         "price": "free"
//     },
//     {
//         "id": 8,
//         "img": "img/cs2.jpg",
//         "name": "CS 2",
//         "price": "free"
//     },
//     {
//         "id": 9,
//         "img": "img/warframe-video-game-3840x2160-14197.jpeg",
//         "name": "Warframe",
//         "price": "free"
//     },
//     {
//         "id": 10,
//         "img": "img/451589.jpg",
//         "name": "Destiny 2",
//         "price": "free"
//     },
//     {
//         "id": 11,
//         "img": "img/skull&bones.jpg",
//         "name": "Skull and Bones",
//         "price": "20 000"
//     },
//     {
//         "id": 12,
//         "img": "img/783028.jpg",
//         "name": "Dead by daylight",
//         "price": "5 000"
//     },
    // {
    //     "id": 13,
    //     "img": "img/gta-5-in-photoshop-grand-theft-auto-five-wallpaper-preview.jpg",
    //     "name": "GTA V",
    //     "price": "8 100"
    // },
    // {
    //     "id": 14,
    //     "img": "img/nightingale-4k-pt-2560x1600.jpg",
    //     "name": "Nightingale",
    //     "discount": true,
    //     "last_price": "7 600",
    //     "price": "6 840"
    // },
    // {
    //     "id": 15,
    //     "img": "img/motoff702.jpg",
    //     "name": "Alan Wake 2",
    //     "price": "16 750"
    // },
    // {
    //     "id": 16,
    //     "img": "img/1346544.png",
    //     "name": "Fortnite",
    //     "price": "free"
    // },
    // {
    //     "id": 17,
    //     "img": "img/1335863.jpg",
    //     "name": "Rocket League",
    //     "price": "free"
    // },
    // {
    //     "id": 19,
    //     "img": "img/valorant-agent-omen-3840x2160-14510.jpeg",
    //     "name": "Valorant",
    //     "price": "free"
    // },
    // {
    //     "id": 20,
    //     "img": "img/2505746.jpg",
    //     "name": "Genshin Impact",
    //     "price": "free"
    // },
    // {
    //     "id": 21,
    //     "img": "img/wp6448284.jpg",
    //     "name": "The Last of Us",
    //     "price": "23 499"
    // },
    // {
    //     "id": 22,
    //     "img": "img/1143078.jpg",
    //     "name": "Mortal Kombat X",
    //     "price": "6 700"
    // },
    // {
    //     "id": 23,
    //     "img": "img/wp6429396.jpg",
    //     "name": "Assassin's creed: Valhalla",
    //     "price": "3 674"
    // },
    // {
    //     "id": 24,
    //     "img": "img/R.jpg",
    //     "name": "God of War",
    //     "price": "18 999"
    // },
    // {
    //     "id": 25,
    //     "img": "img/hogwarts-legacy-key-art-01-ps5-en-02oct20.webp",
    //     "name": "Hogwarts legacy",
    //     "price": "22 999"
    // }
// ]

let div = document.querySelector('.discount-game-cards');
let url = 'https://65d6c6e3f6967ba8e3be8a85.mockapi.io/product'

fetch(url)
 .then(response => response.json())
 .then(data => {
    for(let i of data){
        let card = createDiscountGameCard(i);
        div.appendChild(card);
    }
 })
 .catch(err => {
    console.log('invalid card');
 })

 let button = document.querySelector('.load-more')
 button.addEventListener('click', () => {
    loadmore()
    button.style.display = 'none';
 })

function loadmore(){
    let url = 'https://65d6c6e3f6967ba8e3be8a85.mockapi.io/ers'
    fetch(url)
        .then(respons => respons.json())
        .then(games => {
             for(let i of games){
                 let card = createDiscountGameCard(i);
                 div.appendChild(card);
             }
        })
        .catch(err => {
             console.log('invalid card');
        });
}
