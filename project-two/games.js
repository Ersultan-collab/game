let url = window.location.href

let id = url.split('game=')[1]
console.log(id)

let games_discount = [
    {
        id: 1,
        img: 'img/battle.jpg',
        name:'Battlefield V',
        video: 'img/Battlefield 5  - Official Single Player (War Stories) Trailer.mp4',
        logo: 'https://th.bing.com/th/id/OIP.CAogEPkqO-2Y7tdYl01SyAAAAA?rs=1&pid=ImgDetMain',
        O_game: 'This is the ultimate Battlefield V experience. Enter mankind’s greatest conflict with the complete arsenal of weapons, vehicles, and gadgets plus the best customization content of Year 1 and 2.',
        about_game: ['Firestorm – Battle Royale, reimagined for Battlefield','World War 2 as You’ve Never Seen It Before','64-Player Multiplayer in the Chaos of All-Out War','The Most Immersive Battlefield Yet', 'Play Untold War Stories', 'Tides of War'],
        games: [
            'Dominate on the largest Battlefield map ever with epic weapons and combat vehicles as a deadly ring of fire closes in. Scavenge, fight, and survive to become the last squad standing.',
            'Take the fight to unexpected but crucial moments of the war, as Battlefield goes back to where it all began.',
            'Lead your Company in all-out multiplayer with new experiences like the massive Grand Operations mode. Take on classic modes like Conquest or squad up with friends in the cooperative Combined Arms.',
            'Maneuver through the battlefield using a new soldier move set, fortifications, and mobile tools of destruction.',
            'Witness human drama set against global combat in the single player War Stories. Ski down Norwegian mountains as you battle for control of nuclear weapon supply lines, join the frontline with the French colonial troops, or go behind enemy lines in North Africa with a band of misfits sent to create mayhem.',
            'Embark on a journey where new content drops continuously transport you and your Company to a huge variety of key WW2 locations, where new battlefields and gear await.'
        ],
        release_date: '20/11/2018',
        price: '13 600₸'
    },
    {
        id: 2,
        img: 'img/wp13355414-lies-of-p-4k-wallpapers.png',
        O_game: 'Lies of P is an exciting soulslike game in which the familiar plot of the fairy tale "Pinocchio" unfolds in the gloomy but elegant scenery of the Belle Epoque.',
        about_game: [' A DARK, ELEGANT AND CRUEL WORLD',
            'FIGHT WITH RECYCLED TOOLS',
            'WHAT IS A LIE?',
            'A REWORKING OF THE CLASSIC PLOT', 
        ],
        games: [
            'Discover the secrets of Krath, whose atmosphere will remind you of a Wonderful Era. This city once flourished thanks to puppets, but now its streets are flooded with blood because of them.',
            'Develop a unique fighting style to fight fierce opponents and overcome obstacles. Combine different types of weapons, use the Legion arm and activate new abilities.',
            'Sometimes you have to choose between lying to comfort the grieving and desperate, or telling them the truth.',
            'The Pinocchio fairy tale, beloved by many, has been reworked into a dark, sinister plot, during which players will discover secrets and find symbols hidden in the world of Lies of P.',
        ],
        video: 'img/Lies of P - Official Launch Trailer.mp4',
        logo: 'https://www.gameinformer.com/sites/default/files/styles/product_box_art/public/2021/05/20/691111a0/liesofp.jpg',
        name:'Lies of P',
        release_date: '19/09/2023',
        price: '16 500₸'
    },
    {
        id: 3,
        img: 'img/ab5f2c6bad22fae90effb5fd64fa196f.jpeg',
        video:'img/ELDEN RING - Official Gameplay Reveal.mp4',
        O_game: 'A NEW FANTASY ACTION ROLE-PLAYING MOVIE. Arise, extinguished soul! The Interstellar is waiting for its master. May grace lead you to the Elden Ring.',
        logo:'img/elden-ring-logo-uhdpaper.com-4K-.jpg',
        about_game: [
            'A huge exciting world',
            'Create your own character',
            'An epic drama that grew out of a myth',
            'A unique online mode that brings you closer to other players', 
        ],
        games: [
            "A huge world with open fields, many situations and giant dungeons where complex three-dimensional structures are combined together. Travel, overcome deadly dangers and enjoy success.",
            'You can not only change the appearance of the character, but also combine weapons, armor and items. Develop the character to your liking. Build up your muscles or comprehend the mysteries of magic.',
            "A multi-layered story, broken into fragments. An epic drama in which the thoughts of the characters intersect in the Intermarriage.",
            "In addition to the multiplayer mode, in which you connect directly to other players and travel together, there is an asynchronous network mode that allows you to feel the presence of other players.",
        ],
        name: 'Elden Ring',
        price: '17 999₸',
        release_date:'25/02/2022'
    },
    {
        id: 4,
        img: 'img/9695841.jpg',
        logo: 'https://images.hdqwalls.com/wallpapers/marvels-spider-man-2-logo-8k-t8.jpg',
        video: "img/Marvel's Spider-Man 2 - Launch Trailer I PS5 Games.mp4",
        O_game: 'In the original and exciting MARVEL Spider-Man story. An updated version of "the worlds of Peter Parker and Spider-Man will come together. Play as an experienced Peter Parker, who fights major crime and legendary villains in the New York of the Marvel world.',
        about_game: [
            'Be cool',
            'Feel like a Spider-Man',
            'Worlds collided',
            'New York of the Marvel World is your playground', 
        ],
        games: [
            "The worlds of Peter Parker and Spider-Man merge together when another danger looms over the New York City of the Marvel world in the face of legendary Marvel villains. To save the city and those he loves, Spider-Man must become even better.",
            'Peter Parker is an experienced Spider–Man who has been fighting criminals for more than eight years. Feel the full power of it during unpredictable battles, crazy acrobatic stunts, flying around the city on a spider web and interacting with the environment.',
            "In this original and exciting story, the worlds of Peter Parker and Spider-Man will come together. A new Spider-Man universe awaits you, where you will see the familiar characters surrounding Peter and Spider-Man from a completely new perspective.",
            "The Big Apple comes to life in MARVEL's Spider-Man. An updated version.' Fly freely on the web through busy neighborhoods and enjoy the magnificent views of the Manhattan attractions of the Marvel world. Use the environment to defeat the villains during epic battles worthy of the best movie blockbuster.",
            'Continue your adventures with the addition of "The City that Never Sleeps" After the events of the main plot of the game "MARVEL Spider-Man. An updated version of "Continue Peter Parker,s adventure in the MARVEL Spider-Man: The City That Never Sleeps" supplement, which includes three story chapters with additional tasks and challenges.',
        ],
        name:'Spider man 2',
        release_date: '20/10/2023',
        price: '18 999₸'
    },
    {
        id: 5,
        img: 'img/wp6352566.jpg',
        video: 'img/Cyberpunk 2077 — Official E3 2018 Trailer.mp4',
        logo: 'https://4.bp.blogspot.com/-S8l8OGlJb5w/XP2Wvc_yG_I/AAAAAAAADzc/YrvEbopdXF0nS73IStWN1eDFJyGxAiddgCKgBGAs/w2560-h1440-p-k-no-nu/cyberpunk-2077-logo-uhdpaper.com-4K-91.jpg',
        O_game: 'Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.',
        about_game: [
            'IMMERSE YOURSELF WITH UPDATE 2.1',
            'CREATE YOUR OWN CYBERPUNK',
            'EXPLORE THE CITY OF THE FUTURE',
            'BUILD YOUR LEGEND', 
            'CLAIM EXCLUSIVE ITEMS'
        ],
        games: [
            "Night City feels more alive than ever with the free Update 2.1! Take a ride on the fully functional NCART metro system, listen to music as you explore the city with the Radioport, hang out with your partner in V’s apartment, compete in replayable races, ride new vehicles, enjoy improved bike combat and handling, discover hidden secrets and much, much more!",
            'Become a cyberpunk, an urban mercenary equipped with cybernetic enhancements and build your legend on the streets of Night City.',
            "Night City is packed to the brim with things to do, places to see, and people to meet. And it’s up to you where to go, when to go, and how to get there.",
            "Go on daring adventures and build relationships with unforgettable characters whose fates are shaped by the choices you make.",
            'Claim in-game swag & digital goodies inspired by CD PROJEKT RED games as part of the My Rewards program.',
        ],
        name:'Cyberpunk 2077',
        release_date: '10/12/2020',
        price: '13 108₸'
    },
    {
        id: 6,
        img: 'img/1346544.png',
        video: 'img/Fortnite Battle Royale Chapter 5 Launch Trailer.mp4',
        logo: 'https://th.bing.com/th/id/R.154b502d016599ad9854316e9400fddb?rik=YUnPs7tnJRspZQ&pid=ImgRaw&r=0',
        O_game: "Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.",
        about_game: [
            '',
            '',
            'Chapter 5 Season 1: Underground!',
            'Play Your Way!',
            'Take the offensive in Fortnite Zero Build No Build Battle Royale',
            'Battle. Build. Create.', 
        ],
        games: [
            'Explore large, destructible environments where no two games are ever the same. Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale, whether you choose to build up in Fortnite Battle Royale or go no-builds in Fortnite Zero Build.',
            'Discover even more ways to play across thousands of creator-made game genres: adventure, roleplay, survival and more. Or, band together with up to three friends to fend off hordes of monsters in Save the World.',
            "Chapter 5 of Fortnite Battle Royale brings a beautiful new Island, but not all is what it seems. “The Society” is pulling the strings in secret, and they’ve taken Peely in their spite. Join “The Underground” and take down The Society’s bosses — including its most notorious boss Valeria. To help you out, take the Island’s train, modify your weapons, and use a “Ballistic Shield” while shooting a pistol. Join the fight in Chapter 5 Season 1: Underground!",
            'Sprint, climb, and smash your way to a Victory Royale whether you choose to build up in Fortnite Battle Royale or go no-builds in Fortnite Zero Build.',
            "Introducing a new, tactical take on Fortnite Battle Royale with the launch of Fortnite Zero Build. Show off your sharp shooting, sharp thinking, and sharp sense of space as you take on the Battle full-tilt in Fortnite Zero Build. Without building, all players have the recharging Overshield as their first line of defense in Zero Build. Slide downhill to avoid enemy fire or use mantling to get the high ground on opponents. Don’t forget to sprint between cover on your way to a Victory Royale!",
            "Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Find it all in Fortnite!",
        ],
        name:'Fortnite',
        release_date: '21/07/2017',
        price: 'free'
    },
    {
        id: 7,
        img: 'img/wp2462450.jpg',
        video:'img/PUBG MOBILE Global Launch Trailer.mp4',
        O_game: 'Play PUBG: BATTLEGROUNDS for free! Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds.',
        logo: 'https://2.bp.blogspot.com/-72-4al8H_Dg/XDsuo41JwNI/AAAAAAAAAmQ/BgXupBka2Og2cTGt3MQdKVnb6MgAFBH3gCK4BGAYYCw/s1600/PUBG%2B%2528PlayerUnknowns%2BBattlegrounds%2529%2BLogo%255Bsiklogo.blogspot.com%255D.png',
        about_game: [
            'LAND, LOOT, SURVIVE.',
        ],
        games: [
            'Squad up and join the Battlegrounds for the original Battle Royale experience that only PUBG: BATTLEGROUNDS can offer.',
            'PUBG: BATTLEGROUNDS is a free-to-play game, supporting limited cross-platform play on featured platforms. Optional in-game purchases available. Please visit battlegrounds.pubg.com/ for more information.',
        ],
        name:'PUBG',
        release_date: '20/12/2017',
        price: 'free'
    },
    {
        id: 8,
        img: 'img/cs2.jpg',
        video: 'img/Counter-Strike 2_ Responsive Smokes Trailer.mp4',
        logo: 'https://wallpapercave.com/wp/wp7547694.jpg',
        O_game: "For more than two decades, Counter-Strike has been an example of a first-class competitive game, the path of development of which is determined by millions of players from all over the world. Now it's time for a new stage — Counter-Strike 2.",
        about_game: [
            '',
        ],
        games: [
            "For more than two decades, Counter-Strike has been an example of a first-class competitive game, the path of development of which is determined by millions of players from all over the world. Now it's time for a new stage — Counter-Strike 2.",
            'Counter-Strike 2 is a free upgrade for CS:GO, which marks the largest technological leap in the history of the series. It is developed on the Source 2 engine and modernizes the game thanks to realistic and physically correct rendering, networking with the latest technology and improved tools for the community workshop.',
            'In addition to the classic goal-based gameplay introduced in 1999, Counter-Strike 2 includes:'
        ],
        table: [
            'New CS ratings and updated premier mode;',
            'global and regional leaderboards;',
            'improved and recreated maps from scratch;',
            'a fundamentally new dynamic smoke from grenades;',
            'A ticker-independent gameplay;',
            'Reimagined visuals and sounds;',
            'all inventory items from CS:GO.'
        ],
        ul: true,
        name:'CS 2',
        release_date: '27/09/2023',
        price: 'free'
    },
    {
        id: 9,
        img: 'img/warframe-video-game-3840x2160-14197.jpeg',
        video: 'img/Warframe _ Whispers in the Walls Official Gameplay Trailer – Available Now On All Platforms.mp4',
        logo: 'https://logodix.com/logo/2160007.png',
        O_game: "Awaken as an unstoppable warrior and battle alongside your friends in this story-driven free-to-play online action game.",
        about_game: [
            'WARFRAME',
            'Become a Powerful Warrior',
            'Battle Alongside Friends',
            'Explore a Massive System', 
            'Discover an Epic Story',
            'Master Your Arsenal',
            'Customize Endlessly'
        ],
        games: [
            "Confront warring factions throughout a sprawling interplanetary system as you follow the guidance of the mysterious Lotus and level up your Warframe, build an Arsenal of destructive firepower, and realize your true potential across massive open worlds in this thrilling, genre-defining third-person combat experience.",
            'Enter your Warframe: a bio-metal suit of untold power. Unleash its Abilities and wield a vast array of devastating weaponry to effortlessly annihilate hordes of enemies on sight. And when the slaughter is over, you can earn or instantly unlock 40+ different Warframes - each with a unique suite of powers - to re-experience the mayhem any way you want.',
            "Form a Squad with your friends and earn valuable bonus Rewards when you complete Missions together via highly collaborative, co-op gameplay. Utilize your Warframe’s Abilities to heal allies, redirect enemy fire, and achieve your objectives. Stuck on a particular challenge? In-game matchmaking makes it easy to connect with friendly Tenno whenever you need an extra hand.",
            "Deftly maneuver through ground-based Missions with your Warframe’s mesmerizing parkour skills, or take to the stars and engage in massive ship-to-ship battles in your very own customizable spacecraft. Lose yourself within mysterious open-world landscapes and discover a system teeming with fascinating lifeforms - both friendly and hostile.",
            'Marvel at the sweeping history of the Origin System as you experience Warframe’s massive cinematic narrative spanning 5 separate expansions and 30+ story-based Quests. Discover the power within and experience your first taste of invincibility with one of three original Warframes before you begin your journey, develop your skills and seek out the truth behind your awakening.',
            'Your starter Weapons are just the beginning. Craft hundreds of destructive armaments, plus vehicles, Companions and more. Level them up and experiment until you find the right combination of gear that suits your unique playstyle. Fashion your weaponry for a fearsome look to compliment your custom-designed loadout.',
            'Entering the Origin System means joining legions of friendly Tenno, each with their own personalized Warframes, Weapons and gear. With a staggering number of Customization options available to enhance your Loadout, designing the perfect look for your Warframe makes for an endlessly rewarding challenge for you and your Squad.'
        ],
        name:'Warframe',
        release_date: '25/03/2013',
        price: 'free'
    },
    {
        id: 10,
        img: 'img/451589.jpg',
        video: 'img/Destiny 2_ Финальная форма _ Трейлер-анонс [RU].mp4',
        logo: 'https://th.bing.com/th/id/R.127387c3d4c099bf7ffe9fab0f3bd6fe?rik=1LZr2jk0CSlENg&pid=ImgRaw&r=0',
        O_game: "Destiny 2 is an action MMO with a single evolving world that you and your friends can join anytime, anywhere, absolutely free.",
        about_game: [
            'Season of the Wish',
            '',
            'An Immersive Story',
            'Guardian Classes', 
            'Titan',
            'Hunter',
            'Cooperative and Competitive Multiplayer',
            'Cooperative Multiplayer',
            'Competitive Multiplayer',
            'Exotic Weapons and Armor'
        ],
        games: [
            "The last hope to follow the Witness into the Traveler lies in the Dreaming City. Adventure through Riven's Lair, clear enemies, unlock new wings, and uncover new treasures. Earn an Exotic weapon that puts dragon fire in the palm of your hand. Embark on a secret Exotic mission written in the stars. Score limited-edition cosmetics at the Eververse store inspired by Geralt of Rivia. Save a species and get your wish.",
            "Dive into the world of Destiny 2 to explore the mysteries of the solar system and experience responsive first-person shooter combat. Unlock powerful elemental abilities and collect unique gear to customize your Guardian's look and playstyle. Enjoy Destiny 2’s cinematic story, challenging co-op missions, and a variety of PvP modes alone or with friends. Download for free today and write your legend in the stars.",
            "You are a Guardian, defender of the Last City of humanity in a solar system under siege by infamous villains. Look to the stars and stand against the darkness. Your legend begins now.",
            "Choose from the armored Titan, mystic Warlock, or swift Hunter.",
            'Disciplined and proud, Titans are capable of both aggressive assaults and stalwart defenses. Set your hammer ablaze, crack the sky with lightning, and go toe-to-toe with any opponent. Your team will stand tall behind the strength of your shield.',
            'Warlocks weaponize the mysteries of the universe to sustain themselves and destroy their foes. Rain devastation on the battlefield and clear hordes of enemies in the blink of an eye. Those who stand with you will know the true power of the Light.',
            'Agile and daring, Hunters are quick on their feet and quicker on the draw. Fan the hammer of your golden gun, flow through enemies like the wind, or strike from the darkness. Find the enemy, take aim, and end the fight before it starts.',
            'Play with or against your friends and other Guardians in various PvE and PvP game modes.',
            "Exciting co-op adventures teeming await with rare and powerful rewards. Dive into the story with missions, quests, and patrols. Put together a small fireteam and secure the chest at the end of a quick Strike. Or test your team's skill with countless hours of raid progression – the ultimate challenge for any fireteam. You decide where your legend begins.",
            "Face off against other players in fast-paced free-for-all skirmishes, team arenas, and PvE/PvP hybrid competitions. Mark special competitions like Iron Banner on your calendar and collect limited-time rewards before they're gone.",
            "Thousands of weapons, millions of options. Discover new gear combinations and define your own personal style. The hunt for the perfect arsenal begins."
        ],
        name:'Destiny 2',
        release_date: '06/09/2017',
        price: 'free'
    },
]

let game = games_discount.find(games => games.id == id)

console.log(game)

let fon_img = document.querySelector('.fon-image')
fon_img.style.backgroundImage = `url(${game.img})`

let img = document.querySelector('.video')
img.src = game.video

let logo = document.querySelector('.game-sticky-elements-img')
logo.style.backgroundImage = `url(${game.logo})`

let price = document.querySelector('.price-game')
price.textContent = game.price

let Release = document.querySelector('.Release')
Release.textContent = game.release_date

let name_game = document.querySelector('.name-game')
name_game.textContent = game.name

let O_game = document.querySelector('.O-game')
O_game.textContent = game.O_game


let game_elements_h3 = document.querySelectorAll('.game-elements-element h3');

for (let i = 0; i < game_elements_h3.length; i++) {
    game_elements_h3[i].textContent = game.about_game[i]
}

let game_elements_p = document.querySelectorAll('.game-elements-element p');

for (let i = 0; i < game_elements_p.length; i++) {
    game_elements_p[i].textContent = game.games[i]
} 

if(game.ul == true){
    let ul = document.querySelector('.ul')
    
    for (let i = 0; i < game.table.length; i++) {
        let li = document.createElement('li')
        li.textContent = game.table[i]
        li.style.color = 'white'
        ul.appendChild(li)
    }
}
else{
    let li = document.querySelector('.ul')
    li.style.display = 'none'
}

let game_names = document.querySelector('.game_names')
game_names.textContent = game.name       
