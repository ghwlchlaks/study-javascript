const sum = function(a,b) {
    const m = a + b
    return m
}

console.log(sum(1,2));

const sum1 = (function(a,b){
    const m = a + b;
    return m;
})(1,2);

console.log(sum1)