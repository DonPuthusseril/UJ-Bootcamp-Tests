//console.log(greet("Andre"))
//console.log(greet("Don"))
//console.log(greet("Brain"))

describe('test my greet function', function(){
    it("it should return 'Hello, Ofhani' when called with 'Ofhani' " , function(){
        assert.equal("Hello, Ofhani", greet("Ofhani"), "this should not be true")

        //assert.deepEqual([2,2],[2,2]);
    });

    it("it should return 'Hello, Sizwe' when called with 'Sizwe' " , function(){
        assert.equal("Hello, Sizwe", greet("Sizwe"), "this should not be true")

});
});