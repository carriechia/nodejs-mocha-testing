module.exports = {
    sum,
};

/**
 * 將陣列內容加總
 * @param {myArray} 加總陣列
 */
function sum(myArray) {
    if (!Array.isArray(myArray)) return false;

    var result = myArray.reduce(function(prev, element) {
        return prev + element;
    }, 0);

    return result;
}