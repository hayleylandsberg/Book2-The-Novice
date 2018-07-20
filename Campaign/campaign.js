const district = Object.create ({}, {
    dist: {
        value: 5,
        enumerable: true,
        writable: true
    }
})

const platform = Object.create ({}, {
    taxes: {
        value: "Tax platform",
        enumerable: true,
        writable: true
    },
    jobs: {
        value: "Job platform",
        enumerable: true,
        writable: true
    },
    infrastructure: {
        value: "Infrastructure platform",
        enumerable: true,
        writable: true
    },
    healthCare: {
        value: "Healthcare platform",
        enumerable: true,
        writable: true
    },
    crime: {
        value: "Crime platform",
        enumerable: true,
        writable: true
    }
})

const donation = Object.create ({}, {
    url: {
        value: "www.donatemoneytoday.com",
        enumerable: true,
        writable: true
    }
})

const calendar = {
    events: [
        {
            date: "10/03/2018",
            title: "Rally for Elizabeth",
            description: "Why I deserve your vote"
        }
    ]
}

const volunteerInfo = {
    volunteer: [
        {
            name: "Jessica Small",
            address: "123 Main Street Franklin, TN 37067",
            email: "jessicasmall@gmail.com",
            phone: "615-897-3243",
            availability: "M, T, W, T, F",
            activities: "admin"
        }
    ]
}

const biography = Object.create ({}, {
    information: {
        value: "Elizabeth was born in a small town in rural Eastern Tennessee. She loved to ride horses and skip through the wide open fields. After moving to Nashville for college in the late 70's, her appreciation grew for the city.",
        enumerable: true,
        writable: true
    }
})

const imageGallery = Object.create ({}, {
    headShot: {
        value: "picture.jpg",
        enumerable: true,
        writable: true
    },
    family: {
        value: "picture2.jpg",
        enumerable: true,
        writable: true
    },
    constituents: {
        value: "picture3.jpg",
        enumerable: true,
        writable: true
    }
})

const missionStatement = Object.create ({}, {
    mission: {
        value: "Here for you",
        enumerable: false,
        writable: true
    }
})

const register = Object.create ({}, {
    url: {
        value: "www.registertovote.com",
        enumerable: true,
        writable: true}
})


//Functions changing the Objects

//Changing the district
const changeDistrict = (key, update) => {
    district["key"] = update
    console.log(district["key"])
}
changeDistrict("dist", 4);


//Changing the platform
const changePlatform = (key, update) => {
    platform["key"] = update
    console.log(platform["key"])
}
changePlatform("taxes", "No taxes!");


//Changing the donation
const changeDonation= (key, update) => {
    donation["key"] = update
    console.log(donation["key"])
}
changeDonation("url", "www.highfive.com");


//Changing the calendar
const changeCalendar= (key, update) => {
    calendar["key"] = update
    console.log(calendar["key"])
}
changeDonation("events.date", "07/08/2018");


//Changing the volunteer info
const changeVolunteer= (key, update) => {
    volunteerInfo["key"] = update
    console.log(volunteerInfo["key"])
}
changeDonation("volunteer.name", "Heidi Nickels");


//Changing the biography
const changeBiography= (key, update) => {
    biography["key"] = update
    console.log(biography["key"])
}
changeDonation("information", "Elizabeth was from a small farming town and enjoyed playing with her dog Billy.");


//Changing the image
const changeImageGallery= (key, update) => {
    imageGallery["key"] = update
    console.log(imageGallery["key"])
}
changeImageGallery("family", "familyphoto.png");


//Changing the mission statement
const changeMission = (key, update) => {
    missionStatement["key"] = update
    console.log(missionStatement["key"])
}
changeMission("mission", "To change the world!");


//Changing the register
const changeRegister= (key, update) => {
    register["key"] = update
    console.log(register["key"])
}
changeRegister("url", "www.makemoney.com");

    

//CHALLENGE - USING JUST A FUNCTION
// let insertInDom = (obj) => {
// let targetDiv = document.getElementById("rep")
// let divElement = document.createElement("div");
// let textNode = document.createTextNode(obj);
// divElement.appendChild(textNode);
// targetDiv.appendChild(divElement)
// }

// insertInDom(platform.taxes)
// insertInDom(platform.jobs)
// insertInDom(platform.infrastructure)
// insertInDom(platform.healthCare)
// insertInDom(platform.crime)


//CHALLENGE - USING FOR LOOP
const objKey = [
    platform.taxes,
    platform.jobs,
    platform.infrastructure,
    platform.healthCare,
    platform.crime
];

for (let i = 0; i < objKey.length; i++) {
    let targetDiv = document.getElementById("rep")
    let divElement = document.createElement("div");
    let textNode = document.createTextNode(objKey[i]);
    divElement.appendChild(textNode);
    targetDiv.appendChild(divElement)
    }


    //EXAMPLE - HOW THEY DID THE CHALLENG

    // const modifyJest = (theObject, theProperty, theNewValue) => {
        // theObject[theProperty] = theNewValue
    // }
    // modifyJest(jest, "publishDate", "31 March 1997");



//ADVANCED CHALLENGE

// Get the first <article> element in the document
const grabArticle = document.getElementsByTagName("article")[0];   
// Create a "class" attribute
let districtNum = document.createAttribute("congressional-district");   
// Set the value of the class attribute
districtNum.value = "5";
// Add the class attribute to <article>
grabArticle.setAttributeNode(districtNum); 


//EXAMPLE - HOW THEY DID ADVANCED CHALLENGE

// const jest = {
//     title: "book",
//     author: "author"
// }

// const jestArticle = document.createElement("article")
// jestArticle.setAttribute("id", jest.title)
// jestArticle.textContent = jest.author


// Use document.createElement() to build an <article> element representing Elizabeth. The id property of the element should be her congressional district, and its content should be her platform data. Once the element has been created, insert it into the DOM.
