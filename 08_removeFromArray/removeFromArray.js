const removeFromArray = function(l, ...args) {
    let newarr = [];
    
    for (let i = 0; i < l.length; i++){
        if (!args.includes(l[i])){
            newarr.push(l[i]);
        }
    }
    

    return newarr;
};

// Do not edit below this line
module.exports = removeFromArray;
