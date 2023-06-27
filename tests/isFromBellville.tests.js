//console.log(isFromBellville('CY 123'))
//console.log(isFromBellville('CJ 123'))

describe('test my isFromBellville function', function(){
    it("it should return 'CY 123' when called with 'isFromBellville' " , function(){
        assert.equal(isFromBellville('CY 123'), true);


    });

    it("it should return 'CJ 123' when called with 'isFromBellville' " , function(){
        assert.equal(isFromBellville('CJ 123'), false);



});
});