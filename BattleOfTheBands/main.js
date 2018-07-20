let bandNumber = 0;

const takeNumber = function (bandName) {
   bandNumber += 1;
    console.log(`${bandNumber} ${bandName}`);
}

const scum = takeNumber("Galactic Scum");
const under = takeNumber("Underdogs");
const sun = takeNumber("Sunshine Band");