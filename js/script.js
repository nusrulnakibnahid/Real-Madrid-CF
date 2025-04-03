// Players Data for 2024-25 season
const players = {
    goalkeepers: [
        {
            id: 1,
            name: "Thibaut Courtois",
            position: "Goalkeeper",
            nationality: "Belgium",
            number: 1,
            age: 32,
            joined: 2018,
            height: "199 cm",
            weight: "96 kg",
            matches: 230,
            cleanSheets: 91,
            bio: "Considered one of the best goalkeepers in the world, Courtois returned from injury to reclaim his starting position. Known for his incredible reflexes and commanding presence in the box.",
            image: "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250011668.webp",
            stats: {
                reflexes: 94,
                handling: 89,
                positioning: 92,
                diving: 90,
                distribution: 85
            },
            honors: [
                "UEFA Champions League: 2021-22, 2023-24",
                "La Liga: 2019-20, 2021-22, 2023-24",
                "FIFA Club World Cup: 2018, 2022"
            ]
        },
        {
            id: 2,
            name: "Andriy Lunin",
            position: "Goalkeeper",
            nationality: "Ukraine",
            number: 13,
            age: 25,
            joined: 2018,
            height: "191 cm",
            weight: "80 kg",
            matches: 35,
            cleanSheets: 15,
            bio: "Had a breakout season in 2023-24 filling in for Courtois. Excellent shot-stopper who proved he can perform at the highest level.",
            image: "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250089824.webp",
            stats: {
                reflexes: 86,
                handling: 84,
                positioning: 82,
                diving: 85,
                distribution: 80
            },
            honors: [
                "UEFA Champions League: 2023-24",
                "La Liga: 2023-24"
            ]
        },
        {
            id: 3,
            name: "Fran González",
            position: "Goalkeeper",
            nationality: "Spain",
            number: 30,
            age: 21,
            joined: 2023,
            height: "188 cm",
            weight: "78 kg",
            matches: 0,
            cleanSheets: 0,
            bio: "Young goalkeeper from Real Madrid's academy. Developing well and provides depth in the goalkeeping position.",
            image: "https://i.namu.wiki/i/qXgDBiyv6vvt2M0iJD_jmFltRpIfHMtYZCP9jmPflAdCbx4HurE53dqRN4ucrve1sjmkcp-k-1mZvDSWIceXGLXZGQ3Z4KQX7SetQ4A_4WrkOqJSJORYBaLT0YDXMG8NeRJg9wg_LaEZWDY2_796nA.webp",
            stats: {
                reflexes: 78,
                handling: 75,
                positioning: 76,
                diving: 77,
                distribution: 72
            },
            honors: []
        }
    ],
    defenders: [
        {
            id: 4,
            name: "Dani Carvajal",
            position: "Right Back",
            nationality: "Spain",
            number: 2,
            age: 32,
            joined: 2013,
            height: "173 cm",
            weight: "74 kg",
            matches: 400,
            goals: 10,
            assists: 60,
            bio: "Club legend who continues to perform at the highest level. Excellent both defensively and going forward.",
            image: "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250024448.webp",
            stats: {
                pace: 82,
                defending: 86,
                physical: 81,
                dribbling: 80,
                crossing: 85
            },
            honors: [
                "UEFA Champions League: 2013-14, 2015-16, 2016-17, 2017-18, 2021-22, 2023-24",
                "La Liga: 2016-17, 2019-20, 2021-22, 2023-24"
            ]
        },
        {
            id: 5,
            name: "Éder Militão",
            position: "Center Back",
            nationality: "Brazil",
            number: 3,
            age: 26,
            joined: 2019,
            height: "186 cm",
            weight: "78 kg",
            matches: 180,
            goals: 9,
            bio: "Returned from injury to reclaim his starting spot. One of the best defenders in the world when fit.",
            image: "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250121965.webp",
            stats: {
                pace: 83,
                defending: 88,
                physical: 86,
                passing: 80,
                heading: 89
            },
            honors: [
                "UEFA Champions League: 2021-22, 2023-24",
                "La Liga: 2021-22, 2023-24"
            ]
        },
        {
            id: 6,
            name: "David Alaba",
            position: "Center Back",
            nationality: "Austria",
            number: 4,
            age: 32,
            joined: 2021,
            height: "180 cm",
            weight: "78 kg",
            matches: 120,
            goals: 6,
            assists: 8,
            bio: "Versatile defender who brings leadership and experience. Excellent ball-playing center back.",
            image: "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/1906540.webp",
            stats: {
                pace: 79,
                defending: 87,
                physical: 81,
                passing: 89,
                dribbling: 84
            },
            honors: [
                "UEFA Champions League: 2021-22, 2023-24",
                "La Liga: 2021-22, 2023-24"
            ]
        },
        {
            id: 7,
            name: "Jesús Vallejo",
            position: "Center Back",
            nationality: "Spain",
            number: 18,
            age: 27,
            joined: 2015,
            height: "184 cm",
            weight: "77 kg",
            matches: 25,
            goals: 1,
            bio: "Provides depth in central defense. Has had loan spells at several clubs but remains a reliable backup option.",
            image: "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250065307.webp",
            stats: {
                pace: 72,
                defending: 78,
                physical: 79,
                passing: 75,
                heading: 80
            },
            honors: [
                "UEFA Champions League: 2023-24",
                "La Liga: 2023-24"
            ]
        },
        {
            id: 8,
            name: "Fran García",
            position: "Left Back",
            nationality: "Spain",
            number: 20,
            age: 24,
            joined: 2023,
            height: "169 cm",
            weight: "67 kg",
            matches: 35,
            goals: 2,
            assists: 5,
            bio: "Attacking left back who provides width and crossing ability. Product of Real Madrid's academy.",
            image: "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250091175.webp",
            stats: {
                pace: 89,
                defending: 78,
                physical: 75,
                dribbling: 84,
                crossing: 86
            },
            honors: [
                "UEFA Champions League: 2023-24",
                "La Liga: 2023-24"
            ]
        },
        {
            id: 9,
            name: "Antonio Rüdiger",
            position: "Center Back",
            nationality: "Germany",
            number: 22,
            age: 31,
            joined: 2022,
            height: "190 cm",
            weight: "85 kg",
            matches: 90,
            goals: 5,
            bio: "Physical defender who has become a key player. Excellent in the air and in one-on-one situations.",
            image: "img/Antonio Rüdiger.png",
            stats: {
                pace: 77,
                defending: 87,
                physical: 89,
                aggression: 90,
                heading: 88
            },
            honors: [
                "UEFA Champions League: 2023-24",
                "La Liga: 2023-24"
            ]
        },
        {
            id: 10,
            name: "Ferland Mendy",
            position: "Left Back",
            nationality: "France",
            number: 23,
            age: 29,
            joined: 2019,
            height: "180 cm",
            weight: "73 kg",
            matches: 150,
            goals: 6,
            assists: 12,
            bio: "Solid defensive left back with excellent pace. Has improved his attacking contributions.",
            image: "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250112803.webp",
            stats: {
                pace: 88,
                defending: 83,
                physical: 79,
                dribbling: 85,
                stamina: 86
            },
            honors: [
                "UEFA Champions League: 2021-22, 2023-24",
                "La Liga: 2021-22, 2023-24"
            ]
        },
        {
            id: 11,
            name: "Lorenzo Aguado",
            position: "Defender",
            nationality: "Spain",
            number: 41,
            age: 19,
            joined: 2023,
            height: "183 cm",
            weight: "75 kg",
            matches: 2,
            bio: "Young defender from the academy who has been training with the first team. Can play as center back or right back.",
            image: "https://assets.laliga.com/squad/2024/t186/p511515/2048x2225/p511515_t186_2024_1_001_000.png",
            stats: {
                pace: 76,
                defending: 72,
                physical: 74,
                passing: 70,
                potential: 82
            },
            honors: []
        }
    ],
    midfielders: [
        {
            id: 12,
            name: "Jude Bellingham",
            position: "Midfielder",
            nationality: "England",
            number: 5,
            age: 21,
            joined: 2023,
            height: "186 cm",
            weight: "75 kg",
            matches: 45,
            goals: 23,
            assists: 12,
            bio: "Became an instant superstar after joining from Dortmund. Complete midfielder who scores and creates goals.",
            image: "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250128377.webp",
            stats: {
                dribbling: 89,
                passing: 88,
                shooting: 86,
                physical: 87,
                potential: 95
            },
            honors: [
                "UEFA Champions League: 2023-24",
                "La Liga: 2023-24",
                "Golden Boy: 2023"
            ]
        },
        {
            id: 13,
            name: "Eduardo Camavinga",
            position: "Midfielder",
            nationality: "France",
            number: 12,
            age: 21,
            joined: 2021,
            height: "182 cm",
            weight: "68 kg",
            matches: 135,
            goals: 3,
            assists: 7,
            bio: "Versatile midfielder who can also play left back. Excellent technical ability and composure.",
            image: "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250128270.webp",
            stats: {
                dribbling: 86,
                passing: 85,
                versatility: 89,
                composure: 85,
                tackling: 81
            },
            honors: [
                "UEFA Champions League: 2021-22, 2023-24",
                "La Liga: 2021-22, 2023-24"
            ]
        },
        {
            id: 14,
            name: "Federico Valverde",
            position: "Midfielder",
            nationality: "Uruguay",
            number: 8,
            age: 26,
            joined: 2016,
            height: "182 cm",
            weight: "78 kg",
            matches: 250,
            goals: 22,
            assists: 20,
            bio: "Energetic box-to-box midfielder with a powerful shot. Can play centrally or on the right wing.",
            image: "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250101284.webp",
            stats: {
                pace: 87,
                shooting: 83,
                stamina: 91,
                dribbling: 85,
                defending: 79
            },
            honors: [
                "UEFA Champions League: 2021-22, 2023-24",
                "La Liga: 2021-22, 2023-24"
            ]
        },
        {
            id: 15,
            name: "Luka Modrić",
            position: "Midfielder",
            nationality: "Croatia",
            number: 10,
            age: 38,
            joined: 2012,
            height: "172 cm",
            weight: "66 kg",
            matches: 520,
            goals: 37,
            assists: 77,
            bio: "Club legend who continues to perform at the highest level. Master of midfield control and creativity.",
            image: "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/74699.webp",
            stats: {
                passing: 91,
                vision: 93,
                dribbling: 88,
                stamina: 83,
                shooting: 78
            },
            honors: [
                "UEFA Champions League: 2013-14, 2015-16, 2016-17, 2017-18, 2021-22, 2023-24",
                "Ballon d'Or: 2018"
            ]
        },
        {
            id: 16,
            name: "Aurélien Tchouaméni",
            position: "Midfielder",
            nationality: "France",
            number: 18,
            age: 24,
            joined: 2022,
            height: "187 cm",
            weight: "81 kg",
            matches: 85,
            goals: 4,
            assists: 6,
            bio: "Dominant defensive midfielder who breaks up play and starts attacks. Key player for both club and country.",
            image: "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250105244.webp",
            stats: {
                tackling: 88,
                interceptions: 87,
                passing: 86,
                physical: 89,
                positioning: 86
            },
            honors: [
                "UEFA Champions League: 2023-24",
                "La Liga: 2023-24"
            ]
        },
        {
            id: 17,
            name: "Arda Güler",
            position: "Midfielder",
            nationality: "Turkey",
            number: 24,
            age: 19,
            joined: 2023,
            height: "176 cm",
            weight: "70 kg",
            matches: 15,
            goals: 3,
            assists: 2,
            bio: "Young playmaker with incredible technical ability. Expected to have a breakout season in 2024-25.",
            image: "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250161881.webp",
            stats: {
                dribbling: 88,
                passing: 86,
                vision: 87,
                flair: 90,
                potential: 93
            },
            honors: [
                "UEFA Champions League: 2023-24"
            ]
        },
        {
            id: 18,
            name: "Lucas Vázquez",
            position: "Midfielder",
            nationality: "Spain",
            number: 17,
            age: 32,
            joined: 2015,
            height: "173 cm",
            weight: "70 kg",
            matches: 350,
            goals: 35,
            assists: 60,
            bio: "Versatile player who can play as right back or right winger. Provides experience and work rate.",
            image: "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250040521.webp",
            stats: {
                pace: 80,
                crossing: 84,
                stamina: 86,
                workRate: 88,
                versatility: 85
            },
            honors: [
                "UEFA Champions League: 2015-16, 2016-17, 2017-18, 2021-22, 2023-24",
                "La Liga: 2016-17, 2019-20, 2021-22, 2023-24"
            ]
        },
        {
            id: 19,
            name: "Dani Ceballos",
            position: "Midfielder",
            nationality: "Spain",
            number: 19,
            age: 27,
            joined: 2017,
            height: "179 cm",
            weight: "74 kg",
            matches: 120,
            goals: 8,
            assists: 12,
            bio: "Creative midfielder who provides depth in the squad. Good dribbler and passer of the ball.",
            image: "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250086709.webp",
            stats: {
                dribbling: 85,
                passing: 84,
                vision: 83,
                flair: 86,
                stamina: 79
            },
            honors: [
                "UEFA Champions League: 2021-22, 2023-24",
                "La Liga: 2021-22, 2023-24"
            ]
        },
        {
            id: 20,
            name: "Brahim Díaz",
            position: "Midfielder",
            nationality: "Spain",
            number: 21,
            age: 24,
            joined: 2019,
            height: "171 cm",
            weight: "69 kg",
            matches: 60,
            goals: 8,
            assists: 7,
            bio: "Creative attacker who can play as winger or attacking midfielder. Excellent dribbler with an eye for goal.",
            image: "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250088039.webp",
            stats: {
                dribbling: 87,
                agility: 89,
                passing: 83,
                flair: 88,
                vision: 84
            },
            honors: [
                "UEFA Champions League: 2023-24",
                "La Liga: 2023-24"
            ]
        }
    ],
    forwards: [
        {
            id: 21,
            name: "Vinícius Júnior",
            position: "Forward",
            nationality: "Brazil",
            number: 7,
            age: 24,
            joined: 2018,
            height: "176 cm",
            weight: "73 kg",
            matches: 260,
            goals: 75,
            assists: 70,
            bio: "One of the most dangerous attackers in world football. Combines incredible dribbling with improved finishing.",
            image: "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250121533.webp",
            stats: {
                pace: 96,
                dribbling: 94,
                shooting: 85,
                flair: 92,
                agility: 95
            },
            honors: [
                "UEFA Champions League: 2021-22, 2023-24",
                "La Liga: 2021-22, 2023-24"
            ]
        },
        {
            id: 22,
            name: "Rodrygo",
            position: "Forward",
            nationality: "Brazil",
            number: 11,
            age: 23,
            joined: 2019,
            height: "174 cm",
            weight: "64 kg",
            matches: 210,
            goals: 45,
            assists: 35,
            bio: "Versatile forward who can play across the front line. Known for his clutch performances in big games.",
            image: "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250132829.webp",
            stats: {
                pace: 89,
                dribbling: 88,
                shooting: 83,
                composure: 87,
                positioning: 84
            },
            honors: [
                "UEFA Champions League: 2021-22, 2023-24",
                "La Liga: 2021-22, 2023-24"
            ]
        },
        {
            id: 23,
            name: "Kylian Mbappé",
            position: "Forward",
            nationality: "France",
            number: 9,
            age: 25,
            joined: 2024,
            height: "178 cm",
            weight: "73 kg",
            matches: 0,
            goals: 0,
            assists: 0,
            bio: "World-class forward who joined as a free agent from PSG. One of the best players in the world with incredible speed and finishing.",
            image: "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250076574.webp",
            stats: {
                pace: 97,
                dribbling: 93,
                shooting: 92,
                positioning: 90,
                potential: 95
            },
            honors: [
                "World Cup: 2018 (France)",
                "UEFA Nations League: 2021 (France)",
                "Ligue 1: 2016-17, 2017-18, 2018-19, 2019-20, 2021-22, 2022-23 (PSG)"
            ]
        },
        {
            id: 24,
            name: "Endrick",
            position: "Forward",
            nationality: "Brazil",
            number: 16,
            age: 18,
            joined: 2024,
            height: "173 cm",
            weight: "70 kg",
            matches: 0,
            goals: 0,
            assists: 0,
            bio: "Highly talented young striker who joined from Palmeiras. Considered one of the most promising players in world football.",
            image: "https://img.uefa.com/imgml/TP/players/1/2025/cutoff/250194573.webp",
            stats: {
                pace: 88,
                dribbling: 87,
                shooting: 82,
                potential: 94,
                flair: 89
            },
            honors: [
                "Campeonato Brasileiro: 2022, 2023 (Palmeiras)"
            ]
        },
        {
            id: 25,
            name: "Gonzalo",
            position: "Forward",
            nationality: "Spain",
            number: 32,
            age: 19,
            joined: 2023,
            height: "180 cm",
            weight: "72 kg",
            matches: 2,
            goals: 0,
            bio: "Young forward from the academy who has shown promise in Castilla. Provides depth in attack.",
            image: "https://cdn-headshots.theathletic.com/soccer/UWKyBhR4Yj1eRuYU_200x200.png",
            stats: {
                pace: 82,
                dribbling: 78,
                shooting: 75,
                potential: 84,
                flair: 80
            },
            honors: []
        }
    ]
};

// Staff Data for 2024-25 season
const staffDetails = {
    coach: {
        name: "Carlo Ancelotti",
        role: "Head Coach",
        nationality: "Italy",
        since: "2021 (2nd spell)",
        dob: "June 10, 1959",
        previousClubs: ["AC Milan", "Chelsea", "Paris Saint-Germain", "Bayern Munich", "Napoli", "Everton"],
        bio: "Extended his contract after winning back-to-back Champions League titles. The most successful manager in Champions League history with 5 titles. Known for his man-management skills and tactical flexibility.",
        image: "https://imageio.forbes.com/specials-images/imageserve/658bf162a52091ea730e57a0/Real-Madrid-manager-Carlo-Ancelotti-explained-that-he-will-retire-at-the-club-/960x0.jpg?format=jpg&width=960",
        achievements: [
            "UEFA Champions League: 2021–22, 2023–24 (Real Madrid), 2002–03, 2006–07 (AC Milan)",
            "La Liga: 2021–22, 2023–24 (Real Madrid)",
            "Premier League: 2009–10 (Chelsea)",
            "Bundesliga: 2016–17 (Bayern Munich)"
        ],
        stats: {
            matches: 1350,
            wins: 810,
            winPercentage: "60%"
        }
    },
    assistant: {
        name: "Davide Ancelotti",
        role: "Assistant Coach",
        nationality: "Italy",
        since: "2021",
        dob: "July 22, 1989",
        previousClubs: ["Bayern Munich", "Napoli", "Everton"],
        bio: "Son of Carlo Ancelotti, has become one of the most highly-rated young coaches in football. Plays a key tactical role in the coaching staff and has been linked with several head coach positions.",
        image: "https://static01.nyt.com/athletic/uploads/wp/2024/05/27121251/DavideAncelotti.jpg?width=1200&height=1200&fit=cover",
        achievements: [
            "UEFA Champions League: 2021–22, 2023–24",
            "La Liga: 2021–22, 2023–24"
        ]
    },
    president: {
        name: "Florentino Pérez",
        role: "Club President",
        nationality: "Spain",
        since: "2009 (2nd spell, first from 2000-2006)",
        dob: "March 8, 1947",
        background: "Civil engineer and construction magnate (ACS Group)",
        bio: "Oversaw the signing of Kylian Mbappé and continues to build one of the strongest squads in football history. Also instrumental in the Santiago Bernabéu renovation and the new Super League project.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_ApDsqFjbMcEjQ4iRKF2EYiaFXV1eeG_4dk_SmwyPnxzN8uh5AIQxLL7fDNucLWy5vc&usqp=CAU",
        achievements: [
            "15 UEFA Champions League titles (7 under his presidency)",
            "Multiple La Liga titles",
            "Santiago Bernabéu modernization project",
            "Creation of women's football section"
        ],
        financials: {
            revenue: "€800m (2024)",
            valuation: "€5.8b (Forbes)",
            socialMedia: "200M+ followers"
        }
    }
};

// Load players on page load
document.addEventListener('DOMContentLoaded', function() {
    loadPlayersByPosition('goalkeepers', 'goalkeepersContainer');
    loadPlayersByPosition('defenders', 'defendersContainer');
    loadPlayersByPosition('midfielders', 'midfieldersContainer');
    loadPlayersByPosition('forwards', 'forwardsContainer');
});

// Function to load players by position
function loadPlayersByPosition(position, containerId) {
    const container = document.getElementById(containerId);
    
    players[position].forEach(player => {
        const col = document.createElement('div');
        col.className = 'col-lg-3 col-md-4 col-sm-6 mb-4';
        
        col.innerHTML = `
            <div class="card player-card h-100">
                <div class="position-badge">${player.position}</div>
                <img src="${player.image}" class="card-img-top player-img" alt="${player.name}" onerror="this.src='https://via.placeholder.com/300x400?text=${player.name.replace(' ', '+')}'">
                <div class="card-body text-center">
                    <h5 class="card-title">${player.name}</h5>
                    <p class="card-text">#${player.number} | ${player.nationality}</p>
                    <button class="btn btn-gold" onclick="showPlayerDetails(${player.id}, '${position}')">VIEW PROFILE</button>
                </div>
            </div>
        `;
        
        container.appendChild(col);
    });
}

// Function to show player details in modal
function showPlayerDetails(playerId, positionType) {
    // Find player in the correct position array
    let player;
    for (const pos in players) {
        const foundPlayer = players[pos].find(p => p.id === playerId);
        if (foundPlayer) {
            player = foundPlayer;
            break;
        }
    }
    
    if (!player) return;
    
    document.getElementById('playerModalTitle').textContent = `${player.name} - #${player.number}`;
    
    const modalBody = document.getElementById('playerModalBody');
    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-4">
                <img src="${player.image}" class="img-fluid rounded mb-3" alt="${player.name}" onerror="this.src='https://via.placeholder.com/300x400?text=${player.name.replace(' ', '+')}'">
                <div class="player-stats">
                    <h5 class="madrid-font text-center mb-3">PLAYER INFO</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <span><i class="fas fa-user me-2"></i><strong>Full Name:</strong></span>
                            <span>${player.name}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <span><i class="fas fa-tshirt me-2"></i><strong>Position:</strong></span>
                            <span>${player.position}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <span><i class="fas fa-flag me-2"></i><strong>Nationality:</strong></span>
                            <span>${player.nationality}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <span><i class="fas fa-birthday-cake me-2"></i><strong>Age:</strong></span>
                            <span>${player.age}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <span><i class="fas fa-ruler-vertical me-2"></i><strong>Height:</strong></span>
                            <span>${player.height}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <span><i class="fas fa-weight me-2"></i><strong>Weight:</strong></span>
                            <span>${player.weight}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <span><i class="fas fa-calendar-alt me-2"></i><strong>Joined:</strong></span>
                            <span>${player.joined}</span>
                        </li>
                        ${player.matches ? `
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <span><i class="fas fa-futbol me-2"></i><strong>Matches:</strong></span>
                            <span>${player.matches}</span>
                        </li>
                        ` : ''}
                        ${player.goals ? `
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <span><i class="fas fa-bullseye me-2"></i><strong>Goals:</strong></span>
                            <span>${player.goals}</span>
                        </li>
                        ` : ''}
                        ${player.assists ? `
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <span><i class="fas fa-assistive-listening-systems me-2"></i><strong>Assists:</strong></span>
                            <span>${player.assists}</span>
                        </li>
                        ` : ''}
                        ${player.cleanSheets ? `
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <span><i class="fas fa-shield-alt me-2"></i><strong>Clean Sheets:</strong></span>
                            <span>${player.cleanSheets}</span>
                        </li>
                        ` : ''}
                    </ul>
                </div>
            </div>
            <div class="col-md-8">
                <h5 class="madrid-font">BIOGRAPHY</h5>
                <p>${player.bio}</p>
                
                ${player.stats ? `
                <h5 class="madrid-font mt-4">PLAYER ATTRIBUTES</h5>
                <div class="player-stats">
                    ${Object.entries(player.stats).map(([stat, value]) => `
                    <div class="stat-item">
                        <div class="d-flex justify-content-between mb-1">
                            <span><strong>${stat.charAt(0).toUpperCase() + stat.slice(1)}:</strong></span>
                            <span>${value}</span>
                        </div>
                        <div class="stat-bar">
                            <div class="stat-progress" style="width: ${value}%"></div>
                        </div>
                    </div>
                    `).join('')}
                </div>
                ` : ''}
                
                ${player.honors ? `
                <h5 class="madrid-font mt-4">HONORS WITH REAL MADRID</h5>
                <div class="player-stats">
                    <ul class="honors-list">
                        ${player.honors.map(honor => `<li>${honor}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
            </div>
        </div>
    `;
    
    const playerModal = new bootstrap.Modal(document.getElementById('playerModal'));
    playerModal.show();
}

// Function to show staff details in modal
function showStaffDetails(staffType) {
    const staff = staffDetails[staffType];
    
    document.getElementById('staffModalTitle').textContent = `${staff.name} - ${staff.role}`;
    
    const modalBody = document.getElementById('staffModalBody');
    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-4">
                <img src="${staff.image}" class="img-fluid rounded mb-3" alt="${staff.name}">
                <div class="player-stats">
                    <h5 class="madrid-font text-center mb-3">PERSONAL INFO</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <span><i class="fas fa-user me-2"></i><strong>Full Name:</strong></span>
                            <span>${staff.name}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <span><i class="fas fa-portrait me-2"></i><strong>Role:</strong></span>
                            <span>${staff.role}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <span><i class="fas fa-flag me-2"></i><strong>Nationality:</strong></span>
                            <span>${staff.nationality}</span>
                        </li>
                        ${staff.dob ? `
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <span><i class="fas fa-birthday-cake me-2"></i><strong>Date of Birth:</strong></span>
                            <span>${staff.dob}</span>
                        </li>
                        ` : ''}
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <span><i class="fas fa-calendar-alt me-2"></i><strong>With Club Since:</strong></span>
                            <span>${staff.since}</span>
                        </li>
                        ${staff.previousClubs ? `
                        <li class="list-group-item">
                            <span><i class="fas fa-history me-2"></i><strong>Previous Clubs:</strong></span>
                            <div class="mt-2">${staff.previousClubs.join(', ')}</div>
                        </li>
                        ` : ''}
                        ${staff.stats ? `
                        <li class="list-group-item">
                            <span><i class="fas fa-chart-line me-2"></i><strong>Career Stats:</strong></span>
                            <div class="mt-2">
                                <span class="me-3"><strong>Matches:</strong> ${staff.stats.matches}</span>
                                <span class="me-3"><strong>Wins:</strong> ${staff.stats.wins}</span>
                                <span><strong>Win %:</strong> ${staff.stats.winPercentage}</span>
                            </div>
                        </li>
                        ` : ''}
                    </ul>
                </div>
            </div>
            <div class="col-md-8">
                <h5 class="madrid-font">BIOGRAPHY</h5>
                <p>${staff.bio}</p>
                
                ${staff.achievements ? `
                <h5 class="madrid-font mt-4">KEY ACHIEVEMENTS</h5>
                <div class="player-stats">
                    <ul class="honors-list">
                        ${staff.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                </div>
                ` : ''}
                
                ${staff.financials ? `
                <h5 class="madrid-font mt-4">CLUB FINANCIALS (UNDER PRESIDENCY)</h5>
                <div class="row">
                    <div class="col-md-4">
                        <div class="card bg-light mb-3">
                            <div class="card-body text-center">
                                <h5>€${staff.financials.revenue}</h5>
                                <p class="mb-0">Annual Revenue</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card bg-light mb-3">
                            <div class="card-body text-center">
                                <h5>€${staff.financials.valuation}</h5>
                                <p class="mb-0">Club Valuation</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card bg-light mb-3">
                            <div class="card-body text-center">
                                <h5>${staff.financials.socialMedia}</h5>
                                <p class="mb-0">Social Media Followers</p>
                            </div>
                        </div>
                    </div>
                </div>
                ` : ''}
            </div>
        </div>
    `;
    
    const staffModal = new bootstrap.Modal(document.getElementById('staffModal'));
    staffModal.show();
}