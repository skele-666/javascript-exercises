const removeFromArray = function(array, ...values) {
    // For individual value
    // let index = array.indexOf(value);
    // return array.filter(num => num != value);
    let newArray = [];
    
    array.forEach((item) => {
        if (!values.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
