const fibonacci = function(num) {
    if (num < 0){
        return 'OOPS';
    }

    if (num == 0){
        return 0;
    }
    let n1 = 1;
    let n2 = 1;
    let tmp;
    for (let i = 2; i < num; i++){
        tmp = n2;
        n2 += n1;
        n1 = tmp;
    }
    return n2
};

// Do not edit below this line
module.exports = fibonacci;
