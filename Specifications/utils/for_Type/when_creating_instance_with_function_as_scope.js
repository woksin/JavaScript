describe("when creating instance with function as scope", function () {
    var type = null;
    var scopeCalled = false;
    var scopeNamespace = "";
    var scopeName = "";
    var instance = null;

    beforeEach(function () {
        Dolittle.dependencyResolver = {
            getDependenciesFor: sinon.stub()
        };

        type = Dolittle.Type.extend(function () {
            this.something = "hello";
        }).scopeTo(function (namespace, name) {
            scopeCalled = true;
            scopeNamespace = namespace;
            scopeName = name;
        });

        type._namespace = "SomeNamespace";
        type._name = "SomeName";

        instance = type.create();
    });

    afterEach(function () {
        Dolittle.dependencyResolver = {};
    });

    it("should create a proper instance", function () {
        expect(instance.something).toBe("hello");
    });

    it("should ask scope if type in namespace is in scope", function () {
        expect(scopeCalled).toBe(true);
    });

    it("should ask scope with namespace", function () {
        expect(scopeNamespace).toBe("SomeNamespace");
    });

    it("should ask scope with name", function () {
        expect(scopeName).toBe("SomeName");
    });
});