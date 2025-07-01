const findTheOldest = function(people) {

    let oln;
    let olda = 0;
    let tmp;
    for (p in people){
        people[p].yearOfDeath === undefined ? tmp = (2025 - people[p].yearOfBirth) : tmp = (people[p].yearOfDeath - people[p].yearOfBirth); 
        if (tmp > olda){
            oln = people[p];
            olda = tmp;
        }
    }

    return oln;


};

// Do not edit below this line
module.exports = findTheOldest;
