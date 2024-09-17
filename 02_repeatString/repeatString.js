const repeatString = function(repeater, times) {

    let base = '';

    if (times < 0) {
        return "ERROR";
    }

    for (let i = 0; i < times; i++) {
        base = base + repeater; 
    }

    return base; 
};

// Do not edit below this line
module.exports = repeatString;
