Dolittle.namespace("Dolittle.values", {
    StringTypeConverter: Dolittle.values.TypeConverter.extend(function () {
        this.supportedType = String;

        this.convertFrom = function (value) {
            return value.toString();
        };
    })
});