const reverseString = function(stringInput) {

    reversed = "";

    for (const x of stringInput) {
        reversed = x + reversed; 
    }

    return reversed; 

};

// Do not edit below this line
module.exports = reverseString;
