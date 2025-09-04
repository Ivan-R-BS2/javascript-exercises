const repeatString = (word , amount) => {
    if(amount<0){
        return "ERROR";
    }

    let z = "";
    for(let i =0; i<amount; i++){
        z += word;
    }
    return z;
};

// Do not edit below this line
module.exports = repeatString;
