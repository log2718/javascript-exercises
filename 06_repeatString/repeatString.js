const repeatString = function(str, num) {
    let ret = "";
    if(num < 0) return "ERROR";
    for (let i = 0; i < num; i++) {
        ret += str;
    }
    return ret;
};

// Do not edit below this line
module.exports = repeatString;
