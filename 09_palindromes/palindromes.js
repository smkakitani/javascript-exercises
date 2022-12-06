const palindromes = function (string) {
    const arrayFromString = Array.from(string.toLowerCase()).filter(x => x >= "a" && x <= "z");
    const stringLetters = arrayFromString.join("");
    const reversedString = arrayFromString.reverse().join("");
    
    if (stringLetters === reversedString) {
        return true;
    } else {
        return false;
    }
    // console.log(stringLetters);
    // console.log(reversedString);
};

// Do not edit below this line
module.exports = palindromes;
