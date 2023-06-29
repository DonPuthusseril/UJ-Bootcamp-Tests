//console.log(regCheck("RG 45 HN GP", "GP"))
//console.log(regCheck("FGT 491 L", "L"))
//console.log(regCheck("LKG 679 EC", "EC"))
//console.log(regCheck("GHT 456 MP", "MP"))
//console.log(regCheck("ND 123-456", "ND"))
//console.log(regCheck("CY 678-453", "CY"))
//console.log(regCheck("CA 1234-123", "CA"))

describe('test my regCheck function', function() {
    it("it should return 'RG 45 HN GP' when called with 'regCheck' " , function(){
        assert.equal(regCheck("RG 45 HN GP", "GP"), true);


    });

    it("it should return 'LKG 679 EC' when called with 'regCheck' " , function(){
        assert.equal(regCheck('LKG 679 EC'), true);

    });

    it("it should return 'GHT 456 MP' when called with 'regCheck' " , function(){
        assert.equal(regCheck('GHT 456 MP'), true);

    });

    it("it should return 'FGT 491 L' when called with 'regCheck' " , function(){
        assert.equal(regCheck('FGT 491 L', 'L'), true);

    });

    it("it should return 'ND 123-456' when called with 'regCheck' " , function(){
        assert.equal(regCheck('ND 123-456', 'ND'), false);

    });

    it("it should return 'CY 678-453' when called with 'regCheck' " , function(){
        assert.equal(regCheck('CY 678-453'), false);

    });

    it("it should return 'CA 1234-123' when called with 'regCheck' " , function(){
        assert.equal(regCheck('CA 1234-123'), false);
    
    }); 

});