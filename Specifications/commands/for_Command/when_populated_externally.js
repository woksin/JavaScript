describe("when populated externally", function () {

    var securityContext = "SecurityContext";
    var command = Dolittle.commands.Command.create({
        commandCoordinator: {},
        commandValidationService: {
            applyRulesTo: function (command) {
                commandAppliedTo = command
            },
            validateSilently: sinon.stub()
        },
        commandSecurityService: {
            getContextFor: function (command) {
                commandAskedForSecurityContext = command;
                return {
                    continueWith: function (callback) {
                        callback(securityContext);
                    }
                }
            }
        },
        options: {},
        region: {
            commands: []
        },
        mapper: {}
    });

    command.populatedExternally();

    it("should set the flag indicating it is populated externally to true", function () {
        expect(command.isPopulatedExternally()).toBe(true);
    });
});