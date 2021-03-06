describe("when left hand is satisfied and right hand not", function () {
    
    var leftHandSideEvaluator = sinon.stub().returns(true);
    var leftHandSide = Dolittle.specifications.Specification.create()
    leftHandSide.evaluator = leftHandSideEvaluator;

    var rightHandSideEvaluator = sinon.stub().returns(false);
    var rightHandSide = Dolittle.specifications.Specification.create();
    rightHandSide.evaluator = rightHandSideEvaluator;

    var instance = { something: 42 };
    var rule = Dolittle.specifications.Or.create({
        leftHandSide: leftHandSide,
        rightHandSide: rightHandSide
    });
    rule.evaluate(instance);

    var satisfied = rule.isSatisfied();

    it("should be considered satisfied", function () {
        expect(satisfied).toBe(true);
    });
});