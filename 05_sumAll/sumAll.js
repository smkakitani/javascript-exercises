const sumAll = function(numStart, numEnd) {
    let total = 0;

    if (typeof numStart !== 'number' || typeof numEnd !== 'number') {
        return 'ERROR';
    }

    if (numStart < 0 || numEnd < 0) {
        return 'ERROR';    
    } 
    
    if (numStart < numEnd) {
        for (let i = numStart; i <= numEnd; i++) {
            total += i;
        }
        return total;
    }

    if (numStart > numEnd) {
        for (let i = numEnd; i <= numStart; i++) {
            total += i;
        }
        return total;
    }

};

// Do not edit below this line
module.exports = sumAll;
