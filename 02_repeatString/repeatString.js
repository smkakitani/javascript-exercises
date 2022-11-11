const repeatString = function(string, num) {
    let repString = "";
    
    if (num < 0) {
        repString = "ERROR";
    } else {
        let i = 0;
        while (i < num) {
            repString = repString + string;
            i++;
        }
    }

    return repString;

};

repeatString();

// Do not edit below this line
module.exports = repeatString;
