var mathamatical = {
    decrement(placeholder, callback) {
        placeholder -= 1; 
        callback(placeholder, "10");
    },
    increment(placeholder, callback) {
        placeholder += 1;
        callback(placeholder, "10");
    }
}

module.exports = mathamatical;