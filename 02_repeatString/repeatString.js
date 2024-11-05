const repeatString = function(string, num) {
    /* let i = 0;
    let str = '';
    while (i < num) {
        if (i !== (num - 1)) {
            i++;
            continue;
        } else {
            return str = string * Number(i);
        }
    } ---> incorrect code */
    let str = '';
    if (num < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < num; i++) {
        str += string;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
