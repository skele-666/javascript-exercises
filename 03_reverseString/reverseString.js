const reverseString = function(string) {
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    let reverseString = reverseArray.join("");
    return reverseString;
    // Okay I could've done this... return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
