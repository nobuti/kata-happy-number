describe("Kata initialize", function () {

    it("Should be initialized", function() {
        this.kata = new Kata(19);
        expect(this.kata.input).toBe(19);
    });

    it("Should be split in digits 1,9", function() {
        this.kata = new Kata(19);
        var digits = this.kata.split();
        expect(digits[0]).toBe(1);
        expect(digits[1]).toBe(9);
    });

    it("Should be split in digits 3,2,1", function() {
        this.kata = new Kata(321);
        var digits = this.kata.split();
        expect(digits[0]).toBe(3);
        expect(digits[1]).toBe(2);
        expect(digits[2]).toBe(1);
    });

    it("19 should be a happy number", function() {
        this.kata = new Kata(19);
        expect(this.kata.check()).toBe("19 is a happy number");
    });

    it("7 should be a happy number", function() {
        this.kata = new Kata(7);
        expect(this.kata.check()).toBe("7 is a happy number");
    });

    it("37 should not be a happy number", function() {
        this.kata = new Kata(37);
        expect(this.kata.check()).toBe("37 is not a happy number");
    });

    it("89 should not be a happy number", function() {
        this.kata = new Kata(89);
        expect(this.kata.check()).toBe("89 is not a happy number");
    });
    
    it("496 should be a happy number", function() {
        this.kata = new Kata(496);
        expect(this.kata.check()).toBe("496 is a happy number");
    });
    

});

