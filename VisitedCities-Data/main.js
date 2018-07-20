// Student database creation
const citiesDatabase = {}

// Student table in database
citiesDatabase.cities = []

// Add students to the student table in the student database
citiesDatabase.cities.push(
    {
        name: "Sydney, Australia",
        year: "2016",
        image: "img/sydney.jpg",
        continent: "australia",
        attractions: [
            {
            att1: "Sydney Harbour Bridge Climb",
            att2: "Bondi Icebergs Pool", 
            att3: "Sydney Opera House Tour",
            att4: "Manly Ferry",
            att5: "Wendy's Secret Garden"
            }
        ]
    },
    {
        name: "Tokyo, Japan",
        year: "2017",
        image: "img/tokyo.jpg",
        continent: "asia",
        attractions: [
            {
            att1: "Tsukiji Market",
            att2: "Tokyo National Museum",
            att3: "Sensoji Temple",
            att4: "Imperial Palace",
            att5: "Ginza"
            }
        ]
    },
    {
        name: "Hong Kong",
        year: "2017",
        image: "img/hongkong.jpg",
        continent: "asia",
        attractions: [
            {
            att1: "Victoria Peak",
            att2: "Tian Tan Buddha",
            att3: "Tim Ho Wan",
            att4: "Star Ferry",
            att5: "Dragon's Back"
            }
        ]
    },
    {
        name: "Barcelona, Spain",
        year: "2017",
        image: "img/barcelona.jpg",
        continent: "europe",
        attractions: [
            {
            att1: "Gothic Quarter",
            att2: "La Sagrada Família",
            att3: "Casa Batlló",
            att4: "Catedral de Barcelona",
            att5: "Las Ramblas"
            }
        ]
    },
    {
        name: "Toronto, Canada",
        year: "2017",
        image: "img/toronto.jpg",
        continent: "northAmerica",
        attractions: [
            {
            att1: "CN Tower",
            att2: "Casa Loma",
            att3: "Royal Ontario Museum",
            att4: "Distillery District",
            att5: "Kensington Market"
            }
        ]
    },
    {
        name: "Denpasar, Bali",
        year: "2017",
        image: "img/denpasar.jpg",
        continent: "asia",
        attractions: [
            {
            att1: "Rock Bar",
            att2: "Padang Padang Beach",
            att3: "Sacred Monkey Forest",
            att4: "Campuhan Ridge Walk",
            att5: "Ulun Danu Temple"
            }
        ]
    },
    {
        name: "Hamilton Island, Australia",
        year: "2016",
        image: "img/hamilton.jpg",
        continent: "australia",
        attractions: [
            {
            att1: "Snorkel at Great Barrier Reef",
            att2: "Scuba Dive at Great Barrier Reef",
            att3: "Whitsunday Island",
            att4: "Hike Dolphin Peak",
            att5: "Helicopter Tour"
            }
        ]
    },
    {
        name: "Laucala, Fiji",
        year: "2016",
        image: "img/laucala.jpg",
        continent: "australia",
        attractions: [
            {
            att1: "Scuba Dive",
            att2: "Cooking Classes",
            att3: "Horseback Riding",
            att4: "Paddle Boarding",
            att5: "Submarine Ride"
            }
        ]
    },
    {
        name: "Bangkok, Thailand",
        year: "2017",
        image: "img/bangkok.jpg",
        continent: "asia",
        attractions: [
            {
            att1: "Grand Palace",
            att2: "Chatuchak Market",
            att3: "Chao Phraya River",
            att4: "Siam Paragon",
            att5: "Thai Massage"
            }
        ]
    },
    {
        name: "Singapore, Singapore",
        year: "2017",
        image: "img/singapore.jpg",
        continent: "asia",
        attractions: [
            {
            att1: "Art and Science Museum",
            att2: "Gardens by the Bay",
            att3: "Orchard Road",
            att4: "Marina Bay",
            att5: "Singapore Botanic Gardens"
            }
        ]
    }
)

// Save database to local storage
localStorage.setItem("citiesDatabase", JSON.stringify(citiesDatabase))

