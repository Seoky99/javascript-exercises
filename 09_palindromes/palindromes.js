const palindromes = function (str) {

    str = str.replace(/[^\w\s\']|_/g, "")
         .replace(/\s+/g, " ");

    str = str.trim().toLowerCase();
    
    str = str.split('').filter((c) => c !== " ").join('');

    let l = 0;
    let r = str.length - 1; 

    while (l < r) {

        if (str.charAt(l) === str.charAt(r)) {
            l += 1;
            r -= 1;
        } else {
            return false; 
        }

    }
    return true; 
};

// Do not edit below this line
module.exports = palindromes;
