describe(`Testing Even or odd`, () =>{
    it(`testing type of parameter`, () =>{
        assert.equal(isOddOrEven(10),undefined)
    })
    it(`testing type of parameter`, () =>{
        assert.equal(isOddOrEven({}),undefined)
    })
    it(`testing type of parameter`, () =>{
        assert.equal(isOddOrEven([4,3]),undefined)
    })
    it(`testing type of parameter`, () =>{
        assert.equal(isOddOrEven(null),undefined)
    })
    it(`testing type of parameter`, () =>{
        assert.equal(isOddOrEven(undefined),undefined)
    })

    it(`testing even return`, () =>{
        assert.equal(isOddOrEven("no no ni"),"even")
    })
    it(`testing even return`, () =>{
        assert.equal(isOddOrEven("nono"),"even")
    })

    it(`testing odd return`, () =>{
        assert.equal(isOddOrEven("o"),"odd")
    })
    it(`testing odd return`, () =>{
        assert.equal(isOddOrEven("nonoo"),"odd")
    })

    it(`testing odd return`, () =>{
        assert.equal(isOddOrEven("nonoo c c c"),"odd")
    })




})