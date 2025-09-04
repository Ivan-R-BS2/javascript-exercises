const reverseString = function(word) {
    let z = "";
    const amount = word.length;
    for(let i =0; i<amount; i++){
        z+=word[amount-i-1];
    }
    return z;

};

// Do not edit below this line
module.exports = reverseString;
