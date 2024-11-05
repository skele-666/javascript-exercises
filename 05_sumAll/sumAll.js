const sumAll = function(min, max) {
    // if (num1 < num2) {
    //     let sum = 0;
    //     for (let i = num1; i < num2; i++) {
    //         sum += (num1 + 1);
    //     }
    //     return sum;
    // } else if (num2 < num1) {
    //     let sum = 0;
    //     for (let i = num2; i < num1; i++) {
    //         sum += (num2 + 1);
    //     }
    //     return sum;
    // } else if (num1 == num2) {
    //     return num1 + num2;
    // } else {
    //     return 'ERROR';
    // }

    // Checks if both numbers are actually numbers
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return 'ERROR';
    }

    // Checks if both numbers are < 0
    if (min < 0 || max < 0) {
        return 'ERROR';
    }

    // Checks if min > max and reassigns variables if so
    if (min > max) {
        [min, max] = [max, min];
    }

    // For Loop
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
