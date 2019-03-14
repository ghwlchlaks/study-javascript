Array.prototype.duplicator = function() {
    return this.concat(this);
}

console.log([1,2,3,4,5].duplicator())