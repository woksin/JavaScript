describe("when value to be validated is not a number", function () {
    var exception = null;
    try {
        var validator = Dolittle.validation.range.create({ options: { min: 5, max: 10 } });
        validator.validate("Joe");
    } catch (e) {
        exception = e;

    }
    it("should throw an exception", function () {
        expect(exception instanceof Dolittle.validation.NotANumber).toBe(true);
    });
});