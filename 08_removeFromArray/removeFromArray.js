const removeFromArray = function(array, ...inputs) {
    for(let input of inputs) {
        while(array.includes(input)) {
            let index = array.findIndex(item => item === input);
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
