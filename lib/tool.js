module.exports = {
    textIsEmpty,
    numberWithCommas
};

/**
 * 判斷字串是否為空字串、空白、未定義、null
 * @param {*} str
 */
function textIsEmpty(str) {
    var isEmpty = false;

    if (str == null) {
        isEmpty = true;
    } else {
        if (typeof str != "number") {
            if (str != null && typeof str != "undefined") {
                if (str.replace(/\s/g, '').length == 0) {
                    isEmpty = true;
                }
            } else {//str undefined
                isEmpty = true;
            }
        }
    }
    return isEmpty; //若為空則回傳true
}

/**
 * 將數字加上千分位逗號
 * @param {*} number
 */
function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
