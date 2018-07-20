// To practice working with data, you are going to build a home inventory program. You will create a database of unique, or cool, items in your home, their location, and why they are special. By the end of this practice exercise, you will be able to store a JSON database in the local storage of your browser so that it can be retrieved, and modified again, at any time in the future.

// Define the database as an object
const HomeInventoryDatabase = {}

// Define the arrays (a.k.a. tables) in the database to store each type of items
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.AJitem = []
HomeInventoryDatabase.electronics = []


//Time to create some data that will inserted into the database

// AJitem data items
const buddy = {
  name: "Buddy the stuffed dog",
  location: "living room",
  description: "This is AJ's favorite toy. Buddy is a teal stuffed dog"
}

const toyBasket = {
    name: "Toy Basket",
    location: "living room",
    description: "Where AJ stores all of his toys when he's not playing with them."
  }

const farmersDog = {
    name: "Farmers Dog Food",
    location: "kitchen",
    description: "AJ's fresh food."
  }

// furniture data items
const couch = {
  name: "Living Room Couch",
  location: "living room",
  description: "Very comfortable couch that blew the furniture budget, but we live on it."
}

const bed = {
    name: "Bed",
    location: "master bedroom",
    description: "Very comfortable bed that we sleep on."
  }

const barStools = {
    name: "Bar Stools",
    location: "kitchen",
    description: "Where Anthony works when he's at home."
  }

// electronics data items
const vitamix = {
    name: "Vitamix blender",
    location: "kitchen",
    description: "High tech blender that we couldn't live without"
  }

const macbookPro = {
    name: "Macbook Pro",
    location: "living room",
    description: "Hayley's computer that she's using 24/7"
  }

const nintendoSwitch = {
    name: "Nintendo Switch",
    location: "living room",
    description: "The Nintendo Switch is the entertainment in the house."
  }

const toaster = {
    name: "Toaster",
    location: "kitchen",
    description: "The toaster is a staple in our kitchen."
  }

// Add the data to the appropriate tables
HomeInventoryDatabase.AJitem.push(buddy, toyBasket, farmersDog)
HomeInventoryDatabase.furniture.push(couch, bed, barStools)
HomeInventoryDatabase.electronics.push(vitamix, macbookPro, nintendoSwitch, toaster)


const saveDatabase = function (databaseObject, localStorageKey) {
    //Convert the Object into a string.
    const stringifiedDatabase = JSON.stringify(databaseObject)

    // Create a key in local storage, and store the string
    // version of your inventory database as the value
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

// Persist the database to localStorage
saveDatabase(HomeInventoryDatabase, "HomeInventory") //<-- in quotes is just a description


const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

//CHALLENGE
//LOCATED IN DATABASE-DOM IN BOOK 2 FILE