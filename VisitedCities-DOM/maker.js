//Display your trips on the Dom, styled in cards. City name should appear above the image, in a larger font size, with all other details below the image
// Filter the cards based on specific year visited, or all cities

const visitedCitiesRef = document.querySelector("#visitedCities")

const fragment = document.createDocumentFragment()
/*
    This function's reponsibility is to generate DOM components
    that are HTML representations of the cities data
*/

const citiesDomBuilder = (year, prop) => {

    //click function for search feature

    // Create a block element that will hold three city components
    let row = document.createElement("div")
    row.className = "citiesRow"

    /*
        Iterate over the array of cities in the database that was
        retrieved from localStorage in database.js
    */
    citiesDatabase.cities.forEach(
        (currentCity, travel) => {

            /*
                When three city components have been added to the
                parent div, append the current div to the top-level
                article and create a new div
            */
            if (travel !== 0 && row.childNodes.length % 3 === 0) {
                visitedCitiesRef.appendChild(row)
                row = document.createElement("div")
                row.className = "citiesRow"
            }

            /*
                Display cities
            */
            if (!year || year === currentCity.year) {

                // Section first
                const citySection = document.createElement("span")
                citySection.classList = "bordered city"

                // h2 child component of section - name
                const cityName = document.createElement("h2")
                cityName.classList = "city-name"
                cityName.textContent = currentCity.name
                citySection.appendChild(cityName)

                // p child component of section - year
                const cityYear = document.createElement("p")
                cityYear.classList = "city-year"
                cityYear.textContent = `Year visited: ${currentCity.year}`
                citySection.appendChild(cityYear)

                // img child component of section - img
                const cityImg = document.createElement("img")
                cityImg.classList = "city-img"
                cityImg.src = `${currentCity.image}`
                citySection.appendChild(cityImg)

                // p child component of section - attrations
                const cityUl = document.createElement("ul")
                for (let i = 0; i < currentCity.attractions.length; i++) {
                    for (a in currentCity.attractions[i]) {
                        const cityAtt = document.createElement("li")
                        cityAtt.classList = "city-att"
                        cityAtt.textContent = currentCity.attractions[i][a]
                        cityAtt.appendChild(cityUl)
                        citySection.appendChild(cityAtt)
                    }
                }

                //Ended up having to make an individual if statement for each city. I tried using the || operator but it added the class to every card that way.
                if (currentCity.continent === "asia") {
                    citySection.classList.add("asia")
                }

                if (currentCity.continent === "australia") {
                    citySection.classList.add("australia")
                }

                if (currentCity.continent === "europe") {
                    citySection.classList.add("europe")
                }

                if (currentCity.continent === "northAmerica") {
                    citySection.classList.add("northAmerica")
                }


                // Append HTML representation of city to the DOM
                row.appendChild(citySection)
            }
        }
    )

    // Just in case there are an exact multiple of 3 cities, add the last row
    if (row.childNodes.length) {
        visitedCitiesRef.appendChild(fragment)
    }

}

citiesDomBuilder()

//JQUERY FILTERING

//jquery to filter and show only 2016
$("#button2016").click(function () {
    $(".citiesRow").detach();
    (citiesDomBuilder("2016"))
});

//jquery to filter and show only 2017
$("#button2017").click(function () {
    $(".citiesRow").detach();
    (citiesDomBuilder("2017"))
});

//jquery to filter and show only 2017
$("#buttonAll").click(function () {
    $(".citiesRow").detach();
    (citiesDomBuilder())
});


//function to get rid of duplicate elements after prepend is run on continents
const deleteDuplicates = (continent) => {
    var seen = {};
    $(continent).each(function () {
        var txt = $(this).text();
        if (seen[txt])
            $(this).remove();
        else
            seen[txt] = true;
    });
}
//JQUERY FILTERING CONTINENTS
//filter Asia                        
$("#asia").change(function () {
    if ($("#asia").is(":checked")) {
        $(".citiesRow").detach();

        (citiesDomBuilder())

        $(".citiesRow").prepend($(".asia"));

        $(".australia").remove();
        $(".europe").remove();
        $(".northAmerica").remove();

        deleteDuplicates(".asia");
    }
});

//filter Australia                          
$("#australia").change(function () {
    if ($("#australia").is(":checked")) {
        $(".citiesRow").detach();
        (citiesDomBuilder())

        $(".citiesRow").prepend($(".australia"));

        $(".asia").detach();
        $(".europe").detach();
        $(".northAmerica").detach();

        deleteDuplicates(".australia");
    }
});

//filter Europe                       
$("#europe").change(function () {
    if ($("#europe").is(":checked")) {
        $(".citiesRow").detach();
        (citiesDomBuilder())

        $(".city").prepend($(".europe"));

        $(".asia").detach();
        $(".australia").detach();
        $(".northAmerica").detach();

        deleteDuplicates(".europe");
    }
});

//filter North America                         
$("#northAmerica").change(function () {
    if ($("#northAmerica").is(":checked")) {
        $(".citiesRow").detach();
        (citiesDomBuilder())

        $(".city").prepend($(".northAmerica"));

        $(".australia").detach();
        $(".europe").detach();
        $(".asia").detach();

        deleteDuplicates(".northAmerica");
    }
});