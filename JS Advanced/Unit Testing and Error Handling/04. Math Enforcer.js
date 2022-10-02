describe(`mathEnforcer test`, () =>{
    //negative test
    
    describe(`addFive tests`, () =>{
        it(`testing if correct with string `, () =>{
            assert.equal(mathEnforcer.addFive('test'),undefined)
        })
        it(`testing if correct with object `, () =>{
            assert.equal(mathEnforcer.addFive({}),undefined)
        })
        it(`testing if correct with array `, () =>{
            assert.equal(mathEnforcer.addFive([]),undefined)
        })
        it(`testing if correct with null `, () =>{
            assert.equal(mathEnforcer.addFive(null),undefined)
        })
        it(`testing if correct with undefined `, () =>{
            assert.equal(mathEnforcer.addFive(undefined),undefined)
        })
    
        //positive
        it(`testing if correct with number `, () =>{
            assert.equal(mathEnforcer.addFive(5),10)
        })
        it(`testing if correct with negative number `, () =>{
            assert.equal(mathEnforcer.addFive(-5),0)
        })
        it(`testing if correct with zero `, () =>{
            assert.equal(mathEnforcer.addFive(0),5)
        })
        it(`testing if correct with zero `, () =>{
            assert.equal(mathEnforcer.addFive(5.5),10.5)
        })
    
    
    
    
       
    })
    
    describe(`subtractTen tests`, () =>{
    
        //negative tests
        it(`testing if correct with string `, () =>{
            assert.equal(mathEnforcer.subtractTen('test'),undefined)
        })
        it(`testing if correct with object `, () =>{
            assert.equal(mathEnforcer.subtractTen({}),undefined)
        })
        it(`testing if correct with array `, () =>{
            assert.equal(mathEnforcer.subtractTen([]),undefined)
        })
        it(`testing if correct with null `, () =>{
            assert.equal(mathEnforcer.subtractTen(null),undefined)
        })
        it(`testing if correct with undefined `, () =>{
            assert.equal(mathEnforcer.subtractTen(undefined),undefined)
        })
    
        //positive test
        it(`testing if correct with positive number `, () =>{
            assert.equal(mathEnforcer.subtractTen(20),10)
        })
    
        it(`testing if correct with negative number `, () =>{
            assert.equal(mathEnforcer.subtractTen(-20),-30)
        })
        it(`testing if correct with zero `, () =>{
            assert.equal(mathEnforcer.subtractTen(0),-10)
        })
        it(`testing if correct with zero `, () =>{
            assert.equal(mathEnforcer.subtractTen(10.5),0.5)
        })
    
       
    })
    
    describe(`sum tests`, () =>{
    
        //first num
        it(`testing if correct with string `, () =>{
            assert.equal(mathEnforcer.sum('test',5),undefined)
        })
        it(`testing if correct with object `, () =>{
            assert.equal(mathEnforcer.sum({},5),undefined)
        })
        it(`testing if correct with array `, () =>{
            assert.equal(mathEnforcer.sum([],5),undefined)
        })
        it(`testing if correct with null `, () =>{
            assert.equal(mathEnforcer.sum(null,5),undefined)
        })
        it(`testing if correct with undefined `, () =>{
            assert.equal(mathEnforcer.sum(undefined,5),undefined)
        })
    //second num
        it(`testing if correct with string `, () =>{
            assert.equal(mathEnforcer.sum(5,'test'),undefined)
        })
        it(`testing if correct with object `, () =>{
            assert.equal(mathEnforcer.sum(5,{}),undefined)
        })
        it(`testing if correct with array `, () =>{
            assert.equal(mathEnforcer.sum(5,[]),undefined)
        })
        it(`testing if correct with null `, () =>{
            assert.equal(mathEnforcer.sum(5,null),undefined)
        })
        it(`testing if correct with undefined `, () =>{
            assert.equal(mathEnforcer.sum(5,undefined),undefined)
        })
    
        //positive tests
    
        it(`testing if correct with two positive `, () =>{
            assert.equal(mathEnforcer.sum(5,6),11)
        })
        it(`testing if correct with one pos , one negative `, () =>{
            assert.equal(mathEnforcer.sum(10,-5),5)
        })
        it(`testing if correct with one pos , one negative `, () =>{
            assert.equal(mathEnforcer.sum(0,0),0)
        })
        it(`testing if correct with one pos , one negative `, () =>{
            assert.equal(mathEnforcer.sum(-4,-5),-9)
        })
        it(`testing if correct with one pos , one negative `, () =>{
            assert.equal(mathEnforcer.sum(-4.5,-5.5),-10)
        })
        it(`testing if correct with two positive `, () =>{
            assert.equal(mathEnforcer.sum(5.5,6),11.5)
        })
    
       
    })
    
    
    
    
    
    
    })