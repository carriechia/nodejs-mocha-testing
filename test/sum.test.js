var expect = require('chai').expect;
var method = require("../lib/sum.js");

describe("測試加總函數", function() {
    /* Returns 0 if no argument is passed */
    it("Expect return 0 if no argument.", function(){
        var argument = [];
        expect(method.sum(argument)).to.be.equal(0);
    })

    /* Return false if argument is not array */
    it("without array.", function(){
        var arguments = 5;
        expect(method.sum(arguments)).to.be.false;
    })

    /* Computes and returns the sum of its arguments provided all are numbers */
    it("Expect returns the sum if arguments all are numbers.", function(){
        var arguments = [2,3,5];
        expect(method.sum(arguments)).to.be.equal(10);
    })

    /** 測試如果不是數字時，回傳Exception?? */
  }
)