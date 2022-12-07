const findTheOldest = function(people) {
    const currentYear = (new Date()).getFullYear();  
    const olderPerson = people.reduce((oldest, person) => ((person.yearOfDeath || currentYear) - person.yearOfBirth) > ((oldest.yearOfDeath || currentYear) - oldest.yearOfBirth) ? person : oldest);
    return olderPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
