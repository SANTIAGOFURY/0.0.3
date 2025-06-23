const games = [
  {
    id: 1,
    title: "God of War",
    price: "$49.99",
    cover: "/images/Covers/God_of_War.jpeg",
    rating: 4.9,
    genre: "Action",
    platform: "PS4, PS5",
    releaseYear: "2018",
    description: {
      short:
        "God of War follows Kratos and his son Atreus on a journey through Norse mythology, blending brutal combat and deep storytelling.",
      system: ["Platform: PS4, PS5", "Memory: Optimized for consoles"],
      performance: [
        "60 FPS on PS5",
        "Enhanced graphics and ray tracing support",
      ],
      features: [
        "Epic story-driven campaign",
        "Intense combo-based combat",
        "Expansive Norse world to explore",
      ],
    },
  },
  {
    id: 2,
    title: "Marvel’s Spider-Man 2",
    price: "$69.99",
    cover: "/images/Covers/Spider-Man 2.jpeg",
    rating: 4.8,
    genre: "Action",
    platform: "PS5",
    releaseYear: "2023",
    description: {
      short:
        "The latest Spider-Man adventure swinging through New York with new abilities and two playable heroes: Peter Parker and Miles Morales.",
      system: ["Platform: PS5"],
      performance: ["4K resolution at 60 FPS", "Ray tracing enabled"],
      features: [
        "Dual playable characters",
        "Open-world New York City",
        "Advanced web-slinging mechanics",
      ],
    },
  },
  {
    id: 3,
    title: "GTA V",
    price: "$29.99",
    cover: "/images/Covers/GTA_V.jpeg",
    rating: 4.7,
    genre: "Action",
    platform: "PC, PS4, PS5, Xbox One, Xbox Series X",
    releaseYear: "2013",
    description: {
      short:
        "Grand Theft Auto V offers a massive open world with three playable characters navigating crime and chaos in Los Santos.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-3470 / AMD FX-8350",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GB",
        "Storage: 72 GB",
      ],
      performance: [
        "Supports 4K resolution",
        "Enhanced visuals for next-gen consoles",
      ],
      features: [
        "Three-character story",
        "Online multiplayer mode",
        "Extensive customization and activities",
      ],
    },
  },
  {
    id: 4,
    title: "The Last of Us Part I",
    price: "$39.99",
    cover: "/images/Covers/The Last of Us Part I.jpeg",
    rating: 4.8,
    genre: "Action",
    platform: "PS4, PS5, PC",
    releaseYear: "2013",
    description: {
      short:
        "A post-apocalyptic action-adventure game following Joel and Ellie on a journey across a devastated United States.",
      system: ["Platform: PS4, PS5, PC"],
      performance: [
        "High fidelity graphics",
        "Improved AI and gameplay mechanics",
      ],
      features: [
        "Strong narrative focus",
        "Stealth and combat mechanics",
        "Memorable characters and story",
      ],
    },
  },
  {
    id: 5,
    title: "The Last of Us Part II",
    price: "$59.99",
    cover: "/images/Covers/TLOU2.jpeg",
    rating: 4.9,
    genre: "Action",
    platform: "PS4, PS5",
    releaseYear: "2020",
    description: {
      short:
        "Sequel to TLOU1 with a deeper story, enhanced gameplay, and a focus on Ellie’s journey and survival.",
      system: ["Platform: PS4, PS5"],
      performance: ["60 FPS on PS5", "Enhanced graphics and animations"],
      features: [
        "Emotional storytelling",
        "Stealth and combat variety",
        "Expansive environments",
      ],
    },
  },
  {
    id: 6,
    title: "High on Life",
    price: "$29.99",
    cover: "/images/Covers/High_on_Life.jpeg",
    rating: 4.1,
    genre: "Action",
    platform: "PC, Xbox Series X/S",
    releaseYear: "2022",
    description: {
      short:
        "A humorous first-person shooter where you fight alien invaders with talking guns and outrageous weapons.",
      system: [
        "OS: Windows 10",
        "Processor: Intel i5 or equivalent",
        "Memory: 8 GB RAM",
        "Graphics: GTX 970 or better",
        "Storage: 20 GB",
      ],
      performance: [
        "Good performance on mid-range PCs",
        "Vibrant cartoon-style visuals",
      ],
      features: [
        "Comedic storyline",
        "Unique talking weapons",
        "Open-world exploration",
      ],
    },
  },
  {
    id: 7,
    title: "Stellar Blade",
    price: "$59.99",
    cover: "/images/Covers/Stellar_Blade.jpeg",
    rating: 4.3,
    genre: "Action",
    platform: "PS5",
    releaseYear: "2023",
    description: {
      short:
        "A fast-paced action game featuring a female protagonist fighting alien threats with a powerful energy blade.",
      system: ["Platform: PS5"],
      performance: ["4K at 60 FPS", "Smooth combat animations"],
      features: ["Dynamic combat system", "Sci-fi story", "Beautiful visuals"],
    },
  },
  {
    id: 8,
    title: "Wukong",
    price: "$39.99",
    cover: "/images/Covers/Wukong.jpeg",
    rating: 4.0,
    genre: "Action",
    platform: "PC",
    releaseYear: "2023",
    description: {
      short:
        "An action-adventure game inspired by the Chinese legend of the Monkey King, featuring fast melee combat and magic.",
      system: [
        "OS: Windows 10",
        "Processor: Intel i5 or better",
        "Memory: 8 GB RAM",
        "Graphics: GTX 970 or better",
        "Storage: 30 GB",
      ],
      performance: [
        "Stable performance on mid to high-end PCs",
        "Stylized graphics",
      ],
      features: [
        "Mythical story elements",
        "Combo-heavy melee combat",
        "Open exploration",
      ],
    },
  },
  {
    id: 9,
    title: "Dune",
    price: "$49.99",
    cover: "/images/Covers/Dune.jpeg",
    rating: 4.4,
    genre: "Action",
    platform: "PC, PS5, Xbox Series X",
    releaseYear: "2024",
    description: {
      short:
        "A sci-fi action game set in the Dune universe, featuring exploration, combat, and strategy on the desert planet Arrakis.",
      system: ["Platform: PC, PS5, Xbox Series X"],
      performance: [
        "Optimized for next-gen consoles",
        "High fidelity graphics",
      ],
      features: [
        "Story-driven gameplay",
        "Strategic combat",
        "Expansive open world",
      ],
    },
  },
  // ######################
  //  PlatForms Games >>> #
  // ######################
  {
    id: 10,
    title: "Split",
    price: "$19.99",
    cover: "/images/Covers/Split.jpeg",
    rating: 4.0,
    genre: "Platformer",
    platform: "PC",
    releaseYear: "2022",
    description: {
      short:
        "Split is a cooperative platformer where players solve puzzles and navigate levels together.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i3 or equivalent",
        "Memory: 4 GB RAM",
        "Graphics: Integrated Graphics",
        "Storage: 5 GB",
      ],
      performance: [
        "Optimized for low to mid-range PCs",
        "Smooth multiplayer experience",
      ],
      features: [
        "Cooperative puzzle-solving",
        "Challenging platforming levels",
        "Colorful art style",
      ],
    },
  },
  {
    id: 11,
    title: "Fusion",
    price: "$24.99",
    cover: "/images/Covers/Fusion.jpeg",
    rating: 3.8,
    genre: "Platformer",
    platform: "PC",
    releaseYear: "2021",
    description: {
      short:
        "Fusion combines fast-paced platforming with shooter elements in a sci-fi setting.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: GTX 960",
        "Storage: 10 GB",
      ],
      performance: [
        "Good performance on mid-range PCs",
        "Fluid combat and movement",
      ],
      features: [
        "Hybrid platformer and shooter gameplay",
        "Upgradable weapons",
        "Futuristic visuals",
      ],
    },
  },
  {
    id: 12,
    title: "Cuphead",
    price: "$19.99",
    cover: "/images/Covers/Cuphead.jpeg",
    rating: 4.7,
    genre: "Platformer",
    platform: "PC, Xbox One, Switch, PS4",
    releaseYear: "2017",
    description: {
      short:
        "Cuphead is a classic run-and-gun platformer inspired by 1930s cartoons, featuring challenging boss battles.",
      system: [
        "OS: Windows 7",
        "Processor: Intel Core 2 Duo",
        "Memory: 4 GB RAM",
        "Graphics: Dedicated graphics card with 1GB VRAM",
        "Storage: 20 GB",
      ],
      performance: [
        "Runs well on most modern PCs",
        "Smooth animations with hand-drawn style",
      ],
      features: [
        "Co-op multiplayer",
        "Hand-drawn art and animation",
        "Challenging boss fights",
      ],
    },
  },
  {
    id: 13,
    title: "Chained Together",
    price: "$14.99",
    cover: "/images/Covers/Chained_Together.jpeg",
    rating: 3.9,
    genre: "Platformer",
    platform: "PC, Switch",
    releaseYear: "2020",
    description: {
      short:
        "A cooperative platformer where two players are chained together and must coordinate to solve puzzles.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i3",
        "Memory: 4 GB RAM",
        "Graphics: Integrated",
        "Storage: 3 GB",
      ],
      performance: [
        "Optimized for cooperative play",
        "Simple controls with challenging puzzles",
      ],
      features: [
        "Local and online co-op",
        "Physics-based puzzles",
        "Unique chained movement mechanic",
      ],
    },
  },
  {
    id: 14,
    title: "Astro Bot",
    price: "$39.99",
    cover: "/images/Covers/Astro_Bot.jpeg",
    rating: 4.8,
    genre: "Platformer",
    platform: "PS4, PS5",
    releaseYear: "2018",
    description: {
      short:
        "Astro Bot Rescue Mission is a VR platformer starring a small robot on a mission to save his crew.",
      system: ["Platform: PSVR, PS4, PS5"],
      performance: [
        "Optimized for VR with smooth frame rates",
        "Immersive 3D environments",
      ],
      features: [
        "Virtual reality platforming",
        "Innovative level design",
        "Charming characters and humor",
      ],
    },
  },
  {
    id: 15,
    title: "Hollow Knight",
    price: "$14.99",
    cover: "/images/Covers/Hollow_Knight.jpeg",
    rating: 4.9,
    genre: "Platformer",
    platform: "PC, Switch, PS4, Xbox One",
    releaseYear: "2017",
    description: {
      short:
        "Hollow Knight is a dark, atmospheric Metroidvania platformer with deep exploration and challenging combat.",
      system: [
        "OS: Windows 7",
        "Processor: Intel Core 2 Duo",
        "Memory: 4 GB RAM",
        "Graphics: Dedicated GPU",
        "Storage: 9 GB",
      ],
      performance: [
        "Runs smoothly on most systems",
        "Beautiful hand-drawn art style",
      ],
      features: [
        "Expansive interconnected world",
        "Varied combat and abilities",
        "Rich lore and atmosphere",
      ],
    },
  },
  {
    id: 16,
    title: "Portal 2",
    price: "$9.99",
    cover: "/images/Covers/Portal_2.jpeg",
    rating: 4.8,
    genre: "Platformer",
    platform: "PC, Xbox 360, PS3",
    releaseYear: "2011",
    description: {
      short:
        "Portal 2 is a puzzle-platformer with innovative physics-based puzzles and a humorous story.",
      system: [
        "OS: Windows 7",
        "Processor: Dual core 3.0 GHz",
        "Memory: 2 GB RAM",
        "Graphics: DirectX 9 compatible GPU",
        "Storage: 8 GB",
      ],
      performance: ["Runs on low-spec PCs", "Smooth physics and animations"],
      features: [
        "Single and cooperative multiplayer",
        "Challenging portal puzzles",
        "Witty writing and characters",
      ],
    },
  },
  {
    id: 17,
    title: "STAR WARS Jedi: Fallen Order",
    price: "$49.99",
    cover: "/images/Covers/Jedi_Fallen_Order.jpeg",
    rating: 4.5,
    genre: "Platformer",
    platform: "PC, PS4, Xbox One",
    releaseYear: "2019",
    description: {
      short:
        "A story-driven action platformer where you play as a young Jedi fleeing the Empire.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 770",
        "Storage: 55 GB",
      ],
      performance: [
        "Good performance on mid-range PCs",
        "Immersive world and combat",
      ],
      features: [
        "Engaging story",
        "Lightsaber combat and force powers",
        "Exploration and puzzles",
      ],
    },
  },
  {
    id: 18,
    title: "Nine Sols",
    price: "$24.99",
    cover: "/images/Covers/Nine_Sols.jpeg",
    rating: 4.2,
    genre: "Platformer",
    platform: "PC",
    releaseYear: "2023",
    description: {
      short:
        "Nine Sols is a fast-paced action platformer with a mythical Chinese setting and intense combat.",
      system: [
        "OS: Windows 10",
        "Processor: Intel i5 or better",
        "Memory: 8 GB RAM",
        "Graphics: GTX 970",
        "Storage: 20 GB",
      ],
      performance: [
        "Smooth gameplay and responsive controls",
        "Stylized visuals",
      ],
      features: [
        "Mythical story",
        "Combo-based combat",
        "Exploration and platforming",
      ],
    },
  },
  {
    id: 19,
    title: "Terraria",
    price: "$9.99",
    cover: "/images/Covers/Terraria.jpeg",
    rating: 4.6,
    genre: "Platformer",
    platform: "PC, Console, Mobile",
    releaseYear: "2011",
    description: {
      short:
        "Terraria is a 2D sandbox platformer with crafting, exploration, and combat in a procedurally generated world.",
      system: [
        "OS: Windows 7",
        "Processor: 2.0 GHz",
        "Memory: 2.5 GB RAM",
        "Graphics: 128 MB VRAM",
        "Storage: 200 MB",
      ],
      performance: [
        "Runs on low-spec PCs and mobile devices",
        "Simple 2D graphics",
      ],
      features: [
        "Open world exploration",
        "Crafting and building",
        "Boss fights and multiplayer",
      ],
    },
  },
  {
    id: 20,
    title: "Minecraft",
    price: "$26.95",
    cover: "/images/Covers/Minecraft.jpeg",
    rating: 4.8,
    genre: "Platformer",
    platform: "PC, Console, Mobile",
    releaseYear: "2011",
    description: {
      short:
        "Minecraft is a sandbox game with endless creativity, building, exploration, and survival elements.",
      system: [
        "OS: Windows 7",
        "Processor: Intel Core i3",
        "Memory: 4 GB RAM",
        "Graphics: Integrated",
        "Storage: 1 GB",
      ],
      performance: [
        "Runs on wide range of hardware",
        "Scalable graphics settings",
      ],
      features: [
        "Open world sandbox",
        "Multiplayer servers",
        "Mods and custom maps",
      ],
    },
  },
  // ######################
  //  Simulation Games >>> #
  // ######################
  {
    id: 21,
    title: "Euro Truck Simulator 2",
    price: "$19.99",
    cover: "/images/Covers/Euro_Truck_Simulator_2.jpeg",
    rating: 4.5,
    genre: "Simulation",
    platform: "PC",
    releaseYear: "2012",
    description: {
      short:
        "Euro Truck Simulator 2 lets you drive across Europe delivering cargo and managing your trucking business.",
      system: [
        "OS: Windows 7/8/10",
        "Processor: Dual-core CPU 2.4 GHz",
        "Memory: 4 GB RAM",
        "Graphics: GeForce GTS 450-class (Intel HD 4000)",
        "Storage: 3 GB",
      ],
      performance: [
        "Optimized for mid-range PCs",
        "Supports multiple monitors",
      ],
      features: [
        "Realistic truck driving physics",
        "Detailed European map",
        "Business management gameplay",
      ],
    },
  },
  // ######################
  //  Sports games Games >>> #
  // ######################
  {
    id: 22,
    title: "Rocket League",
    price: "$19.99",
    cover: "/images/Covers/Rocket_League.jpeg",
    rating: 4.6,
    genre: "Sports",
    platform: "PC, PS4, PS5, Xbox One, Switch",
    releaseYear: "2015",
    description: {
      short:
        "Rocket League is a high-octane blend of soccer and vehicular mayhem, with fast-paced competitive matches.",
      system: [
        "OS: Windows 7+",
        "Processor: 2.5 GHz Dual Core",
        "Memory: 4 GB RAM",
        "Graphics: NVIDIA GeForce 760 or equivalent",
        "Storage: 20 GB",
      ],
      performance: [
        "Smooth gameplay on mid-range PCs",
        "Supports cross-platform multiplayer",
      ],
      features: [
        "Soccer with rocket-powered cars",
        "Online and offline modes",
        "Customization and esports support",
      ],
    },
  },
  {
    id: 23,
    title: "EA FC 25",
    price: "$69.99",
    cover: "/images/Covers/EA_FC_25.jpeg",
    rating: 4.2,
    genre: "Sports",
    platform: "PC, PS5, Xbox Series X",
    releaseYear: "2025",
    description: {
      short:
        "EA FC 25 is the latest football simulation with realistic gameplay and enhanced graphics.",
      system: [
        "OS: Windows 10",
        "Processor: Intel i5-6600 or AMD Ryzen 5 1600",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 1060 or AMD RX 580",
        "Storage: 50 GB",
      ],
      performance: [
        "Optimized for next-gen consoles",
        "High frame rates and visual fidelity",
      ],
      features: [
        "Realistic football simulation",
        "Dynamic weather effects",
        "Updated teams and leagues",
      ],
    },
  },
  {
    id: 24,
    title: "EA FC 24",
    price: "$59.99",
    cover: "/images/Covers/EA_FC_24.jpeg",
    rating: 4.1,
    genre: "Sports",
    platform: "PC, PS4, PS5, Xbox One, Xbox Series X",
    releaseYear: "2024",
    description: {
      short:
        "EA FC 24 features immersive football gameplay with refined mechanics and new modes.",
      system: [
        "OS: Windows 10",
        "Processor: Intel i5-4460 or AMD Ryzen 3 1200",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 670 or AMD R7 250",
        "Storage: 50 GB",
      ],
      performance: [
        "Good performance on mid-range PCs",
        "Improved AI and physics",
      ],
      features: [
        "Updated rosters",
        "Enhanced career mode",
        "Online competitive play",
      ],
    },
  },
  {
    id: 25,
    title: "FIFA 23",
    price: "$59.99",
    cover: "/images/Covers/FIFA_23.jpeg",
    rating: 4.3,
    genre: "Sports",
    platform: "PC, PS4, PS5, Xbox One, Xbox Series X",
    releaseYear: "2022",
    description: {
      short:
        "FIFA 23 delivers realistic football simulation with HyperMotion2 technology and cross-play support.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-6600 or AMD Ryzen 5 1600",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 1050 Ti or AMD RX 570",
        "Storage: 50 GB",
      ],
      performance: [
        "Supports 4K on next-gen consoles",
        "Smooth gameplay with realistic physics",
      ],
      features: [
        "Cross-play multiplayer",
        "Expanded women's football content",
        "Ultimate Team and Career modes",
      ],
    },
  },
  {
    id: 26,
    title: "NBA 2K24",
    price: "$59.99",
    cover: "/images/Covers/NBA_2K24.jpeg",
    rating: 4.4,
    genre: "Sports",
    platform: "PC, PS4, PS5, Xbox One, Xbox Series X",
    releaseYear: "2023",
    description: {
      short:
        "NBA 2K24 brings realistic basketball gameplay with improved MyCareer and MyTeam modes.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-3550 or AMD FX-8150",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 670 or AMD HD 7870",
        "Storage: 80 GB",
      ],
      performance: [
        "Optimized for consoles and PCs",
        "Realistic player animations",
      ],
      features: [
        "Deep career mode",
        "Online multiplayer",
        "Updated rosters and players",
      ],
    },
  },
  {
    id: 27,
    title: "FIFA 25",
    price: "$69.99",
    cover: "/images/Covers/FIFA_25.jpeg",
    rating: 4.0,
    genre: "Sports",
    platform: "PC, PS5, Xbox Series X",
    releaseYear: "2025",
    description: {
      short:
        "FIFA 25 is the upcoming installment with next-gen graphics and expanded gameplay modes.",
      system: [
        "OS: Windows 10",
        "Processor: Intel i5 or better",
        "Memory: 16 GB RAM",
        "Graphics: RTX 2060 or better",
        "Storage: 60 GB",
      ],
      performance: [
        "Optimized for next-gen hardware",
        "High frame rates and detail",
      ],
      features: [
        "Enhanced AI",
        "New gameplay mechanics",
        "Expanded online modes",
      ],
    },
  },
  {
    id: 28,
    title: "Assetto Corsa",
    price: "$39.99",
    cover: "/images/Covers/Assetto_Corsa.jpeg",
    rating: 4.5,
    genre: "Sports",
    platform: "PC, PS4, Xbox One",
    releaseYear: "2014",
    description: {
      short:
        "Assetto Corsa is a realistic racing simulator focused on car handling and physics.",
      system: [
        "OS: Windows 7/8/10",
        "Processor: Intel Core 2 Duo",
        "Memory: 4 GB RAM",
        "Graphics: DirectX 10 compatible GPU",
        "Storage: 15 GB",
      ],
      performance: [
        "Accurate physics engine",
        "Supports steering wheel controllers",
      ],
      features: [
        "Real-world cars and tracks",
        "Mod support",
        "Multiplayer racing",
      ],
    },
  },
  {
    id: 29,
    title: "MotoGP",
    price: "$49.99",
    cover: "/images/Covers/MotoGP.jpeg",
    rating: 4.2,
    genre: "Sports",
    platform: "PC, PS4, PS5, Xbox One, Xbox Series X",
    releaseYear: "2022",
    description: {
      short:
        "MotoGP offers realistic motorcycle racing with official riders, teams, and circuits.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5 or equivalent",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 970",
        "Storage: 40 GB",
      ],
      performance: [
        "Optimized for consoles and PCs",
        "Smooth bike handling and physics",
      ],
      features: [
        "Official MotoGP license",
        "Career and multiplayer modes",
        "Dynamic weather and physics",
      ],
    },
  },
  {
    id: 30,
    title: "eFootball",
    price: "NAN",
    cover: "/images/Covers/eFootball.jpeg",
    rating: 3.8,
    genre: "Sports",
    platform: "PC, PS4, PS5, Xbox One, Xbox Series X, Mobile",
    releaseYear: "2022",
    description: {
      short:
        "eFootball is a free-to-play soccer simulation focusing on realistic gameplay and esports.",
      system: ["Varies by platform"],
      performance: ["Cross-platform play", "Regular updates and events"],
      features: [
        "Free-to-play with microtransactions",
        "Regular roster updates",
        "Competitive multiplayer",
      ],
    },
  },
  {
    id: 31,
    title: "Football Manager",
    price: "$49.99",
    cover: "/images/Covers/Football_Manager.jpeg",
    rating: 4.7,
    genre: "Sports",
    platform: "PC, Mobile",
    releaseYear: "2023",
    description: {
      short:
        "Football Manager is the definitive soccer management simulation with deep tactical gameplay.",
      system: [
        "OS: Windows 7+",
        "Processor: 2.4 GHz Dual Core",
        "Memory: 4 GB RAM",
        "Graphics: Integrated",
        "Storage: 7 GB",
      ],
      performance: ["Runs on mid-range PCs", "Detailed simulation engine"],
      features: [
        "Manage clubs worldwide",
        "In-depth tactics and transfers",
        "Realistic player data and stats",
      ],
    },
  },
  // ######################
  //  Indie  Games >>> #
  // ######################
  {
    id: 32,
    title: "Rust",
    price: "$39.99",
    cover: "/images/Covers/Rust.jpeg",
    rating: 4.3,
    genre: "Indie",
    platform: "PC, Xbox One",
    releaseYear: "2018",
    description: {
      short:
        "Rust is a multiplayer survival game where players gather resources, build bases, and compete for dominance.",
      system: [
        "OS: Windows 7+",
        "Processor: Intel Core i7-3770 / AMD FX-9590",
        "Memory: 10 GB RAM",
        "Graphics: GTX 670 2GB / AMD R9 280",
        "Storage: 20 GB",
      ],
      performance: [
        "Optimized for multiplayer servers",
        "Variable performance depending on player count",
      ],
      features: [
        "Open-world survival",
        "Base building and crafting",
        "PvP and PvE elements",
      ],
    },
  },
  {
    id: 33,
    title: "Wobbly Life",
    price: "$19.99",
    cover: "/images/Covers/Wobbly_Life.jpeg",
    rating: 4.0,
    genre: "Indie",
    platform: "PC, Xbox One, PS4",
    releaseYear: "2020",
    description: {
      short:
        "Wobbly Life is a physics-based open world sandbox game with fun vehicles, jobs, and quests.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i3",
        "Memory: 4 GB RAM",
        "Graphics: Dedicated GPU",
        "Storage: 5 GB",
      ],
      performance: [
        "Smooth gameplay on mid-range PCs",
        "Colorful, cartoony graphics",
      ],
      features: [
        "Open world sandbox",
        "Mini-games and quests",
        "Co-op multiplayer",
      ],
    },
  },
  {
    id: 34,
    title: "Factorio",
    price: "$30.00",
    cover: "/images/Covers/Factorio.jpeg",
    rating: 4.8,
    genre: "Indie",
    platform: "PC",
    releaseYear: "2020",
    description: {
      short:
        "Factorio is a construction and management simulation focused on building factories and automation.",
      system: [
        "OS: Windows 7+",
        "Processor: Dual core 3.0 GHz",
        "Memory: 4 GB RAM",
        "Graphics: Integrated graphics",
        "Storage: 5 GB",
      ],
      performance: [
        "Optimized for complex factories",
        "Scales with hardware power",
      ],
      features: [
        "Factory building",
        "Automation and logistics",
        "Multiplayer support",
      ],
    },
  },
  {
    id: 35,
    title: "A Drive Beyond",
    price: "$19.99",
    cover: "/images/Covers/A_Drive_Beyond.jpeg",
    rating: 3.7,
    genre: "Indie",
    platform: "PC",
    releaseYear: "2021",
    description: {
      short:
        "A Drive Beyond is a narrative-driven indie game combining exploration with puzzle-solving.",
      system: [
        "OS: Windows 10",
        "Processor: Intel i3",
        "Memory: 4 GB RAM",
        "Graphics: Integrated",
        "Storage: 3 GB",
      ],
      performance: ["Lightweight, runs on most PCs", "Smooth animations"],
      features: [
        "Story rich exploration",
        "Puzzles and challenges",
        "Unique art style",
      ],
    },
  },
  {
    id: 36,
    title: "Hades",
    price: "$24.99",
    cover: "/images/Covers/Hades.jpeg",
    rating: 4.9,
    genre: "Indie",
    platform: "PC, Switch, PS4, Xbox One",
    releaseYear: "2020",
    description: {
      short:
        "Hades is a rogue-like dungeon crawler with fast-paced combat and a rich story based on Greek mythology.",
      system: [
        "OS: Windows 7+",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: Dedicated GPU",
        "Storage: 15 GB",
      ],
      performance: [
        "Runs well on mid-range PCs",
        "Smooth combat and animations",
      ],
      features: ["Procedural dungeons", "Deep narrative", "Highly replayable"],
    },
  },
  {
    id: 37,
    title: "Hades II",
    price: "$29.99",
    cover: "/images/Covers/Hades_II.jpeg",
    rating: 4.7,
    genre: "Indie",
    platform: "PC",
    releaseYear: "2024",
    description: {
      short:
        "The sequel to Hades, continuing the story with new characters, powers, and dungeons.",
      system: [
        "OS: Windows 10",
        "Processor: Intel i5",
        "Memory: 8 GB RAM",
        "Graphics: Dedicated GPU",
        "Storage: 20 GB",
      ],
      performance: [
        "Optimized for next-gen PCs",
        "Enhanced visuals and mechanics",
      ],
      features: [
        "New narrative arcs",
        "Expanded combat system",
        "Procedural generation",
      ],
    },
  },
  {
    id: 38,
    title: "Insurgency: Sandstorm",
    price: "$29.99",
    cover: "/images/Covers/Insurgency_Sandstorm.jpeg",
    rating: 4.1,
    genre: "Indie",
    platform: "PC, PS4, Xbox One",
    releaseYear: "2018",
    description: {
      short:
        "A tactical shooter with realistic combat and team-based gameplay.",
      system: [
        "OS: Windows 7/8/10",
        "Processor: Intel Core i5-750 or AMD Phenom II X4 945",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 470 or AMD HD 6870",
        "Storage: 40 GB",
      ],
      performance: [
        "Smooth multiplayer performance",
        "Realistic sound and physics",
      ],
      features: [
        "Team tactical shooter",
        "Objective-based gameplay",
        "Competitive multiplayer",
      ],
    },
  },
  {
    id: 39,
    title: "Satisfactory",
    price: "$29.99",
    cover: "/images/Covers/Satisfactory.jpeg",
    rating: 4.5,
    genre: "Indie",
    platform: "PC",
    releaseYear: "2019",
    description: {
      short:
        "Satisfactory is a first-person factory building game with exploration and resource management.",
      system: [
        "OS: Windows 7+",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 960",
        "Storage: 20 GB",
      ],
      performance: [
        "Optimized for mid to high-end PCs",
        "Smooth open-world performance",
      ],
      features: [
        "Factory building",
        "Open-world exploration",
        "Multiplayer co-op",
      ],
    },
  },
  {
    id: 40,
    title: "No Man's Sky",
    price: "$59.99",
    cover: "/images/Covers/No_Mans_Sky.jpeg",
    rating: 4.0,
    genre: "Indie",
    platform: "PC, PS4, Xbox One",
    releaseYear: "2016",
    description: {
      short:
        "A procedurally generated universe exploration game with crafting, survival, and multiplayer.",
      system: [
        "OS: Windows 7+",
        "Processor: Intel Core i3",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 480",
        "Storage: 10 GB",
      ],
      performance: [
        "Regular updates improving gameplay and visuals",
        "Expansive universe",
      ],
      features: [
        "Procedural universe",
        "Base building and exploration",
        "Multiplayer and co-op",
      ],
    },
  },
  // ######################
  //  racing  Games >>> #
  // ######################
  {
    id: 41,
    title: "Forza Horizon 5",
    price: "$59.99",
    cover: "/images/Covers/Forza_Horizon_5.jpeg",
    rating: 4.8,
    genre: "Racing",
    platform: "PC, Xbox One, Xbox Series X",
    releaseYear: "2021",
    description: {
      short:
        "Forza Horizon 5 offers an open-world racing experience with stunning graphics and diverse cars.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-4460 or AMD Ryzen 3 1200",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 970 or AMD RX 470",
        "Storage: 80 GB",
      ],
      performance: [
        "Optimized for next-gen consoles and PCs",
        "Supports 4K and 60 FPS",
      ],
      features: [
        "Massive open-world map",
        "Hundreds of cars",
        "Dynamic weather and seasons",
      ],
    },
  },
  {
    id: 42,
    title: "Need for Speed: Heat",
    price: "$49.99",
    cover: "/images/Covers/Need_for_Speed_Heat.jpeg",
    rating: 4.1,
    genre: "Racing",
    platform: "PC, PS4, Xbox One",
    releaseYear: "2019",
    description: {
      short:
        "Need for Speed: Heat blends street racing with police chases in a vibrant open world.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-3570 or AMD FX-6350",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 760 or AMD Radeon 7970",
        "Storage: 30 GB",
      ],
      performance: [
        "Smooth gameplay on mid-range PCs",
        "Dynamic day-night cycle",
      ],
      features: [
        "Street racing and police pursuits",
        "Vehicle customization",
        "Open world exploration",
      ],
    },
  },
  {
    id: 43,
    title: "The Crew",
    price: "$29.99",
    cover: "/images/Covers/The_Crew.jpeg",
    rating: 4.0,
    genre: "Racing",
    platform: "PC, PS4, Xbox One",
    releaseYear: "2014",
    description: {
      short:
        "The Crew offers large-scale open-world racing across a condensed map of the USA.",
      system: [
        "OS: Windows 7+",
        "Processor: Intel Core i5 2.8 GHz",
        "Memory: 4 GB RAM",
        "Graphics: NVIDIA GeForce GTX 460",
        "Storage: 30 GB",
      ],
      performance: ["Runs on mid-range PCs", "Online multiplayer focused"],
      features: [
        "Massive open world",
        "Team racing modes",
        "Vehicle customization",
      ],
    },
  },
  {
    id: 44,
    title: "Motorfest",
    price: "$39.99",
    cover: "/images/Covers/Motorfest.jpeg",
    rating: 4.2,
    genre: "Racing",
    platform: "PC, Xbox One, Xbox Series X",
    releaseYear: "2023",
    description: {
      short:
        "Motorfest is a celebration of racing history with diverse vehicles and fun racing events.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 1060",
        "Storage: 20 GB",
      ],
      performance: [
        "Optimized for consoles and PCs",
        "Smooth performance with detailed cars",
      ],
      features: [
        "Wide range of cars",
        "Multiple race types",
        "Dynamic environments",
      ],
    },
  },
  {
    id: 45,
    title: "Need for Speed: Unbound",
    price: "$59.99",
    cover: "/images/Covers/Need_for_Speed_Unbound.jpeg",
    rating: 4.3,
    genre: "Racing",
    platform: "PC, PS5, Xbox Series X",
    releaseYear: "2022",
    description: {
      short:
        "Need for Speed: Unbound combines street racing with a unique art style and fast-paced action.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5 or AMD Ryzen 5",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 970 or AMD RX 570",
        "Storage: 40 GB",
      ],
      performance: [
        "Smooth gameplay on modern PCs and consoles",
        "Stylized visuals with graffiti effects",
      ],
      features: [
        "Unique visual style",
        "Open world street racing",
        "Vehicle customization",
      ],
    },
  },
  {
    id: 46,
    title: "Gran Turismo 7",
    price: "$69.99",
    cover: "/images/Covers/Gran_Turismo_7.jpeg",
    rating: 4.7,
    genre: "Racing",
    platform: "PS4, PS5",
    releaseYear: "2022",
    description: {
      short:
        "Gran Turismo 7 is the latest installment of the legendary racing simulation series.",
      system: ["Platform: PS4, PS5"],
      performance: [
        "Optimized for PlayStation hardware",
        "Supports 4K and HDR",
      ],
      features: [
        "Hundreds of cars",
        "Realistic driving physics",
        "Comprehensive customization",
      ],
    },
  },
  {
    id: 47,
    title: "F1 23",
    price: "$59.99",
    cover: "/images/Covers/F1_23.jpeg",
    rating: 4.4,
    genre: "Racing",
    platform: "PC, PS4, PS5, Xbox One, Xbox Series X",
    releaseYear: "2023",
    description: {
      short:
        "F1 23 delivers the official Formula 1 racing experience with updated teams and cars.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5 or AMD Ryzen 5",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 1060 or AMD RX 590",
        "Storage: 80 GB",
      ],
      performance: [
        "Optimized for high-end PCs and consoles",
        "Smooth racing physics",
      ],
      features: [
        "Official F1 license",
        "Career and multiplayer modes",
        "Realistic car handling",
      ],
    },
  },
  {
    id: 48,
    title: "WRC 11",
    price: "$49.99",
    cover: "/images/Covers/WRC_11.jpeg",
    rating: 4.0,
    genre: "Racing",
    platform: "PC, PS4, PS5, Xbox One, Xbox Series X",
    releaseYear: "2022",
    description: {
      short:
        "WRC 11 is the official World Rally Championship game with realistic rally racing.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5 or equivalent",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 970 or AMD RX 570",
        "Storage: 40 GB",
      ],
      performance: [
        "Optimized for consoles and PCs",
        "Realistic rally physics",
      ],
      features: [
        "Official WRC license",
        "Varied rally stages",
        "Dynamic weather conditions",
      ],
    },
  },
  // ######################
  //  Horror  Games >>> #
  // ######################
  {
    id: 49,
    title: "Resident Evil 4",
    price: "$19.99",
    cover: "/images/Covers/Resident_Evil_4.jpeg",
    rating: 4.8,
    genre: "Horror",
    platform: "PC, PS4, Xbox One, Switch",
    releaseYear: "2005",
    description: {
      short:
        "Resident Evil 4 is a survival horror game featuring intense combat against terrifying enemies.",
      system: [
        "OS: Windows 7+",
        "Processor: Intel Core i5-2400",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 760",
        "Storage: 12 GB",
      ],
      performance: [
        "Optimized for modern PCs",
        "Smooth gameplay and improved graphics",
      ],
      features: [
        "Over-the-shoulder camera",
        "Varied enemies and bosses",
        "Engaging storyline",
      ],
    },
  },
  {
    id: 50,
    title: "Alan Wake 2",
    price: "$59.99",
    cover: "/images/Covers/Alan_Wake_2.jpeg",
    rating: 4.3,
    genre: "Horror",
    platform: "PC, PS5, Xbox Series X",
    releaseYear: "2024",
    description: {
      short:
        "Alan Wake 2 continues the psychological thriller story with enhanced visuals and gameplay.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i7 or AMD Ryzen 7",
        "Memory: 16 GB RAM",
        "Graphics: NVIDIA RTX 2070 or AMD RX 6700 XT",
        "Storage: 50 GB",
      ],
      performance: ["Next-gen optimized", "Improved AI and lighting effects"],
      features: [
        "Psychological horror",
        "Deep narrative",
        "Immersive environments",
      ],
    },
  },
  {
    id: 51,
    title: "Dying Light",
    price: "$29.99",
    cover: "/images/Covers/Dying_Light.jpeg",
    rating: 4.4,
    genre: "Horror",
    platform: "PC, PS4, Xbox One",
    releaseYear: "2015",
    description: {
      short:
        "Dying Light is a first-person zombie survival game with parkour and crafting.",
      system: [
        "OS: Windows 7/8/10",
        "Processor: Intel Core i5-2500K",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 560",
        "Storage: 40 GB",
      ],
      performance: [
        "Smooth gameplay",
        "Day-night cycle affecting enemy behavior",
      ],
      features: ["Parkour mechanics", "Co-op multiplayer", "Dynamic weather"],
    },
  },
  {
    id: 52,
    title: "Dying Light 2",
    price: "$59.99",
    cover: "/images/Covers/Dying_Light_2.jpeg",
    rating: 4.1,
    genre: "Horror",
    platform: "PC, PS4, PS5, Xbox One, Xbox Series X",
    releaseYear: "2022",
    description: {
      short:
        "Dying Light 2 expands on the first with an open world, branching story, and parkour combat.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-4670K",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 970",
        "Storage: 60 GB",
      ],
      performance: ["Improved graphics and AI", "Large open world"],
      features: [
        "Dynamic choices affecting story",
        "Enhanced parkour and combat",
        "Co-op multiplayer",
      ],
    },
  },
  {
    id: 53,
    title: "The Beast Inside",
    price: "$19.99",
    cover: "/images/Covers/The_Beast_Inside.jpeg",
    rating: 3.8,
    genre: "Horror",
    platform: "PC",
    releaseYear: "2021",
    description: {
      short:
        "The Beast Inside is a psychological thriller blending investigative gameplay with horror elements.",
      system: [
        "OS: Windows 7+",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 660",
        "Storage: 15 GB",
      ],
      performance: [
        "Runs well on mid-range PCs",
        "Atmospheric visuals and sound",
      ],
      features: [
        "Dual-story gameplay",
        "Investigative puzzles",
        "Horror atmosphere",
      ],
    },
  },
  {
    id: 54,
    title: "Dead by Daylight",
    price: "$19.99",
    cover: "/images/Covers/Dead_by_Daylight.jpeg",
    rating: 4.0,
    genre: "Horror",
    platform: "PC, PS4, Xbox One, Switch",
    releaseYear: "2016",
    description: {
      short:
        "Dead by Daylight is an asymmetric multiplayer horror game where one player is the killer and others are survivors.",
      system: [
        "OS: Windows 7/8/10",
        "Processor: Intel Core i3-4170",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 460",
        "Storage: 25 GB",
      ],
      performance: [
        "Smooth multiplayer experience",
        "Regular updates and events",
      ],
      features: [
        "4v1 multiplayer",
        "Multiple killers and survivors",
        "Cross-platform play",
      ],
    },
  },
  {
    id: 55,
    title: "Phasmophobia",
    price: "$14.99",
    cover: "/images/Covers/Phasmophobia.jpeg",
    rating: 4.5,
    genre: "Horror",
    platform: "PC",
    releaseYear: "2020",
    description: {
      short:
        "Phasmophobia is a cooperative ghost hunting game with immersive VR support.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 970",
        "Storage: 7 GB",
      ],
      performance: ["Optimized for VR and PC", "Smooth cooperative gameplay"],
      features: ["Co-op multiplayer", "Ghost hunting mechanics", "VR support"],
    },
  },
  {
    id: 56,
    title: "Dead Space",
    price: "$29.99",
    cover: "/images/Covers/Dead_Space.jpeg",
    rating: 4.6,
    genre: "Horror",
    platform: "PC, PS4, Xbox One",
    releaseYear: "2008",
    description: {
      short:
        "Dead Space is a sci-fi survival horror game set on a spaceship infested with alien creatures.",
      system: [
        "OS: Windows 7+",
        "Processor: Intel Core 2 Duo E6700",
        "Memory: 4 GB RAM",
        "Graphics: NVIDIA GeForce 8800 GT",
        "Storage: 8 GB",
      ],
      performance: [
        "Optimized for older PCs",
        "Intense atmosphere and sound design",
      ],
      features: [
        "Sci-fi horror setting",
        "Strategic dismemberment combat",
        "Thrilling story",
      ],
    },
  },
  {
    id: 57,
    title: "Silent Hill 2",
    price: "$9.99",
    cover: "/images/Covers/Silent_Hill_2.jpeg",
    rating: 4.7,
    genre: "Horror",
    platform: "PC, PS2, Xbox",
    releaseYear: "2001",
    description: {
      short:
        "Silent Hill 2 is a psychological horror classic known for its haunting atmosphere and story.",
      system: ["Platform: Original consoles and PC"],
      performance: ["Classic graphics", "Atmospheric audio"],
      features: [
        "Psychological horror",
        "Deep narrative",
        "Memorable soundtrack",
      ],
    },
  },
  // ######################
  //  Shooter   Games >>> #
  // ######################
  {
    id: 58,
    title: "Call of Duty: Black Ops 6",
    price: "$59.99",
    cover: "/images/Covers/Call_of_Duty_Black_Ops_6.jpeg",
    rating: 4.5,
    genre: "Shooter",
    platform: "PC, PS4, PS5, Xbox One, Xbox Series X",
    releaseYear: "2024",
    description: {
      short:
        "The latest installment in the Call of Duty franchise with fast-paced multiplayer and cinematic campaigns.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-4460 or AMD Ryzen 5 1600",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 960 or AMD R9 380",
        "Storage: 100 GB",
      ],
      performance: [
        "Optimized for high-end PCs and consoles",
        "Supports 4K and 120 FPS",
      ],
      features: [
        "Multiple multiplayer modes",
        "Zombies co-op mode",
        "Story-driven campaign",
      ],
    },
  },
  {
    id: 59,
    title: "DOOM",
    price: "$39.99",
    cover: "/images/Covers/DOOM.jpeg",
    rating: 4.7,
    genre: "Shooter",
    platform: "PC, PS4, Xbox One, Switch",
    releaseYear: "2016",
    description: {
      short:
        "DOOM is a fast-paced first-person shooter with intense combat and iconic demons.",
      system: [
        "OS: Windows 7+",
        "Processor: Intel Core i5-2400",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 670",
        "Storage: 40 GB",
      ],
      performance: ["Smooth gameplay", "Fast frame rates"],
      features: [
        "Classic shooter gameplay",
        "Multiple weapons",
        "Challenging enemies",
      ],
    },
  },
  {
    id: 60,
    title: "S.T.A.L.K.E.R. 2",
    price: "$59.99",
    cover: "/images/Covers/STALKER_2.jpeg",
    rating: 4.3,
    genre: "Shooter",
    platform: "PC, Xbox Series X",
    releaseYear: "2023",
    description: {
      short:
        "S.T.A.L.K.E.R. 2 is a survival shooter set in the Chernobyl Exclusion Zone with immersive open-world gameplay.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i7-8700K",
        "Memory: 16 GB RAM",
        "Graphics: NVIDIA RTX 2060",
        "Storage: 150 GB",
      ],
      performance: ["High-end graphics", "Large open world"],
      features: [
        "Open-world survival shooter",
        "Dynamic weather and day-night cycle",
        "Story-driven quests",
      ],
    },
  },
  {
    id: 61,
    title: "Rainbow Six Siege",
    price: "$19.99",
    cover: "/images/Covers/Rainbow_Six_Siege.jpeg",
    rating: 4.4,
    genre: "Shooter",
    platform: "PC, PS4, PS5, Xbox One, Xbox Series X",
    releaseYear: "2015",
    description: {
      short:
        "Rainbow Six Siege is a tactical shooter focused on team play and destructible environments.",
      system: [
        "OS: Windows 7+",
        "Processor: Intel Core i3-560",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 460",
        "Storage: 20 GB",
      ],
      performance: ["Optimized for multiplayer", "Regular updates and patches"],
      features: [
        "Tactical team gameplay",
        "Destructible environments",
        "Multiple operators with unique abilities",
      ],
    },
  },
  {
    id: 62,
    title: "High on Life",
    price: "$49.99",
    cover: "/images/Covers/High_on_Life.jpeg",
    rating: 3.9,
    genre: "Shooter",
    platform: "PC, Xbox One, Xbox Series X",
    releaseYear: "2022",
    description: {
      short:
        "High on Life is a comedic first-person shooter featuring talking guns and outrageous gameplay.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 970",
        "Storage: 25 GB",
      ],
      performance: ["Optimized for modern PCs", "Smooth performance"],
      features: [
        "Comedic story and dialogue",
        "Unique talking weapons",
        "Fast-paced shooter action",
      ],
    },
  },
  {
    id: 63,
    title: "Helldivers 2",
    price: "$59.99",
    cover: "/images/Covers/Helldivers_2.jpeg",
    rating: 4.2,
    genre: "Shooter",
    platform: "PC, PS5",
    releaseYear: "2024",
    description: {
      short:
        "Helldivers 2 is a cooperative top-down shooter with strategic gameplay and tough enemies.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 1060",
        "Storage: 30 GB",
      ],
      performance: [
        "Optimized for co-op gameplay",
        "Smooth multiplayer experience",
      ],
      features: [
        "Co-op shooter",
        "Strategic objectives",
        "Variety of weapons and gear",
      ],
    },
  },
  {
    id: 64,
    title: "Hazard Zone",
    price: "$19.99",
    cover: "/images/Covers/Hazard_Zone.jpeg",
    rating: 3.8,
    genre: "Shooter",
    platform: "PC",
    releaseYear: "2023",
    description: {
      short:
        "Hazard Zone is a tactical extraction shooter with high stakes and intense gameplay.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i7",
        "Memory: 16 GB RAM",
        "Graphics: NVIDIA RTX 2070",
        "Storage: 50 GB",
      ],
      performance: ["High-end graphics", "Smooth tactical gameplay"],
      features: [
        "Extraction gameplay",
        "Team-based tactics",
        "High risk and reward",
      ],
    },
  },
  {
    id: 65,
    title: "Atomic Heart",
    price: "$59.99",
    cover: "/images/Covers/Atomic_Heart.jpeg",
    rating: 4.0,
    genre: "Shooter",
    platform: "PC, PS5, Xbox Series X",
    releaseYear: "2023",
    description: {
      short:
        "Atomic Heart is a first-person shooter set in an alternate Soviet Union with bizarre creatures.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i7",
        "Memory: 16 GB RAM",
        "Graphics: NVIDIA RTX 2070",
        "Storage: 50 GB",
      ],
      performance: ["Detailed open world", "Dynamic combat"],
      features: [
        "Alternate history setting",
        "Varied weapons and powers",
        "Exploration and combat",
      ],
    },
  },
  {
    id: 66,
    title: "Metro Exodus",
    price: "$49.99",
    cover: "/images/Covers/Metro_Exodus.jpeg",
    rating: 4.6,
    genre: "Shooter",
    platform: "PC, PS4, PS5, Xbox One, Xbox Series X",
    releaseYear: "2019",
    description: {
      short:
        "Metro Exodus is a story-driven first-person shooter with survival and exploration elements.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-4440",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 970",
        "Storage: 50 GB",
      ],
      performance: ["Optimized for modern hardware", "Immersive environments"],
      features: [
        "Open world with missions",
        "Survival mechanics",
        "Compelling narrative",
      ],
    },
  },
  {
    id: 67,
    title: "ArmA 3",
    price: "$29.99",
    cover: "/images/Covers/ArmA_3.jpeg",
    rating: 4.4,
    genre: "Shooter",
    platform: "PC",
    releaseYear: "2013",
    description: {
      short:
        "ArmA 3 is a military tactical shooter with large-scale combat and realistic simulations.",
      system: [
        "OS: Windows 7+",
        "Processor: Intel Dual-Core 2.4 GHz",
        "Memory: 4 GB RAM",
        "Graphics: NVIDIA GeForce 8800 GT",
        "Storage: 20 GB",
      ],
      performance: [
        "Optimized for large-scale multiplayer",
        "Realistic ballistics and physics",
      ],
      features: ["Large open battlefields", "Military tactics", "Mod support"],
    },
  },
  {
    id: 68,
    title: "The Division",
    price: "$39.99",
    cover: "/images/Covers/The_Division.jpeg",
    rating: 4.1,
    genre: "Shooter",
    platform: "PC, PS4, Xbox One",
    releaseYear: "2016",
    description: {
      short:
        "The Division is a tactical shooter RPG set in a post-apocalyptic New York City.",
      system: [
        "OS: Windows 7+",
        "Processor: Intel Core i5-2400",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 560 Ti",
        "Storage: 40 GB",
      ],
      performance: ["Smooth multiplayer", "Open-world RPG elements"],
      features: [
        "Open-world shooter RPG",
        "Co-op multiplayer",
        "Dynamic world events",
      ],
    },
  },
  {
    id: 69,
    title: "Valorant Skin account ",
    price: "NAN",
    cover: "/images/Covers/Valorant.jpeg",
    rating: 4.3,
    genre: "Shooter",
    platform: "PC",
    releaseYear: "2020",
    description: {
      short:
        "Valorant is a tactical 5v5 shooter combining precise gunplay with unique agent abilities.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core 2 Duo E8400",
        "Memory: 4 GB RAM",
        "Graphics: Intel HD 3000",
        "Storage: 20 GB",
      ],
      performance: [
        "Optimized for competitive play",
        "Low latency matchmaking",
      ],
      features: [
        "Tactical gameplay",
        "Unique agent abilities",
        "Competitive ranked mode",
      ],
    },
  },
  {
    id: 70,
    title: "Fortnite skin account",
    price: "NAN",
    cover: "/images/Covers/Fortnite.jpeg",
    rating: 4.0,
    genre: "Shooter",
    platform: "PC, PS4, PS5, Xbox One, Xbox Series X, Switch",
    releaseYear: "2017",
    description: {
      short:
        "Fortnite is a popular battle royale shooter with building mechanics and regular updates.",
      system: [
        "OS: Windows 7+",
        "Processor: Intel Core i3-3225",
        "Memory: 4 GB RAM",
        "Graphics: Intel HD 4000",
        "Storage: 30 GB",
      ],
      performance: [
        "Runs on a wide range of hardware",
        "Regular content updates",
      ],
      features: ["Battle Royale mode", "Creative mode", "Cross-platform play"],
    },
  },
  // ######################
  //  Strategy Games >>> #
  // ######################
  {
    id: 71,
    title: "Civilization VII",
    price: "$59.99",
    cover: "/images/Covers/Civilization_VII.jpeg",
    rating: 4.7,
    genre: "Strategy",
    platform: "PC",
    releaseYear: "2024",
    description: {
      short:
        "Civilization VII continues the legendary turn-based strategy series with new civilizations and mechanics.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: DirectX 11 compatible",
        "Storage: 20 GB",
      ],
      performance: ["Optimized for modern PCs", "Smooth turn-based gameplay"],
      features: [
        "Multiple civilizations",
        "Complex diplomacy and warfare",
        "Expanded tech trees",
      ],
    },
  },
  {
    id: 72,
    title: "Hearts of Iron IV",
    price: "$39.99",
    cover: "/images/Covers/Hearts_of_Iron_IV.jpeg",
    rating: 4.4,
    genre: "Strategy",
    platform: "PC",
    releaseYear: "2016",
    description: {
      short:
        "Hearts of Iron IV is a grand strategy game set in World War II with deep military and political systems.",
      system: [
        "OS: Windows 7+",
        "Processor: Intel Core 2 Quad Q9400",
        "Memory: 4 GB RAM",
        "Graphics: NVIDIA GeForce 8800 GT",
        "Storage: 2 GB",
      ],
      performance: [
        "Optimized for strategy gameplay",
        "Supports large-scale battles",
      ],
      features: [
        "World War II setting",
        "Detailed troop management",
        "Diplomacy and espionage",
      ],
    },
  },
  {
    id: 73,
    title: "Factorio",
    price: "$30.00",
    cover: "/images/Covers/Factorio.jpeg",
    rating: 4.8,
    genre: "Strategy",
    platform: "PC, Mac, Linux",
    releaseYear: "2020",
    description: {
      short:
        "Factorio is a factory-building and automation game with complex resource management.",
      system: [
        "OS: Windows 7+",
        "Processor: Dual Core 3 GHz",
        "Memory: 4 GB RAM",
        "Graphics: 512 MB VRAM",
        "Storage: 5 GB",
      ],
      performance: [
        "Runs well on low to mid-range PCs",
        "Smooth gameplay even in large factories",
      ],
      features: [
        "Factory automation",
        "Multiplayer support",
        "Extensive modding community",
      ],
    },
  },
  {
    id: 74,
    title: "Stellaris",
    price: "$39.99",
    cover: "/images/Covers/Stellaris.jpeg",
    rating: 4.5,
    genre: "Strategy",
    platform: "PC, Mac, Linux",
    releaseYear: "2016",
    description: {
      short:
        "Stellaris is a grand strategy game set in space with exploration, diplomacy, and warfare.",
      system: [
        "OS: Windows 7+",
        "Processor: Intel Core 2 Duo 3 GHz",
        "Memory: 4 GB RAM",
        "Graphics: NVIDIA GeForce 8800 GT",
        "Storage: 8 GB",
      ],
      performance: [
        "Optimized for strategy gaming",
        "Smooth large-scale space battles",
      ],
      features: ["Space exploration", "Empire building", "Complex diplomacy"],
    },
  },
  {
    id: 75,
    title: "RimWorld",
    price: "$34.99",
    cover: "/images/Covers/RimWorld.jpeg",
    rating: 4.6,
    genre: "Strategy",
    platform: "PC, Mac",
    releaseYear: "2018",
    description: {
      short:
        "RimWorld is a colony simulation and management game with storytelling and survival elements.",
      system: [
        "OS: Windows 7+",
        "Processor: Dual Core 2.5 GHz",
        "Memory: 4 GB RAM",
        "Graphics: DirectX 10 compatible",
        "Storage: 500 MB",
      ],
      performance: [
        "Runs well on low-end PCs",
        "Smooth gameplay with mod support",
      ],
      features: ["Colony management", "Dynamic storytelling", "Mod-friendly"],
    },
  },
  {
    id: 76,
    title: "Core Keeper",
    price: "$19.99",
    cover: "/images/Covers/Core_Keeper.jpeg",
    rating: 4.3,
    genre: "Strategy",
    platform: "PC",
    releaseYear: "2022",
    description: {
      short:
        "Core Keeper is a mining and crafting survival game with strategy elements and co-op gameplay.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i3",
        "Memory: 4 GB RAM",
        "Graphics: Intel HD 4000",
        "Storage: 2 GB",
      ],
      performance: ["Optimized for low to mid PCs", "Smooth co-op gameplay"],
      features: ["Mining and crafting", "Co-op multiplayer", "Base building"],
    },
  },
  {
    id: 77,
    title: "Anno 1800",
    price: "$49.99",
    cover: "/images/Covers/Anno_1800.jpeg",
    rating: 4.5,
    genre: "Strategy",
    platform: "PC",
    releaseYear: "2019",
    description: {
      short:
        "Anno 1800 is a city-building and economic simulation game set during the industrial revolution.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 660",
        "Storage: 40 GB",
      ],
      performance: [
        "Optimized for modern PCs",
        "Detailed city-building simulation",
      ],
      features: [
        "City building",
        "Trade and diplomacy",
        "Campaign and sandbox modes",
      ],
    },
  },
  {
    id: 78,
    title: "Hell Let Loose",
    price: "$29.99",
    cover: "/images/Covers/Hell_Let_Loose.jpeg",
    rating: 4.2,
    genre: "Strategy",
    platform: "PC, PS5, Xbox Series X",
    releaseYear: "2019",
    description: {
      short:
        "Hell Let Loose is a World War II tactical shooter with large-scale battles and strategy elements.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 970",
        "Storage: 30 GB",
      ],
      performance: ["Optimized for large battles", "Smooth multiplayer"],
      features: [
        "Large scale WWII battles",
        "Tactical gameplay",
        "Team coordination",
      ],
    },
  },
  {
    id: 79,
    title: "Squad",
    price: "$39.99",
    cover: "/images/Covers/Squad.jpeg",
    rating: 4.4,
    genre: "Strategy",
    platform: "PC",
    releaseYear: "2020",
    description: {
      short:
        "Squad is a tactical multiplayer shooter focused on team play and communication.",
      system: [
        "OS: Windows 7+",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 660",
        "Storage: 20 GB",
      ],
      performance: ["Optimized for multiplayer", "Emphasis on teamwork"],
      features: [
        "Large-scale battles",
        "Team communication",
        "Realistic combat",
      ],
    },
  },
  {
    id: 80,
    title: "Metroplex",
    price: "$24.99",
    cover: "/images/Covers/Metroplex.jpeg",
    rating: 4.1,
    genre: "Strategy",
    platform: "PC",
    releaseYear: "2021",
    description: {
      short:
        "Metroplex is a fast-paced real-time strategy game focused on controlling giant mechs in battle.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 960",
        "Storage: 10 GB",
      ],
      performance: ["Smooth gameplay", "Fast-paced RTS mechanics"],
      features: ["Mech combat", "Real-time strategy", "Multiplayer modes"],
    },
  },
  {
    id: 81,
    title: "Warstride Challenges",
    price: "$14.99",
    cover: "/images/Covers/Warstride_Challenges.jpeg",
    rating: 4.0,
    genre: "Strategy",
    platform: "PC",
    releaseYear: "2021",
    description: {
      short:
        "Warstride Challenges is a fast-paced first-person shooter with platforming and tactical elements.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 960",
        "Storage: 5 GB",
      ],
      performance: ["Smooth performance", "Fast action gameplay"],
      features: ["Tactical FPS", "Platforming challenges", "Competitive modes"],
    },
  },
  // ######################
  //  Fighting  Games >>> #
  // ######################
  {
    id: 82,
    title: "Mortal Kombat 11",
    price: "$39.99",
    cover: "/images/Covers/Mortal_Kombat_11.jpeg",
    rating: 4.7,
    genre: "Fighting",
    platform: "PC, PS4, PS5, Xbox One, Xbox Series X, Switch",
    releaseYear: "2019",
    description: {
      short:
        "Mortal Kombat 11 is a brutal fighting game with detailed graphics and cinematic fatalities.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-2300",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 750 Ti",
        "Storage: 60 GB",
      ],
      performance: [
        "Optimized for competitive play",
        "Smooth animations and combos",
      ],
      features: [
        "Multiple fighting modes",
        "Extensive character roster",
        "Online multiplayer",
      ],
    },
  },
  {
    id: 83,
    title: "Tekken 8",
    price: "$59.99",
    cover: "/images/Covers/Tekken_8.jpeg",
    rating: 4.6,
    genre: "Fighting",
    platform: "PC, PS5, Xbox Series X",
    releaseYear: "2024",
    description: {
      short:
        "Tekken 8 is the latest installment in the Tekken series with stunning graphics and refined combat.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i7-8700",
        "Memory: 16 GB RAM",
        "Graphics: NVIDIA RTX 2070",
        "Storage: 70 GB",
      ],
      performance: ["High-end graphics", "Smooth gameplay"],
      features: [
        "New fighting mechanics",
        "Diverse character roster",
        "Competitive multiplayer",
      ],
    },
  },
  {
    id: 84,
    title: "Street Fighter 6",
    price: "$59.99",
    cover: "/images/Covers/Street_Fighter_6.jpeg",
    rating: 4.5,
    genre: "Fighting",
    platform: "PC, PS4, PS5, Xbox Series X",
    releaseYear: "2023",
    description: {
      short:
        "Street Fighter 6 introduces new mechanics and a refreshed roster in this classic fighting franchise.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-4460",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 960",
        "Storage: 50 GB",
      ],
      performance: ["Optimized for smooth gameplay", "Supports 4K resolution"],
      features: [
        "Multiple fighting modes",
        "Online and offline play",
        "Training and tournament modes",
      ],
    },
  },
  {
    id: 85,
    title: "Dragon Ball: Sparking! ZERO",
    price: "$29.99",
    cover: "/images/Covers/Dragon_Ball_Sparking_ZERO.jpeg",
    rating: 4.2,
    genre: "Fighting",
    platform: "PC, PS2, Switch",
    releaseYear: "2001",
    description: {
      short:
        "Dragon Ball: Sparking! ZERO is a classic fighting game featuring characters from the Dragon Ball universe.",
      system: ["Platform: Original consoles and PC"],
      performance: ["Classic arcade gameplay", "Smooth combat animations"],
      features: [
        "Dragon Ball characters",
        "Multiple fighting modes",
        "Story mode",
      ],
    },
  },
  {
    id: 86,
    title: "WWE 2K24",
    price: "$59.99",
    cover: "/images/Covers/WWE_2K24.jpeg",
    rating: 4.1,
    genre: "Fighting",
    platform: "PC, PS4, PS5, Xbox One, Xbox Series X",
    releaseYear: "2024",
    description: {
      short:
        "WWE 2K24 offers realistic wrestling action with a large roster of WWE superstars.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 760",
        "Storage: 50 GB",
      ],
      performance: ["Optimized for modern systems", "Smooth animations"],
      features: [
        "Realistic wrestling physics",
        "Career and multiplayer modes",
        "Custom wrestler creation",
      ],
    },
  },
  {
    id: 87,
    title: "For Honor",
    price: "$39.99",
    cover: "/images/Covers/For_Honor.jpeg",
    rating: 4.2,
    genre: "Fighting",
    platform: "PC, PS4, Xbox One",
    releaseYear: "2017",
    description: {
      short:
        "For Honor is a melee-focused fighting game with knights, samurai, and vikings battling it out.",
      system: [
        "OS: Windows 7+",
        "Processor: Intel Core i3-550",
        "Memory: 4 GB RAM",
        "Graphics: NVIDIA GTX 460",
        "Storage: 40 GB",
      ],
      performance: ["Smooth combat", "Online multiplayer"],
      features: [
        "Multiple factions",
        "Team-based battles",
        "Skill-based combat system",
      ],
    },
  },
  {
    id: 88,
    title: "Sifu",
    price: "$29.99",
    cover: "/images/Covers/Sifu.jpeg",
    rating: 4.3,
    genre: "Fighting",
    platform: "PC, PS4, PS5",
    releaseYear: "2022",
    description: {
      short:
        "Sifu is a martial arts fighting game with a unique aging mechanic and fast-paced combat.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 960",
        "Storage: 20 GB",
      ],
      performance: ["Smooth combat mechanics", "Stylized visuals"],
      features: ["Martial arts combat", "Aging mechanic", "Challenging levels"],
    },
  },
  {
    id: 89,
    title: "Injustice 2",
    price: "$39.99",
    cover: "/images/Covers/Injustice_2.jpeg",
    rating: 4.4,
    genre: "Fighting",
    platform: "PC, PS4, Xbox One",
    releaseYear: "2017",
    description: {
      short:
        "Injustice 2 is a superhero fighting game featuring DC Comics characters and dynamic combat.",
      system: [
        "OS: Windows 7+",
        "Processor: Intel Core i5-2300",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 760",
        "Storage: 50 GB",
      ],
      performance: ["Smooth gameplay", "Multiple fighting modes"],
      features: [
        "Superhero roster",
        "Gear customization",
        "Story-driven campaign",
      ],
    },
  },
  {
    id: 90,
    title: "Batman: Arkham Series",
    price: "Varies by title",
    cover: "/images/Covers/Batman_Arkham.jpeg",
    rating: 4.6,
    genre: "Fighting",
    platform: "PC, PS4, Xbox One",
    releaseYear: "2009-2015",
    description: {
      short:
        "The Batman: Arkham series combines action and fighting mechanics with detective gameplay.",
      system: ["Varies by game"],
      performance: ["Highly polished gameplay", "Strong narrative"],
      features: [
        "Detective and combat gameplay",
        "Open world exploration",
        "Multiple playable titles",
      ],
    },
  },
  // ######################
  //  Puzzle   Games >>> #
  // ######################
  {
    id: 91,
    title: "It Takes Two",
    price: "$39.99",
    cover: "/images/Covers/It_Takes_Two.jpeg",
    rating: 4.8,
    genre: "Puzzle",
    platform: "PC, PS4, PS5, Xbox One, Xbox Series X",
    releaseYear: "2021",
    description: {
      short:
        "It Takes Two is a cooperative puzzle-platformer focusing on teamwork and creative problem-solving.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i3",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 660",
        "Storage: 40 GB",
      ],
      performance: ["Optimized for co-op gameplay", "Smooth performance"],
      features: [
        "Two-player cooperative gameplay",
        "Varied puzzle mechanics",
        "Story-driven adventure",
      ],
    },
  },
  {
    id: 92,
    title: "Teardown",
    price: "$29.99",
    cover: "/images/Covers/Teardown.jpeg",
    rating: 4.5,
    genre: "Puzzle",
    platform: "PC",
    releaseYear: "2020",
    description: {
      short:
        "Teardown is a physics-based puzzle game with fully destructible environments.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 970",
        "Storage: 8 GB",
      ],
      performance: ["Optimized for physics simulation", "High frame rates"],
      features: [
        "Destructible environments",
        "Creative solutions",
        "Sandbox mode",
      ],
    },
  },
  {
    id: 93,
    title: "Blue Prince",
    price: "$19.99",
    cover: "/images/Covers/Blue_Prince.jpeg",
    rating: 4.1,
    genre: "Puzzle",
    platform: "PC, Switch",
    releaseYear: "2019",
    description: {
      short:
        "Blue Prince is a charming puzzle-platformer with unique mechanics and colorful levels.",
      system: [
        "OS: Windows 7+",
        "Processor: Intel Core i3",
        "Memory: 4 GB RAM",
        "Graphics: Integrated",
        "Storage: 2 GB",
      ],
      performance: ["Runs well on low-end PCs", "Smooth gameplay"],
      features: [
        "Unique puzzle mechanics",
        "Colorful visuals",
        "Engaging story",
      ],
    },
  },
  {
    id: 94,
    title: "Tomb Raider",
    price: "$39.99",
    cover: "/images/Covers/Tomb_Raider.jpeg",
    rating: 4.6,
    genre: "Puzzle",
    platform: "PC, PS4, Xbox One",
    releaseYear: "2013",
    description: {
      short:
        "Tomb Raider combines adventure with puzzle-solving in a rich action game starring Lara Croft.",
      system: [
        "OS: Windows 7+",
        "Processor: Intel Core i3-2100",
        "Memory: 4 GB RAM",
        "Graphics: NVIDIA GTX 650",
        "Storage: 25 GB",
      ],
      performance: ["Smooth gameplay", "Immersive environments"],
      features: [
        "Exploration and puzzles",
        "Story-driven adventure",
        "Combat mechanics",
      ],
    },
  },
  {
    id: 95,
    title: "Indiana Jones",
    price: "$29.99",
    cover: "/images/Covers/Indiana_Jones.jpeg",
    rating: 4.3,
    genre: "Puzzle",
    platform: "PC",
    releaseYear: "2021",
    description: {
      short:
        "Indiana Jones is an action-adventure game featuring puzzle-solving and exploration.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 960",
        "Storage: 20 GB",
      ],
      performance: ["Optimized for smooth gameplay", "Good puzzle design"],
      features: [
        "Classic adventure puzzles",
        "Exploration and story",
        "Multiple challenge types",
      ],
    },
  },
  {
    id: 96,
    title: "Stray",
    price: "$29.99",
    cover: "/images/Covers/Stray.jpeg",
    rating: 4.4,
    genre: "Puzzle",
    platform: "PC, PS4, PS5",
    releaseYear: "2022",
    description: {
      short:
        "Stray is a third-person adventure game featuring exploration and puzzle-solving as a stray cat.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 970",
        "Storage: 30 GB",
      ],
      performance: ["Smooth gameplay", "Engaging story"],
      features: [
        "Unique protagonist",
        "Puzzle exploration",
        "Atmospheric world",
      ],
    },
  },
  {
    id: 97,
    title: "Resident Evil 2",
    price: "$19.99",
    cover: "/images/Covers/Resident_Evil_2.jpeg",
    rating: 4.7,
    genre: "Puzzle",
    platform: "PC, PS4, Xbox One",
    releaseYear: "2019",
    description: {
      short:
        "Resident Evil 2 is a survival horror game with strong puzzle elements and intense gameplay.",
      system: [
        "OS: Windows 7+",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 760",
        "Storage: 26 GB",
      ],
      performance: ["Smooth performance", "Immersive horror atmosphere"],
      features: ["Puzzle solving", "Survival mechanics", "Story-driven"],
    },
  },
  {
    id: 98,
    title: "Can We Escape War 2021",
    price: "$9.99",
    cover: "/images/Covers/Can_We_Escape_War_2021.jpeg",
    rating: 3.5,
    genre: "Puzzle",
    platform: "PC, Mobile",
    releaseYear: "2021",
    description: {
      short:
        "Can We Escape War 2021 is a puzzle game focused on strategy and survival in a war-torn environment.",
      system: ["Platform: PC and Mobile"],
      performance: ["Lightweight and accessible"],
      features: [
        "Strategic puzzles",
        "Survival challenges",
        "Multiple endings",
      ],
    },
  },
  {
    id: 99,
    title: "Human: Fall Flat",
    price: "$14.99",
    cover: "/images/Covers/Human_Fall_Flat.jpeg",
    rating: 4.3,
    genre: "Puzzle",
    platform: "PC, PS4, Xbox One, Switch",
    releaseYear: "2016",
    description: {
      short:
        "Human: Fall Flat is a physics-based puzzle platformer with quirky characters and open-ended puzzles.",
      system: [
        "OS: Windows 7+",
        "Processor: Intel Core i3",
        "Memory: 4 GB RAM",
        "Graphics: Integrated",
        "Storage: 2 GB",
      ],
      performance: ["Smooth physics simulation", "Fun multiplayer"],
      features: ["Physics puzzles", "Co-op multiplayer", "Open-ended gameplay"],
    },
  },
  // ######################
  //  adventure   Games >>> #
  // ######################
  {
    id: 100,
    title: "Uncharted 4: A Thief’s End",
    price: "$29.99",
    cover: "/images/Covers/Uncharted_4.jpeg",
    rating: 4.8,
    genre: "Adventure",
    platform: "PC, PS4",
    releaseYear: "2016",
    description: {
      short:
        "Uncharted 4 follows Nathan Drake on a globe-trotting treasure hunt full of cinematic action and deep storytelling.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-4430",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 960",
        "Storage: 50 GB",
      ],
      performance: [
        "Cinematic visuals",
        "Smooth 60 FPS gameplay on modern PCs",
      ],
      features: [
        "Epic narrative",
        "Treasure hunting",
        "Climbing and exploration mechanics",
      ],
    },
  },
  {
    id: 101,
    title: "Life is Strange: True Colors",
    price: "$39.99",
    cover: "/images/Covers/Life_Is_Strange_True_Colors.jpeg",
    rating: 4.5,
    genre: "Adventure",
    platform: "PC, PS4, PS5, Xbox",
    releaseYear: "2021",
    description: {
      short:
        "Explore emotional storytelling through Alex Chen’s empathic powers in this heartfelt narrative adventure.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-3470",
        "Memory: 6 GB RAM",
        "Graphics: GTX 750 Ti",
        "Storage: 30 GB",
      ],
      performance: ["Optimized visuals", "Cinematic presentation"],
      features: [
        "Emotion-based choices",
        "Rich character development",
        "Multiple endings",
      ],
    },
  },
  {
    id: 102,
    title: "A Plague Tale: Requiem",
    price: "$49.99",
    cover: "/images/Covers/A_Plague_Tale_Requiem.jpeg",
    rating: 4.7,
    genre: "Adventure",
    platform: "PC, PS5, Xbox Series X",
    releaseYear: "2022",
    description: {
      short:
        "Join Amicia and Hugo on a haunting journey through medieval France in a powerful, story-driven adventure.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-8600",
        "Memory: 16 GB RAM",
        "Graphics: RTX 2060",
        "Storage: 55 GB",
      ],
      performance: ["Stunning environments", "Immersive narrative"],
      features: [
        "Stealth and exploration",
        "Narrative progression",
        "Survival mechanics",
      ],
    },
  },
  {
    id: 103,
    title: "Firewatch",
    price: "$19.99",
    cover: "/images/Covers/Firewatch.jpeg",
    rating: 4.4,
    genre: "Adventure",
    platform: "PC, PS4, Xbox One",
    releaseYear: "2016",
    description: {
      short:
        "Explore the Wyoming wilderness in this emotional and mysterious first-person narrative game.",
      system: [
        "OS: Windows 7",
        "Processor: Intel Core i3-2130",
        "Memory: 6 GB RAM",
        "Graphics: NVIDIA GTX 560",
        "Storage: 4 GB",
      ],
      performance: ["Runs on low-end systems", "Stylized art style"],
      features: [
        "First-person narrative",
        "Emotional story",
        "Minimal UI, immersive design",
      ],
    },
  },
  {
    id: 104,
    title: "The Walking Dead: The Telltale Definitive Series",
    price: "$49.99",
    cover: "/images/Covers/TWD_Telltale_Definitive.jpeg",
    rating: 4.8,
    genre: "Adventure",
    platform: "PC, PS4, Xbox One",
    releaseYear: "2019",
    description: {
      short:
        "Experience Clementine’s full journey through all seasons of this acclaimed narrative-driven zombie series.",
      system: [
        "OS: Windows 7",
        "Processor: Intel Core 2 Duo 2.8GHz",
        "Memory: 3 GB RAM",
        "Graphics: ATI or NVIDIA card with 512MB",
        "Storage: 35 GB",
      ],
      performance: ["Comic-style visuals", "Smooth storytelling"],
      features: [
        "All 4 seasons included",
        "Choice-driven gameplay",
        "Emotional depth",
      ],
    },
  },
  {
    id: 105,
    title: "Journey",
    price: "$14.99",
    cover: "/images/Covers/Journey.jpeg",
    rating: 4.6,
    genre: "Adventure",
    platform: "PC, PS4, PS3",
    releaseYear: "2012",
    description: {
      short:
        "A beautiful, wordless adventure through a vast desert that evokes emotion and wonder.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i3",
        "Memory: 4 GB RAM",
        "Graphics: Intel HD 4000 or better",
        "Storage: 2 GB",
      ],
      performance: ["Runs on most systems", "Smooth, serene experience"],
      features: [
        "Artistic visuals",
        "Emotional storytelling",
        "Seamless online multiplayer",
      ],
    },
  },
  {
    id: 106,
    title: "Detroit: Become Human",
    price: "$39.99",
    cover: "/images/Covers/Detroit_Become_Human.jpeg",
    rating: 4.5,
    genre: "Adventure",
    platform: "PC, PS4",
    releaseYear: "2018",
    description: {
      short:
        "Shape the future in a world of androids with branching choices and cinematic visuals.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-2400",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 660",
        "Storage: 55 GB",
      ],
      performance: ["Branching dialogue trees", "Motion-capture acting"],
      features: [
        "Choice-driven gameplay",
        "Multiple protagonists",
        "Cinematic presentation",
      ],
    },
  },
  {
    id: 107,
    title: "Sea of Solitude",
    price: "$19.99",
    cover: "/images/Covers/Sea_of_Solitude.jpeg",
    rating: 4.1,
    genre: "Adventure",
    platform: "PC, PS4, Xbox One, Switch",
    releaseYear: "2019",
    description: {
      short:
        "Explore a flooded world to uncover personal struggles and defeat metaphorical monsters.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-3570",
        "Memory: 8 GB RAM",
        "Graphics: GTX 660 or better",
        "Storage: 3 GB",
      ],
      performance: ["Stylized visuals", "Optimized for low-mid systems"],
      features: [
        "Narrative-heavy gameplay",
        "Emotional symbolism",
        "Light combat and puzzles",
      ],
    },
  },
  {
    id: 108,
    title: "The Wolf Among Us",
    price: "$14.99",
    cover: "/images/Covers/The_Wolf_Among_Us.jpeg",
    rating: 4.7,
    genre: "Adventure",
    platform: "PC, PS4, Xbox, Mobile",
    releaseYear: "2013",
    description: {
      short:
        "Play as Bigby Wolf in a gritty detective thriller set in the world of Fables comics.",
      system: [
        "OS: Windows 7",
        "Processor: 2.0 GHz Core 2 Duo",
        "Memory: 3 GB RAM",
        "Graphics: 512MB VRAM card",
        "Storage: 5 GB",
      ],
      performance: ["Low spec-friendly", "Stylized comic visuals"],
      features: [
        "Telltale storytelling",
        "Interactive dialogue",
        "Noir detective tone",
      ],
    },
  },
  {
    id: 109,
    title: "Oxenfree II: Lost Signals",
    price: "$24.99",
    cover: "/images/Covers/Oxenfree_II.jpeg",
    rating: 4.4,
    genre: "Adventure",
    platform: "PC, PS4, PS5, Switch",
    releaseYear: "2023",
    description: {
      short:
        "Return to the strange world of Oxenfree in this supernatural thriller filled with mystery and choices.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: GTX 650 or better",
        "Storage: 10 GB",
      ],
      performance: ["Narrative-focused gameplay", "Runs on mid-range PCs"],
      features: [
        "Choice-based storytelling",
        "Supernatural themes",
        "Atmospheric sound design",
      ],
    },
  },
  // ######################
  //  MMO       Games >>> #
  // ######################
  {
    id: 110,
    title: "World of Warcraft: Dragonflight",
    price: "$49.99",
    cover: "/images/Covers/WoW_Dragonflight.jpeg",
    rating: 4.6,
    genre: "MMO",
    platform: "PC",
    releaseYear: "2022",
    description: {
      short:
        "Dragonflight is the latest expansion of World of Warcraft, adding a new continent, dragon riding, and class overhaul.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-3450",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 960",
        "Storage: 100 GB",
      ],
      performance: ["Smooth in large-scale raids", "Custom UI and mod support"],
      features: [
        "Dragon Isles exploration",
        "Dracthyr Evoker class",
        "Dungeons and Raids",
      ],
    },
  },
  {
    id: 111,
    title: "Final Fantasy XIV: Endwalker",
    price: "$39.99",
    cover: "/images/Covers/FFXIV_Endwalker.jpeg",
    rating: 4.9,
    genre: "MMO",
    platform: "PC, PS4, PS5",
    releaseYear: "2021",
    description: {
      short:
        "Endwalker concludes the decade-long story of FFXIV with new classes, zones, and epic storylines.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-8400",
        "Memory: 8 GB RAM",
        "Graphics: GTX 970 or better",
        "Storage: 80 GB",
      ],
      performance: ["Beautiful environments", "High-quality voice acting"],
      features: [
        "Multiple job classes",
        "Housing system",
        "Raids and alliances",
      ],
    },
  },
  {
    id: 112,
    title: "The Elder Scrolls Online: Necrom",
    price: "$59.99",
    cover: "/images/Covers/TESO_Necrom.jpeg",
    rating: 4.5,
    genre: "MMO",
    platform: "PC, PS4, PS5, Xbox",
    releaseYear: "2023",
    description: {
      short:
        "TESO: Necrom adds new storylines and class—the Arcanist—set in Morrowind's eastern coast.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-750",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 760",
        "Storage: 95 GB",
      ],
      performance: ["Fully voice-acted quests", "Huge open world"],
      features: [
        "Solo and group content",
        "Crafting, PvP, PvE",
        "Dynamic world events",
      ],
    },
  },
  {
    id: 113,
    title: "Black Desert Online",
    price: "$9.99",
    cover: "/images/Covers/Black_Desert_Online.jpeg",
    rating: 4.3,
    genre: "MMO",
    platform: "PC, PS4, Xbox",
    releaseYear: "2015",
    description: {
      short:
        "Black Desert is a visually stunning sandbox MMO with action-based combat and extensive life skills.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-650",
        "Memory: 8 GB RAM",
        "Graphics: GTX 970 or higher",
        "Storage: 50 GB",
      ],
      performance: ["High-fidelity graphics", "Requires decent GPU"],
      features: [
        "Open-world PvP",
        "Fishing, trading, housing",
        "Character customization",
      ],
    },
  },
  {
    id: 114,
    title: "Guild Wars 2: Secrets of the Obscure",
    price: "$29.99",
    cover: "/images/Covers/Guild_Wars_2_SOTO.jpeg",
    rating: 4.4,
    genre: "MMO",
    platform: "PC",
    releaseYear: "2023",
    description: {
      short:
        "The fourth major expansion brings new story chapters, skyscale mastery, and combat features.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i3-560",
        "Memory: 6 GB RAM",
        "Graphics: GTX 680",
        "Storage: 60 GB",
      ],
      performance: ["Low CPU usage", "Fast-paced combat"],
      features: [
        "Horizontal progression",
        "Mounts and gliding",
        "WvW and PvP modes",
      ],
    },
  },
  {
    id: 115,
    title: "New World",
    price: "$39.99",
    cover: "/images/Covers/New_World.jpeg",
    rating: 4.0,
    genre: "MMO",
    platform: "PC",
    releaseYear: "2021",
    description: {
      short:
        "New World is an action-MMORPG by Amazon set on the supernatural island of Aeternum.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-2400",
        "Memory: 8 GB RAM",
        "Graphics: GTX 970",
        "Storage: 50 GB",
      ],
      performance: ["Skill-based combat", "Beautiful environments"],
      features: [
        "PvPvE wars and invasions",
        "Crafting and gathering",
        "Territory control",
      ],
    },
  },
  {
    id: 116,
    title: "Lost Ark",
    price: "$14.99 (Starter Pack)",
    cover: "/images/Covers/Lost_Ark.jpeg",
    rating: 4.2,
    genre: "MMO",
    platform: "PC",
    releaseYear: "2022",
    description: {
      short:
        "Lost Ark combines isometric ARPG action with MMO world exploration, raids, and PvP.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i3",
        "Memory: 8 GB RAM",
        "Graphics: GTX 660 or better",
        "Storage: 60 GB",
      ],
      performance: ["Smooth top-down combat", "Instanced dungeons and raids"],
      features: [
        "Over 15 classes",
        "Raids and Guardian bosses",
        "Life skills and housing",
      ],
    },
  },
  {
    id: 117,
    title: "EVE Online: Omega",
    price: "$19.99 (monthly)",
    cover: "/images/Covers/EVE_Online.jpeg",
    rating: 4.1,
    genre: "MMO",
    platform: "PC",
    releaseYear: "2003 (ongoing)",
    description: {
      short:
        "EVE Online is a deep space MMO where players control the economy, politics, and massive wars.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Dual Core",
        "Memory: 4 GB RAM",
        "Graphics: GTX 750 Ti",
        "Storage: 23 GB",
      ],
      performance: ["Stable at large battles", "Supports low-mid rigs"],
      features: [
        "Open market and economy",
        "Fleet-based warfare",
        "Player-made empires",
      ],
    },
  },
  {
    id: 118,
    title: "Star Wars: The Old Republic",
    price: "$14.99 (monthly sub)",
    cover: "/images/Covers/SWTOR.jpeg",
    rating: 4.0,
    genre: "MMO",
    platform: "PC",
    releaseYear: "2011",
    description: {
      short:
        "SWTOR is a story-driven Star Wars MMO with 8 unique class stories and cinematic missions.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-2400",
        "Memory: 8 GB RAM",
        "Graphics: GTX 750 or better",
        "Storage: 40 GB",
      ],
      performance: ["Voice-acted quests", "Solo and group storylines"],
      features: [
        "Light and dark choices",
        "Companions",
        "Raids, PvP, space combat",
      ],
    },
  },
  {
    id: 119,
    title: "Temtem",
    price: "$44.99",
    cover: "/images/Covers/Temtem.jpeg",
    rating: 4.3,
    genre: "MMO",
    platform: "PC, PS5, Xbox Series X, Switch",
    releaseYear: "2022",
    description: {
      short:
        "Temtem is a creature-collection MMO inspired by Pokémon, with online co-op and competitive battles.",
      system: [
        "OS: Windows 10",
        "Processor: Intel i3-6100T",
        "Memory: 4 GB RAM",
        "Graphics: GTX 660 / Radeon HD 7850",
        "Storage: 15 GB",
      ],
      performance: ["Smooth animations", "Cross-platform play"],
      features: ["Over 160 Temtem", "PvP ranked ladders", "MMO questing"],
    },
  },
  // ######################
  //  RPG   Games >>> #
  // ######################
  {
    id: 120,
    title: "The Witcher 3: Wild Hunt",
    price: "$39.99",
    cover: "/images/Covers/The_Witcher_3.jpeg",
    rating: 4.9,
    genre: "RPG",
    platform: "PC, PS4, PS5, Xbox, Switch",
    releaseYear: "2015",
    description: {
      short:
        "An open-world RPG where you play as Geralt of Rivia, a monster hunter in a morally complex world.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-2500K",
        "Memory: 8 GB RAM",
        "Graphics: GTX 770",
        "Storage: 50 GB",
      ],
      performance: [
        "Dynamic weather and day-night cycle",
        "60+ hours of gameplay",
      ],
      features: [
        "Rich narrative",
        "Choices that affect outcomes",
        "Alchemy, crafting, and monster hunting",
      ],
    },
  },
  {
    id: 121,
    title: "Cyberpunk 2077",
    price: "$39.99",
    cover: "/images/Covers/Cyberpunk 2077.jpeg",
    rating: 4.2,
    genre: "RPG",
    platform: "PC, PS4, PS5, Xbox",
    releaseYear: "2020",
    description: {
      short:
        "Futuristic RPG set in Night City, full of augmentations, gangs, and branching stories.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i7-4790",
        "Memory: 12 GB RAM",
        "Graphics: GTX 1060 6GB",
        "Storage: 70 GB SSD",
      ],
      performance: ["Ray-tracing with RTX GPUs", "DLSS 2.0 support"],
      features: [
        "Custom character and skills",
        "Open-world quests",
        "Narrative-driven choices",
      ],
    },
  },
  {
    id: 122,
    title: "Elden Ring",
    price: "$59.99",
    cover: "/images/Covers/Elden_Ring.jpeg",
    rating: 4.9,
    genre: "RPG",
    platform: "PC, PS4, PS5, Xbox",
    releaseYear: "2022",
    description: {
      short:
        "A dark fantasy RPG from FromSoftware, combining open-world exploration with Soulslike combat.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-8400",
        "Memory: 12 GB RAM",
        "Graphics: GTX 1060",
        "Storage: 60 GB",
      ],
      performance: ["High-res textures", "Challenging combat"],
      features: [
        "Open-world gameplay",
        "Deep lore and world-building",
        "Boss battles and dungeons",
      ],
    },
  },
  {
    id: 123,
    title: "Hogwarts Legacy",
    price: "$59.99",
    cover: "/images/Covers/Hogwarts Legacy.jpeg",
    rating: 4.6,
    genre: "RPG",
    platform: "PC, PS5, Xbox Series X",
    releaseYear: "2023",
    description: {
      short:
        "Explore the magical world of Harry Potter in an original story set in the 1800s.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i7-8700",
        "Memory: 16 GB RAM",
        "Graphics: RTX 2060",
        "Storage: 85 GB",
      ],
      performance: [
        "Highly detailed environments",
        "Smooth spellcasting mechanics",
      ],
      features: [
        "Character creation",
        "Classes and magical duels",
        "Exploration and quests",
      ],
    },
  },
  {
    id: 124,
    title: "Baldur’s Gate 3",
    price: "$59.99",
    cover: "/images/Covers/Baldurs_Gate_3.jpeg",
    rating: 4.9,
    genre: "RPG",
    platform: "PC, PS5, Xbox Series X",
    releaseYear: "2023",
    description: {
      short:
        "A CRPG masterpiece based on Dungeons & Dragons 5e rules, with deep story and tactical combat.",
      system: [
        "OS: Windows 10",
        "Processor: Intel i7-8700K",
        "Memory: 16 GB RAM",
        "Graphics: GTX 1070 / RX 580",
        "Storage: 150 GB",
      ],
      performance: ["Turn-based combat", "Cinematic storytelling"],
      features: [
        "Party-based adventure",
        "Multiple endings",
        "Hundreds of choices",
      ],
    },
  },
  {
    id: 125,
    title: "Dragon Age: Inquisition",
    price: "$29.99",
    cover: "/images/Covers/Dragon_Age_Inquisition.jpeg",
    rating: 4.4,
    genre: "RPG",
    platform: "PC, PS4, Xbox One",
    releaseYear: "2014",
    description: {
      short:
        "Lead the Inquisition to save the world in a tactical RPG with massive areas to explore.",
      system: [
        "OS: Windows 7/8.1/10",
        "Processor: AMD six-core CPU or Intel quad-core CPU",
        "Memory: 8 GB RAM",
        "Graphics: Radeon HD 7870 / GTX 660",
        "Storage: 26 GB",
      ],
      performance: ["Large scale maps", "Complex party system"],
      features: [
        "Strategic combat",
        "Deep narrative",
        "Multiple party companions",
      ],
    },
  },
  {
    id: 126,
    title: "Divinity: Original Sin 2",
    price: "$44.99",
    cover: "/images/Covers/Divinity_Original_Sin_2.jpeg",
    rating: 4.8,
    genre: "RPG",
    platform: "PC, PS4, Xbox One, Switch",
    releaseYear: "2017",
    description: {
      short:
        "A top-down fantasy RPG with deep combat, storytelling, and co-op gameplay.",
      system: [
        "OS: Windows 7/8/10",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: GTX 770 or better",
        "Storage: 60 GB",
      ],
      performance: ["Runs well on most systems", "Supports 4-player co-op"],
      features: [
        "Tactical turn-based combat",
        "Branching dialogue and quests",
        "Class-free progression",
      ],
    },
  },
  {
    id: 127,
    title: "Kingdom Come: Deliverance",
    price: "$29.99",
    cover: "/images/Covers/Kingdom_Come_Deliverance.jpeg",
    rating: 4.3,
    genre: "RPG",
    platform: "PC, PS4, Xbox One",
    releaseYear: "2018",
    description: {
      short:
        "A realistic, medieval RPG with historical accuracy and first-person melee combat.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-8400",
        "Memory: 8 GB RAM",
        "Graphics: GTX 1060",
        "Storage: 70 GB",
      ],
      performance: ["Immersive visuals", "Simulation-style mechanics"],
      features: [
        "Skill-based progression",
        "Authentic medieval world",
        "No magic, all realism",
      ],
    },
  },
  {
    id: 128,
    title: "Lies of P",
    price: "$59.99",
    cover: "/images/Covers/Lies_of_P.jpeg",
    rating: 4.5,
    genre: "RPG",
    platform: "PC, PS5, Xbox Series X",
    releaseYear: "2023",
    description: {
      short:
        "A dark Pinocchio-inspired Soulslike RPG with intense combat and gothic visuals.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i7-6700",
        "Memory: 16 GB RAM",
        "Graphics: GTX 1070 or RX 590",
        "Storage: 50 GB",
      ],
      performance: ["Soulslike mechanics", "Fast, challenging gameplay"],
      features: [
        "Weapon customization",
        "Gothic setting",
        "Moral choice system",
      ],
    },
  },
  {
    id: 129,
    title: "The Elder Scrolls V: Skyrim - Anniversary Edition",
    price: "$49.99",
    cover: "/images/Covers/Skyrim_Anniversary.jpeg",
    rating: 4.9,
    genre: "RPG",
    platform: "PC, PS4, PS5, Xbox",
    releaseYear: "2021",
    description: {
      short:
        "Return to Skyrim with all DLC and hundreds of Creation Club mods preinstalled.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-6600K",
        "Memory: 8 GB RAM",
        "Graphics: GTX 970 or better",
        "Storage: 30 GB",
      ],
      performance: ["Modding support", "Open-world exploration"],
      features: [
        "Character freedom",
        "Magic, combat, stealth",
        "Dragon shouts and guilds",
      ],
    },
  },
  {
    id: 130,
    title: "It Takes Two",
    price: "$39.99",
    cover: "/images/Covers/It_Takes_Two.jpeg",
    rating: 4.9,
    genre: "Multiplayer",
    platform: "PC, PS4, PS5, Xbox",
    releaseYear: "2021",
    description: {
      short:
        "An award-winning co-op adventure where two players must work together through wild and imaginative levels.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i3-2100T",
        "Memory: 8 GB RAM",
        "Graphics: NVIDIA GTX 660 / AMD R7 260x",
        "Storage: 50 GB",
      ],
      performance: ["Split-screen and online co-op", "Highly polished visuals"],
      features: [
        "Couch or online co-op only",
        "Puzzle-solving and platforming",
        "Free Friend Pass included",
      ],
    },
  },
  {
    id: 131,
    title: "Overcooked! All You Can Eat",
    price: "$29.99",
    cover: "/images/Covers/Overcooked_All_You_Can_Eat.jpeg",
    rating: 4.6,
    genre: "Multiplayer",
    platform: "PC, PS4, PS5, Xbox, Switch",
    releaseYear: "2020",
    description: {
      short:
        "Chaotic cooking fun for up to 4 players—now remastered with all content from both games.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i3-2100T",
        "Memory: 6 GB RAM",
        "Graphics: GTX 650 / Radeon HD 7770",
        "Storage: 8 GB",
      ],
      performance: ["Smooth 60 FPS", "Local + online multiplayer"],
      features: [
        "Hundreds of levels",
        "Cross-platform play",
        "Accessible for all ages",
      ],
    },
  },
  {
    id: 132,
    title: "Deep Rock Galactic",
    price: "$29.99",
    cover: "/images/Covers/Deep_Rock_Galactic.jpeg",
    rating: 4.8,
    genre: "Multiplayer",
    platform: "PC, Xbox, PlayStation",
    releaseYear: "2020",
    description: {
      short:
        "Team up as dwarves in space to mine, fight monsters, and escape dangerous caverns.",
      system: [
        "OS: Windows 10",
        "Processor: Intel i5-2320",
        "Memory: 6 GB RAM",
        "Graphics: GTX 660 / Radeon HD 7870",
        "Storage: 3 GB",
      ],
      performance: ["Great optimization", "4-player online co-op"],
      features: [
        "Class-based teamwork",
        "Destructible environments",
        "Procedurally generated caves",
      ],
    },
  },
  {
    id: 133,
    title: "Left 4 Dead 2",
    price: "$9.99",
    cover: "/images/Covers/Left_4_Dead_2.jpeg",
    rating: 4.7,
    genre: "Multiplayer",
    platform: "PC, Xbox",
    releaseYear: "2009",
    description: {
      short:
        "Classic zombie co-op FPS with frantic action and unforgettable team-based gameplay.",
      system: [
        "OS: Windows 7",
        "Processor: Pentium Dual Core",
        "Memory: 2 GB RAM",
        "Graphics: DirectX 9 GPU",
        "Storage: 13 GB",
      ],
      performance: ["Low system requirements", "High replayability"],
      features: [
        "4-player co-op campaign",
        "Versus and survival modes",
        "Community mod support",
      ],
    },
  },
  {
    id: 134,
    title: "Valorant (Premium Skins)",
    price: "$19.99+",
    cover: "/images/Covers/Valorant.jpeg",
    rating: 4.6,
    genre: "Multiplayer",
    platform: "PC",
    releaseYear: "2020",
    description: {
      short:
        "Free-to-play tactical FPS with purchasable skins and battle passes to enhance visual experience.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i3-4150",
        "Memory: 4 GB RAM",
        "Graphics: Intel HD 3000+",
        "Storage: 25 GB",
      ],
      performance: ["Runs on low-end hardware", "Competitive 128-tick servers"],
      features: [
        "5v5 tactical shooter",
        "Hero abilities + gunplay",
        "Premium cosmetic system",
      ],
    },
  },
  {
    id: 135,
    title: "Sea of Thieves",
    price: "$39.99",
    cover: "/images/Covers/Sea_of_Thieves.jpeg",
    rating: 4.5,
    genre: "Multiplayer",
    platform: "PC, Xbox",
    releaseYear: "2018",
    description: {
      short:
        "Live the pirate life in an open-world multiplayer adventure full of exploration and treasure hunting.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Q9450",
        "Memory: 8 GB RAM",
        "Graphics: GTX 660 / Radeon R9 270",
        "Storage: 50 GB",
      ],
      performance: ["Crossplay support", "Consistent updates"],
      features: [
        "Ship crew mechanics",
        "PvE and PvP encounters",
        "Seasonal content",
      ],
    },
  },
  {
    id: 136,
    title: "Gang Beasts",
    price: "$19.99",
    cover: "/images/Covers/Gang_Beasts.jpeg",
    rating: 4.2,
    genre: "Multiplayer",
    platform: "PC, PS4, Xbox",
    releaseYear: "2017",
    description: {
      short:
        "A silly and chaotic multiplayer party game with gelatinous fighters and ridiculous physics.",
      system: [
        "OS: Windows 10",
        "Processor: 2.0 GHz Dual Core",
        "Memory: 4 GB RAM",
        "Graphics: Intel HD 4000+",
        "Storage: 2 GB",
      ],
      performance: ["Smooth local and online play", "Funny ragdoll mechanics"],
      features: [
        "Up to 8-player brawls",
        "Dozens of costumes",
        "Custom game modes",
      ],
    },
  },
  {
    id: 137,
    title: "ARK: Survival Evolved",
    price: "$29.99",
    cover: "/images/Covers/ARK_Survival_Evolved.jpeg",
    rating: 4.1,
    genre: "Multiplayer",
    platform: "PC, PS4, Xbox, Switch",
    releaseYear: "2017",
    description: {
      short:
        "Survive on a dinosaur-filled island in this open-world survival multiplayer game.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-2400",
        "Memory: 8 GB RAM",
        "Graphics: GTX 670 or better",
        "Storage: 60 GB",
      ],
      performance: ["Heavy on GPU", "Large modding support"],
      features: [
        "Taming and breeding dinos",
        "Tribes and alliances",
        "PvP or PvE options",
      ],
    },
  },
  {
    id: 138,
    title: "Fall Guys: Ultimate Knockout",
    price: "$19.99 (for premium content)",
    cover: "/images/Covers/Fall_Guys.jpeg",
    rating: 4.3,
    genre: "Multiplayer",
    platform: "PC, PS4, PS5, Xbox, Switch",
    releaseYear: "2020",
    description: {
      short:
        "Wacky battle royale where 60 players compete in obstacle course mini-games.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5",
        "Memory: 8 GB RAM",
        "Graphics: GTX 660 or better",
        "Storage: 7 GB",
      ],
      performance: ["Fast-paced fun", "Crossplay enabled"],
      features: [
        "Dozens of rotating mini-games",
        "Solo, squads, or duos mode",
        "Colorful customization",
      ],
    },
  },
  {
    id: 139,
    title: "Phasmophobia",
    price: "$13.99",
    cover: "/images/Covers/Phasmophobia.jpeg",
    rating: 4.4,
    genre: "Multiplayer",
    platform: "PC (VR optional)",
    releaseYear: "2020",
    description: {
      short:
        "A 4-player online co-op horror game where you investigate haunted locations using ghost-hunting tools.",
      system: [
        "OS: Windows 10",
        "Processor: Intel Core i5-4590",
        "Memory: 8 GB RAM",
        "Graphics: GTX 970 / AMD equivalent",
        "Storage: 21 GB",
      ],
      performance: ["VR and non-VR support", "Great co-op tension"],
      features: [
        "Ghost identification",
        "Voice recognition",
        "Randomized events and scares",
      ],
    },
  },
];

export default games;
