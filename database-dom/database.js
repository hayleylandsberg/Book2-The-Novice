// In your JavaScript file, load your home inventory from local storage.
// Iterate over every data set in the database and create a <section> component.
// That component itself should contain three <p> components. One for the name, location, and description.
// Attach the p components as children of the section.
// Attach the section as a child of the article.

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

console.log(loadDatabase("HomeInventory"));
HomeInventoryDatabase = loadDatabase("HomeInventory")

//CORRECT CODE FROM CLASS - LESS CODE
let inventoryEl = document.querySelector("#myStuff")

for (let type in HomeInventoryDatabase) {
    const currentTypeArray = HomeInventoryDatabase[type]

    currentTypeArray.forEach(itemInArray => {
        const sectionElement = document.createElement("section")

        for (let prop in itemInArray) {
            const pComponent = document.createElement("p")
            pComponent.textContent = itemInArray[prop]
            sectionElement.appendChild(pComponent)
        }
        
        inventoryEl.appendChild(sectionElement)
    });
}





//CODE I DID, THAT PRINTS, BUT NOT THE WAY IT NEEDS TO

//let listElement = document.getElementById("myStuff")

// const getItems = (key, property) => {
//     for (let i = 0; i < HomeInventoryDatabase[key].length; i++) {
//         let sectionElement = document.createElement("section")
//         let textNode = document.createTextNode(HomeInventoryDatabase[key][i][property])
//         sectionElement.appendChild(textNode)
//         listElement.appendChild(sectionElement)
//     }
// }

// getItems("AJitem", "name")
// getItems("AJitem", "description")
// getItems("AJitem", "location")

// getItems("furniture", "name")
// getItems("furniture", "description")
// getItems("furniture", "location")

// getItems("electronics", "name")
// getItems("electronics", "description")
// getItems("electronics", "location")



//CORRECT CODE FROM CLASS
// let inventoryEl = document.querySelector("#myStuff")

// for (let type in HomeInventoryDatabase) {
//     const currentTypeArray = HomeInventoryDatabase[type]

//     currentTypeArray.forEach(itemInArray => {
//         const sectionElement = document.createElement("section")
        
//         const nameP = document.createElement("p")
//         nameP.textContent = itemInArray.name
//         sectionElement.appendChild(nameP)

//         const locationP = document.createElement("p")
//         locationP.textContent = itemInArray.location
//         sectionElement.appendChild(locationP)

//         const descriptionP = document.createElement("p")
//         descriptionP.textContent = itemInArray.description
//         sectionElement.appendChild(descriptionP)

//         inventoryEl.appendChild(sectionElement)
//     });
// }




//GRABS AJitem LOCATION
// const getItems = () => {
//     for (let i = 0; i < HomeInventoryDatabase.AJitem.length; i++) {
//         let sectionElement = document.createElement("section")
//         let textNode = document.createTextNode(HomeInventoryDatabase.AJitem[i].location)
//         sectionElement.appendChild(textNode)
//         listElement.appendChild(sectionElement)
//     }
// }

// getItems("");
