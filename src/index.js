
exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        return array.sort((a, b) => a - b)[0];
    }

}

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        return array.sort((a, b) => b - a)[0];
    }
}

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        let summ = array.reduce((sum, element) => sum + element);
        return summ / array.length;
    }
}
