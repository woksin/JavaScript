describe("when validating without at", function () {
    var validator = Dolittle.validation.email.create({ options: {} });
    var result = validator.validate("something");

    it("should return false", function () {
        expect(result).toBe(false);
    });
});