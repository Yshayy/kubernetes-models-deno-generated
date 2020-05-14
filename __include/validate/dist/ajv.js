"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.ajv = void 0;
const tslib_1 = require("tslib");
const ajv_1 = tslib_1.__importDefault(require("ajv"));
const big_integer_1 = tslib_1.__importDefault(require("big-integer"));
// From: https://github.com/miguelmota/is-base64/blob/0702e189090921a2f11b4342f27906ff8c43d7ec/is-base64.js#L15
const rBase64 = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
exports.ajv = new ajv_1.default({
    extendRefs: "fail",
    format: "full"
});
function register(id, schema) {
    if (!exports.ajv.getSchema(id)) {
        exports.ajv.addSchema(schema, id);
    }
}
exports.register = register;
function intFormat(bits) {
    return {
        validate(input) {
            const int = big_integer_1.default(input);
            return int.bitLength().toJSNumber() <= bits;
        },
        compare(a, b) {
            return big_integer_1.default(a).compare(big_integer_1.default(b));
        },
        type: "number"
    };
}
exports.ajv.addFormat("int32", intFormat(32));
exports.ajv.addFormat("int64", intFormat(64));
exports.ajv.addFormat("float", {
    type: "number",
    validate() {
        return true;
    }
});
exports.ajv.addFormat("double", {
    type: "number",
    validate() {
        return true;
    }
});
exports.ajv.addFormat("byte", {
    type: "string",
    validate(input) {
        return rBase64.test(input);
    }
});
//# sourceMappingURL=ajv.js.map