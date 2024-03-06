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
    {
        id: 11,
        img: 'img/skull&bones.jpg',
        logo: 'https://www.weareplaystation.fr/api/upload/media/post/0002/99/thumb_198238_post_big.jpg',
        O_game: "Enter the perilous world of Skull and Bones, a co-op pirate open world action-RPG experience, to become the most infamous pirate kingpin! Engage in thrilling naval battles, craft a variety of unique ships, forge unlikely alliances as you overcome the odds, and bring mayhem on the seas. Be part of an immersive world that introduces new challenges and features every season.",
        about_game: [
            '',
        ],
        games: [
            "Engage in thrilling naval battles and equip a multitude of powerful weapons as you risk it all for the biggest loot.",
            "Sail the lawless seas solo, or team up with two friends or other players to partake in shareable contracts and rewards.",
            "Face cutthroat pirate hunters, deadly sea monsters, unpredictable weather, dangerous rogue waves, supernatural threats, and more as you explore a vast open world.",
            "Craft and sail up to 10 different ships at launch, each with unique perks to match your own personal playstyle.",
            'Grow your infamy and unlock resources and opportunities to get riskier contracts and upgrade your equipment.',
        ],
        name: 'Skull and Bones',
        release_date: '06/09/2017',
        price:'20 000₸'
    },
    {
        id: 12,
        img: 'img/783028.jpg',
        logo: 'https://sun6-20.userapi.com/s/v1/ig2/3PrLK5-qPV-xUNQjPWSR_7BFak7vL9RH_xcWk7hwdnqC0pB4SOAHVuATWq-P_xEWI1B6G2kUTs6fMCgtU4EuUhoO.jpg?size=887x900&quality=95&crop=0,0,887,900&ava=1',
        O_game: "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.",
        about_game: [
            'Death Is Not an Escape.',
            '',
            '',
            'Survive Together… Or Not',
            'Where Am I?',
            'A Feast for Killers',
            'Deeper and Deeper',
            'Real People, Real Fear'
        ],
        games: [
            "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught, tortured and killed.",
            "Survivors play in third-person and have the advantage of better situational awareness. The Killer plays in first-person and is more focused on their prey.",
            "The Survivors' goal in each encounter is to escape the Killing Ground without getting caught by the Killer - something that sounds easier than it is, especially when the environment changes every time you play.",
            "Survivors can either cooperate with the others or be selfish. Your chance of survival will vary depending on whether you work together as a team or if you go at it alone. Will you be able to outwit the Killer and escape their Killing Ground?",
            "Each level is procedurally generated, so you'll never know what to expect. Random spawn points mean you will never feel safe as the world and its danger change every time you play.",
            "Dead by Daylight draws from all corners of the horror world. As a Killer you can play as anything from a powerful Slasher to terrifying paranormal entities. Familiarize yourself with your Killing Grounds and master each Killer's unique power to be able to hunt, catch and sacrifice your victims.",
            "Each Killer and Survivor has their own deep progression system and plenty of unlockables that can be customized to fit your own personal strategy. Experience, skills and understanding of the environment are key to being able to hunt or outwit the Killer.",
            "The procedural levels and real human reactions to pure horror makes each game session an unexpected scenario. You will never be able to tell how it's going to turn out. Ambience, music, and chilling environments combine into a terrifying experience. With enough time, you might even discover what's hiding in the Fog."
        ],
        name:'Dead by daylight',
        release_date: '06/09/2017',
        price: '5 000₸'
    },
    {
        id: 13,
        img: 'img/gta-5-in-photoshop-grand-theft-auto-five-wallpaper-preview.jpg',
        logo: 'https://wallpapers.com/images/hd/1440p-grand-theft-auto-v-background-2560-x-1440-9uqmg501tnsc0436.jpg',
        O_game: "The Grand Theft Auto V: Premium Edition includes the complete GTAV story, Grand Theft Auto Online and all existing gameplay upgrades and content. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in GTA Online.",
        about_game: [
            'Grand Theft Auto V: Premium Edition',
            'GRAND THEFT AUTO V',
            'GRAND THEFT AUTO ONLINE',
            'THE CRIMINAL ENTERPRISE STARTER PACK',
            'LAUNCH YOUR CRIMINAL EMPIRE',
            'A FLEET OF POWERFUL VEHICLES',
            'WEAPONS, CLOTHING & TATTOOS',
        ],
        games: [
            "The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Doomsday Heist, Gunrunning, Smuggler’s Run, Bikers and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.",
            "When a young street hustler, a retired bank robber and a terrifying psychopath land themselves in trouble, they must pull off a series of dangerous heists to survive in a city in which they can trust nobody, least of all each other.",
            "Discover an ever-evolving world of choices and ways to play as you climb the criminal ranks of Los Santos and Blaine County in the ultimate shared Online experience.",
            "The Criminal Enterprise Starter Pack is the fastest way for new GTA Online players to jumpstart their criminal empires with the most exciting and popular content plus $1,000,000 bonus cash to spend in GTA Online - all content valued at over GTA $10,000,000 if purchased separately.",
            "Launch business ventures from your Maze Bank West Executive Office, research powerful weapons technology from your underground Gunrunning Bunker and use your Counterfeit Cash Factory to start a lucrative counterfeiting operation.",
            "Tear through the streets with a range of 10 high performance vehicles including a Supercar, Motorcycles, the weaponized Dune FAV, a Helicopter, a Rally Car and more. You’ll also get properties including a 10 car garage to store your growing fleet.",
            "You’ll also get access to the Compact Grenade Launcher, Marksman Rifle and Compact Rifle along with Stunt Racing Outfits, Biker Tattoos and more.",
        ],
        name:'GTA V',
        release_date: '06/09/2017',
        price: '8 100₸'
    },
    {
        id: 14,
        img: 'img/nightingale-4k-pt-2560x1600.jpg',
        name:'Nightingale',
        logo: 'https://cutewallpaper.org/21/skyrim-nightingale-wallpaper/Best-46+-Nightingale-Desktop-Backgrounds-on-HipWallpaper-.jpg',
        O_game: "Nightingale is a first-person, PVE, open-world survival crafting game played solo or cooperatively with friends. Build, craft, fight and explore as you venture through mystical portals into a variety of amazing and fantastical realms.",
        about_game: [
            'SURVIVE THE REALMS',
            'GATHER AND CRAFT',
            'BUILD AND MANAGE',
            'EXPLORE AND DISCOVER',
            'CO-OP OR SOLO',
            'DEADLY ENCOUNTERS',
        ],
        games: [
            "Prepare to make your way through Faewild forests, harrowing swamps, shimmering deserts, and shadowy jungles as you unlock the portals leading deeper into the lands of Fae. Cook meals, build shelter and muster the spirit to persevere in the face of adversity.",
            "Craft tools to harvest trees, ore, and plants, along with rarer resources found deep in the realms. Discover new schematics and assemble the equipment and weapons you need to survive. Using specialized ingredients and arcane technologies, you can enhance your gear with magical properties.",
            "Design and construct an impressive estate from a variety of styles and tilesets. Upgrade and customize your structures, and form communities to safely live off the land. You can even recruit NPC workers to help expand your homestead, automate production, and assist in resource gathering.",
            "Freely roam expansive realms, where stunning visuals will transport you into a mystical Gaslamp Fantasy world. Find the abandoned remnants of past Realmwalker expeditions, investigate mysterious Fae architecture, and scout derelict ruins. Through every new portal, beauty and danger await you in equal measure.",
            "Adventure solo, or play cooperatively with your friends in an online shared-world realmscape. Combine your strengths, skills, and resources to survive and thrive together. Work together to build communal estates, join up in uncovering the mysteries of the realms, and unite in facing the challenges of the Fae.",
            "Craft and wield a variety of melee weapons and firearms in first-person combat. Confront the fearsome creatures that lurk in the portal network. Fend off incursions by the twisted Fae mimicries of humanity known only as the Bound. Join other players against colossal apex creatures in the deepest reaches of the realms.",
        ],
        discount: true,
        last_price: '7 600₸',
        release_date: '06/09/2017',
        price: '6 840₸'
    },
    {
        id: 15,
        img: 'img/motoff702.jpg',
        logo: 'https://u.kanobu.ru/editor/images/38/8d6bd67d-9b22-4de2-96c9-bff2436ebcb8.jpg',
        O_game: "Saga Anderson arrives to investigate ritualistic murders in a small town. Alan Wake pens a dark story to shape the reality around him. These two heroes are somehow connected. Can they become the heroes they need to be?",
        about_game: [
            "Alan Wake 2: Winner of Time Magazine's Game of the Year; Washington Post's Game of the Year; The Game Awards' Best Game Direction, Best Art Direction and Best Narrative; and Golden Joystick's Critics' Choice Award.",
            '',
            '',
            '',
            'Solve a Deadly Mystery',
            'Play As Two Characters',
            'Explore Two Worlds',
            'Survive With Light',
        ],
        games: [
            "A string of ritualistic murders threatens Bright Falls, a small-town community surrounded by Pacific Northwest wilderness. Saga Anderson, an accomplished FBI agent with a reputation for solving impossible cases arrives to investigate the murders. Anderson’s case spirals into a nightmare when she discovers pages of a horror story that starts to come true around her.",
            "Alan Wake, a lost writer trapped in a nightmare beyond our world, writes a dark story in an attempt to shape the reality around him and escape his prison. With a dark horror hunting him, Wake is trying to retain his sanity and beat the devil at his own game.",
            "Anderson and Wake are two heroes on two desperate journeys in two separate realities, connected at heart in ways neither of them can understand: reflecting each other, echoing each other, and affecting the worlds around them.",
            "Fueled by the horror story, supernatural darkness invades Bright Falls, corrupting the locals and threatening the loved ones of both Anderson and Wake. Light is their weapon—and their safe haven — against the darkness they face. Trapped in a sinister horror story where there are only victims and monsters, can they break out to be the heroes they need to be?",
            "What begins as a small-town murder investigation rapidly spirals into a nightmare journey. Uncover the source of the supernatural darkness in this psychological horror story filled with intense suspense and unexpected twists.",
            "Experience both Alan Wake’s and Saga Anderson’s stories and see events unfold from different perspectives. Switch between Anderson’s life-or-death race to solve the case and Wake’s desperate attempts to rewrite his reality to escape the depths of the Dark Place.",
            "Experience two beautiful yet terrifying worlds, each with its own rich cast of characters and deadly threats. Discover majestic landscapes of Cauldron Lake in the Pacific Northwest and the idyllic towns of Bright Falls and Watery. Contrasting sharply, attempt to escape the nightmarish cityscape of the Dark Place.",
            'With limited resources, take on powerful supernatural enemies in desperate close-combat situations. It takes more than just a gun to survive: light is the ultimate weapon in the fight against the darkness and will be your refuge when enemies threaten to overwhelm you.',
        ],
        name: 'Alan Wake 2',
        release_date: '06/09/2017',
        price: '16 750₸'
    },
    {
        id: 16,
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
        id: 17,
        img: 'img/1335863.jpg',
        logo: 'https://wallpapercave.com/wp/wp6005299.jpg',
        O_game: "Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid, physics-driven competition.",
        about_game: [
            'PLAY ROCKET LEAGUE FOR FREE!',
            '',
            'Tournaments',
            'In-Game Events and Limited Time Modes',
            'Item Shop & Blueprints',
        ],
        games: [
            'Download and compete in the high-octane hybrid of arcade-style soccer and vehicular mayhem! customize your car, hit the field, and compete in one of the most critically acclaimed sports games of all time! Download and take your shot!',
            'Hit the field by yourself or with friends in 1v1, 2v2, and 3v3 Online Modes, or enjoy Extra Modes like Rumble, Snow Day, or Hoops. Unlock items in Rocket Pass, climb the Competitive Ranks, compete in Competitive Tournaments, complete Challenges, enjoy cross-platform progression and more! The field is waiting. Take your shot!',
            "Feel the competitive energy! Join free Tournaments and compete all season against teams at your Rank! Win and earn new rewards!",
            'From Haunted Hallows to Frosty Fest, enjoy limited time events that feature festive in-game items that can be unlocked by playing online! Keep on the lookout for Limited Time Modes and arenas.',
            "Make your car your own with nearly endless customization possibilities! Get in-game items for completing challenges, browse the Item Shop, or build Blueprints for premium content for your car.",
        ],
        name:'Rocket League',
        release_date: '06/09/2017',
        price: 'free'
    },
    {
        id: 18,
        img: 'img/gta-5-in-photoshop-grand-theft-auto-five-wallpaper-preview.jpg',
        logo: 'https://wallpapers.com/images/hd/1440p-grand-theft-auto-v-background-2560-x-1440-9uqmg501tnsc0436.jpg',
        O_game: "The Grand Theft Auto V: Premium Edition includes the complete GTAV story, Grand Theft Auto Online and all existing gameplay upgrades and content. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in GTA Online.",
        about_game: [
            'Grand Theft Auto V: Premium Edition',
            'GRAND THEFT AUTO V',
            'GRAND THEFT AUTO ONLINE',
            'THE CRIMINAL ENTERPRISE STARTER PACK',
            'LAUNCH YOUR CRIMINAL EMPIRE',
            'A FLEET OF POWERFUL VEHICLES',
            'WEAPONS, CLOTHING & TATTOOS',
        ],
        games: [
            "The Grand Theft Auto V: Premium Edition includes the complete Grand Theft Auto V story experience, free access to the ever evolving Grand Theft Auto Online and all existing gameplay upgrades and content including The Doomsday Heist, Gunrunning, Smuggler’s Run, Bikers and much more. You’ll also get the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in Grand Theft Auto Online.",
            "When a young street hustler, a retired bank robber and a terrifying psychopath land themselves in trouble, they must pull off a series of dangerous heists to survive in a city in which they can trust nobody, least of all each other.",
            "Discover an ever-evolving world of choices and ways to play as you climb the criminal ranks of Los Santos and Blaine County in the ultimate shared Online experience.",
            "The Criminal Enterprise Starter Pack is the fastest way for new GTA Online players to jumpstart their criminal empires with the most exciting and popular content plus $1,000,000 bonus cash to spend in GTA Online - all content valued at over GTA $10,000,000 if purchased separately.",
            "Launch business ventures from your Maze Bank West Executive Office, research powerful weapons technology from your underground Gunrunning Bunker and use your Counterfeit Cash Factory to start a lucrative counterfeiting operation.",
            "Tear through the streets with a range of 10 high performance vehicles including a Supercar, Motorcycles, the weaponized Dune FAV, a Helicopter, a Rally Car and more. You’ll also get properties including a 10 car garage to store your growing fleet.",
            "You’ll also get access to the Compact Grenade Launcher, Marksman Rifle and Compact Rifle along with Stunt Racing Outfits, Biker Tattoos and more.",
        ],
        name:'GTA V',
        release_date: '06/09/2017',
        price: '8 100₸'
    },
    {
        id: 19,
        img: 'img/valorant-agent-omen-3840x2160-14510.jpeg',
        logo: 'https://wallpapercave.com/wp/wp6958217.png',
        O_game: "VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork.",
        about_game: [
            'DEFY THE LIMITS FOR FREE IN VALORANT',
        ],
        games: [
            "FIGHT AROUND THE WORLD Blend your style and experience on a global, competitive stage. Attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll have to think faster than your opponent if you want to survive.",
            "CREATIVITY IS YOUR GREATEST WEAPON More than guns and bullets, you’ll choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. Each map is purpose-built for team strategies, spectacular plays, and clutch moments. Make the plays others will imitate for years to come.",
            
        ],
        name:'Valorant',
        release_date: '06/09/2017',
        price: 'free'
    },
    {
        id: 20,
        img: 'img/2505746.jpg',
        logo: 'https://i.ytimg.com/vi/cB7v3okn1gs/maxresdefault.jpg',
        O_game: "Embark on a journey across Teyvat to find your lost sibling and seek answers from The Seven — the gods of each element. Explore this wondrous world, join forces with a diverse range of characters, and unravel the countless mysteries that Teyvat holds...",
        about_game: [
            'MASSIVE OPEN WORLD',
            'ELEMENTAL COMBAT SYSTEM',
            'BEAUTIFUL VISUALS',
            'SOOTHING SOUNDTRACK',
            'BUILD YOUR DREAM TEAM',
            'JOURNEY WITH FRIENDS',
        ],
        games: [
            "Climb any mountain, swim across any river, and glide over the world below, taking in the jaw-dropping scenery each step of the way. And if you stop to investigate a wandering Seelie or strange mechanism, who knows what you might discover?",
            "Harness the seven elements to unleash elemental reactions. Anemo, Electro, Hydro, Pyro, Cryo, Dendro, and Geo interact in all sorts of ways, and Vision wielders have the power to turn this to their advantage. Will you vaporize Hydro with Pyro, electro-charge it with Electro, or freeze it with Cryo? Your mastery of the elements will give you the upper hand in battle and exploration.",
            "Feast your eyes on the world around you, with a stunning art style, real-time rendering, and finely tuned character animations delivering you a truly immersive visual experience. Lighting and weather all change naturally over time, bringing every detail of this world to life.",
            "Let the beautiful sounds of Teyvat draw you in as you explore the expansive world around you. Performed by the world's top orchestras such as London Philharmonic Orchestra and Shanghai Symphony Orchestra, the soundtrack changes seamlessly with the time and gameplay to match the mood.",
            "Team up with a diverse cast of characters in Teyvat, each with their own unique personalities, stories, and abilities. Discover your favorite party combinations and level up your characters to help you conquer even the most daunting of enemies and domains.",
            "Team up with friends across various platforms to trigger more elemental action, tackle tricky boss fights, and conquer challenging domains together to reap rich rewards.",
            "As you stand atop the peaks of Jueyun Karst and take in the rolling clouds and vast terrain stretching out before you, you may wish to stay in Teyvat a little longer... But until you are reunited with your lost sibling, how can you rest? Go forth, Traveler, and begin your adventure!",
        ],
        name:'Genshin Impact',
        release_date: '06/09/2017',
        price: 'free'
    },
    {
        id: 21,
        img: 'img/wp6448284.jpg',
        logo: 'https://wallpapercave.com/wp/wp10887314.jpg',
        O_game: "Experience the emotional storytelling and unforgettable characters in The Last of Us™, winner of over 200 Game of the Year awards.",
        about_game: [
            'Experience the emotional storytelling and unforgettable characters in The Last of Us™, winner of over 200 Game of the Year awards.',
            '',
            'Built for PC',
            '',
            '',
            'AMD Fidelity FX Super Resolution 2',
            'Peripheral Support',
        ],
        games: [
            "In a ravaged civilization, where infected and hardened survivors run rampant, Joel, a weary protagonist, is hired to smuggle 14-year-old Ellie out of a military quarantine zone. However, what starts as a small job soon transforms into a brutal cross-country journey.",
            "Includes the complete The Last of Us single-player story and celebrated prequel chapter, Left Behind, which explores the events that changed the lives of Ellie and her best friend Riley forever.",
            "The Last of Us Part I PC release brings with it plenty of PC features to bring Joel and Ellie’s tense and unforgettable journey to life. This version of The Last of Us Part I is optimized for PC with PC-centric quality-of-life enhancements. Part I will feature AMD FSR 2.2 support*, Nvidia DLSS Super Resolution support*, VSync and frame rate cap options, and a host of features designed specifically for PC, including adjustable Texture Quality, Shadows, Reflections, Ambient Occlusion, and more.",
            "Through the experiences of Joel and Ellie, PC players can fully immerse themselves in beautiful yet haunting environments in stunning detail with true 4K resolutions**. From the harsh, oppressive streets of the Boston QZ to the overgrown and abandoned homes of Bill’s Town to so much more, embark on a beautiful journey across the United States of America with Ultra-Wide Monitor Support for both 21:9 Ultrawide and 32:9 Super Ultrawide aspect ratios.",
            "Experience all these locations, stealthily sneaking through abandoned homes and cities (and picking their drawers and cabinets clean looking for supplies) or engage in tense, captivating action with 3D audio support to better hear the rustle of leaves, the crack of glass, or the footfalls of enemies trying to ambush you***.",
            "Supercharge your framerates and fight for survival as Joel and Ellie with next-level temporal upscaling technology from AMD. FSR 2 uses cutting-edge algorithms to boost your framerates and deliver high-quality, high-resolution game experiences in The Last of Us Part I across a wide range of compatible graphics cards.",
            "The Last of Us Part I on PC features DualSense support through a wired connection so players can feel the impact of battle, the rumble of a tank rolling by, and so much more through haptic feedback and dynamic triggers. With support for the DualShock 4 controller, a wide range of other gamepads, and keyboard and mouse, players can adjust their playstyle to suit their preferences.",
        ],
        name:'The Last of Us',
        release_date: '06/09/2017',
        price: '23 499₸'
    },
    {
        id: 22,
        img: 'img/1143078.jpg',
        logo: 'https://images.fineartamerica.com/images-medium-large-5/mortal-kombat-x-dragon-logo-brand-a.jpg',
        O_game: "Meet the continuation of the most popular fighting game series! Mortal Kombat X is a cinematic presentation of incredible quality and updated game mechanics.",
        about_game: [
            '',
        ],
        games: [
            "Who's next?! Meet the continuation of the most popular fighting game series!",
            "Combining cinematic presentation of unprecedented quality and updated game mechanics, Mortal Kombat X presents the world with the most brutal of all Deadly Battles. For the first time, players will have the opportunity to choose one of several options for each of the fighters, thereby determining the tactics and style of combat.",
        ],
        name:'Mortal Kombat X',
        release_date: '06/09/2017',
        price: '6 700₸'
    },
    {
        id: 23,
        img: 'img/wp6429396.jpg',
        logo: 'https://www.inet-pc.com/Content/files/Valhalla.jpg',
        O_game: "Includes the game, all expansions, and more! Wars will rage. Kingdoms will fall. This is the age of the Vikings.",
        about_game: [
            '',
        ],
        games: [
            "Includes the base game, the season pass, the Ultimate Cosmetics Pack, and the Dawn of Ragnarök Expansion!",
            "In Assassin’s Creed® Valhalla, you are Eivor, a fierce Viking warrior raised on tales of battle and glory. Explore a mysterious and beautiful open world set against the brutal backdrop of England’s Dark Ages.",
            "Season pass content includes: Wrath of the Druids and The Siege of Paris expansions.",
            "Ultimate Pack features the Berserker Bundle (Gear Set, Settlement Pack, and Longship Pack).",
            "Dawn of Ragnarök Expansion: Embrace your destiny as the Norse god Odin and complete your saga.",
        ],
        name:"Assassin's creed: Valhalla",
        release_date: '06/09/2017',
        price: '3 674₸'
    },
    {
        id: 24,
        img: 'img/R.jpg',
        logo: 'https://images.hdqwalls.com/download/god-of-war-2018-logo-4k-lc-1280x2120.jpg',
        O_game: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
        about_game: [
            'Enter the Norse realm',
            'Grasp a second chance',
            'Journey to a dark, elemental world of fearsome creatures',
            'Engage in visceral, physical combat',
        ],
        games: [
            "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
            "Kratos is a father again. As mentor and protector to Atreus, a son determined to earn his respect, he is forced to deal with and control the rage that has long defined him while out in a very dangerous world with his son.",
            "From the marble and columns of ornate Olympus to the gritty forests, mountains and caves of pre-Viking Norse lore, this is a distinctly new realm with its own pantheon of creatures, monsters and gods.",
            "With an over the shoulder camera that brings the player closer to the action than ever before, fights in God of War™ mirror the pantheon of Norse creatures Kratos will face: grand, gritty and grueling. A new main weapon and new abilities retain the defining spirit of the God of War series while presenting a vision of conflict that forges new ground in the genre.",
        ],
        name: 'God of War',
        release_date: '06/09/2017',
        price: '18 999₸'
    },
    {
        id: 25,
        img: 'img/hogwarts-legacy-key-art-01-ps5-en-02oct20.webp',
        logo: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/51a7c2116066035.605a9a0fc6c6b.jpg',
        O_game: "Hogwarts Legacy is an immersive, open-world action RPG. Now you can take control of the action and be at the center of your own adventure in the wizarding world.",
        about_game: [
            '',
            'EXPLORE AN OPEN WORLD',
            'BE THE WITCH OR WIZARD YOU WANT TO BE',
            'EXPERIENCE A NEW WIZARDING WORLD STORY',
        ],
        games: [
            "Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. Now you can take control of the action and be at the center of your own adventure in the wizarding world. Your legacy is what you make of it. Live the Unwritten.",
            "The wizarding world awaits you. Freely roam Hogwarts, Hogsmeade, the Forbidden Forest, and the surrounding Overland area. ",
            "Learn spells, brew potions, grow plants, and tend to magical beasts along your journey. Get sorted into your house, forge relationships, and master skills to become the witch or wizard you want to be.",
            "Experience the wizarding world in a forgotten era to uncover a hidden truth from its past. Battle against trolls, dark wizards, goblins, and more as you face a dangerous villain threatening the fate of the wizarding world.",
        ],
        name: 'Hogwarts legacy',
        release_date: '06/09/2017',
        price:'22 999₸'
    },
    {
        id: 26,
        img: 'img/wp6352566.jpg',
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
        id: 27,
        img: 'img/4495414.jpg',
        logo: 'https://th.bing.com/th/id/R.3061c97dd1fc36797de2e50d711b26c9?rik=1jlH1BJiOGZ8dg&pid=ImgRaw&r=0',
        O_game: 'Ghostrunner offers a unique single-player experience: fast-paced, violent combat, and an original setting that blends science fiction with post-apocalyptic themes. It tells the story of a world that has already ended and its inhabitants who fight to survive.',
        about_game: [
            "Welcome to the future. It's gonna kill you.",
        ],
        games: [
            "Ghostrunner is a hardcore FPP game packed with lightning-fast action, set in a grim, cyberpunk megastructure. Climb Dharma Tower, humanity’s last shelter, after a world-ending cataclysm. Make your way up from the bottom to the top, confront the tyrannical Keymaster, and take your revenge.",
            'The streets of this tower city are full of violence. Mara the Keymaster rules with an iron fist and little regard for human life.',
            "As resources diminish, the strong prey on the weak and chaos threatens to consume what little order remains. The decisive last stand is coming. A final attempt to set things right before mankind goes over the edge of extinction.",
            "As the most advanced blade fighter ever created, you’re always outnumbered but never outclassed. Slice your enemies with a monomolecular katana, dodge bullets with your superhuman reflexes, and employ a variety of specialized techniques to prevail.",
            'Ghostrunner offers a unique single-player experience: fast-paced, violent combat, and an original setting that blends science fiction with post-apocalyptic themes. It tells the story of a world that has already ended and its inhabitants who fight to survive.',
        ],
        name:'Ghostrunner',
        release_date: '10/12/2020',
        price: '6 710₸'
    },
    {
        id: 28,
        img: 'img/1252748.png',
        logo: 'https://vgmag.ir/wp-content/uploads/2018/10/Red_Dead_Redemption_2_30min.jpg',
        O_game: 'Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, Red Dead Redemption 2 is an epic tale of honor and loyalty at the dawn of the modern age. Includes Red Dead Redemption 2: Story Mode and Red Dead Online.',
        about_game: [
            "",
        ],
        games: [
            "America, 1899. Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.",
            'Red Dead Redemption 2 also includes the shared living world of Red Dead Online – forge your own path as you battle lawmen, outlaw gangs and ferocious wild animals to build a life on the American frontier. Build a camp, ride solo or form a posse and explore everything from the snowy mountains in the North to the swamps of the South, from remote outposts to busy farms and bustling towns. Chase down bounties, hunt, fish and trade, search for exotic treasures, run your own underground Moonshine distillery, or become a Naturalist to learn the secrets of the animal kingdom and much more in a world of astounding depth and detail – includes all new features, gameplay content and additional enhancements released since launch.',
        ],
        name:'Red Dead Redemption 2',
        release_date: '10/12/2020',
        price: '6 600₸'
    },
]

let game = games_discount.find(games => games.id == id)

console.log(game)

let fon_img = document.querySelector('.fon-image')
fon_img.style.backgroundImage = `url(${game.img})`

let img = document.querySelector('.game-elements-img')
img.style.backgroundImage = `url(${game.img})`

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

let link = document.querySelector('.header-icon')
link.addEventListener('click', () => {
    window.location.href = 'cart.html'
})