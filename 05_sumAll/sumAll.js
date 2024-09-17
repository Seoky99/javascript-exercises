const sumAll = function(startNum, endNum) {

    let sum=0; 

    if (startNum > endNum) {
        
        let t = startNum; 
        startNum = endNum; 
        endNum = t;
    }

    if ((typeof startNum !== "number") || (typeof endNum !== "number")) {
        return "ERROR";
    }

    for (let start=startNum; start<=endNum; start++) {
        sum += start; 
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
