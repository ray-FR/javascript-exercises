const repeatString = function(S, n) {
    if (n < 0){
        return 'ERROR';
    }
    else{
        let reps = "";
        for (let i = 0; i < n; i++){
            reps = reps+S;
        }
        return reps;
    }
};

// Do not edit below this line
module.exports = repeatString;
