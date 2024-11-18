const findTheOldest = function(people) {
    let oldestPeople = people.toSorted((a, b) => {
        if (!a.yearOfDeath) a.yearOfDeath = (new Date().getFullYear());
        if (!b.yearOfDeath) b.yearOfDeath = (new Date().getFullYear());
        
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
    });

    return oldestPeople[0];
};

// if (a.yearOfDeath === "") {
//     let [aFirst, aLast] = (new Date().getFullYear()) - a.yearOfBirth;
// } else {
//     let [aFirst, aLast] = a.yearOfDeath - a.yearOfBirth;
// }

// if (b.yearOfDeath === "") {
//     let [bFirst, bLast] = (new Date().getFullYear()) - b.yearOfBirth;
// } else {
//     let [bFirst, bLast] = b.yearOfDeath - b.yearOfBirth;
// }

// Do not edit below this line
module.exports = findTheOldest;