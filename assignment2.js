
function fact(n) {
    if(n === 0 || n === 1){
        return 1
    }
    var fact = 1;
    for (var i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact
}

console.log(fact(7));

