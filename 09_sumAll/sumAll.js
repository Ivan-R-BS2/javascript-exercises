const sumAll = function(s, e) {
    let start =s;
    let end = e;
    if(s>e){start = e;
        end = s; 
    }
    let z =0;
    for(let i =start; i<end+1; i++){
        z+=i;
    }
    return z;

};

// Do not edit below this line
module.exports = sumAll;
