var expect = require('chai').expect;
var method = require("../lib/tool.js");

describe("判斷字串是否為空字串、空白、未定義、null", function() {
    it("Expect return false when the name is not empty.", function(){
        var name = "Carrie";
        expect(method.textIsEmpty(name)).to.be.false;
    })

    it("Expect return true when the name is empty.", function(){
        var name = "";
        expect(method.textIsEmpty(name)).to.be.true;
    })

    it("Expect return true when the name is null.", function(){
        var name = null;
        expect(method.textIsEmpty(name)).to.be.true;
    })
  }
)

describe("數字加上千分位逗號", function() {
    it("Expect return 1,00 when the number is not 1000", function(){
        var value = "1,000";
        var number = 1000;

        expect(method.numberWithCommas(number)).to.be.equal(value);
    })

    it("Expect the number will return string", function(){
        var number = 1000;
        expect(method.numberWithCommas(number)).to.be.a('string');
    })
  }
)
