function logging (message) {
    console.log(`${message}`);
}
logging("Hi there");


// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

let words = "";
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
let addExcitement = (theWordArray, symbol) => {
    for (var i = 0; i < theWordArray.length; i += 1) {
        if (i % 3 === 0 && i !== 0) {
            words += symbol.repeat(i/3);
        }

        words += theWordArray[i];
        console.log(words);
    }

}
// Invoke the function and pass in the array
addExcitement(sentence, "!")