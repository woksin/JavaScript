describe("when not using options", function () {
    var exception = null;
    try {
        var validator = Dolittle.validation.regex.create({ options: {} });
        validator.validate("1234");
    } catch (e) {
        exception = e;
    }

    it("should throw options not defined exception", function () {
        expect(exception instanceof Dolittle.validation.OptionsNotDefined).toBe(true);
    });
});