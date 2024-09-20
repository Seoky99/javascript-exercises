const findTheOldest = function(people) {

    let object = people.reduce( (oldest, person) => {
        if ((oldest.yearOfDeath - oldest.yearOfBirth) < (person.yearOfDeath - person.yearOfBirth)) {
            return person; 
        } else {
            return oldest; 
        }
    })

    return object; 

};

// Do not edit below this line
module.exports = findTheOldest;
