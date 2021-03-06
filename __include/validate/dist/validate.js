"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const ajv_1 = require("ajv");
const ajv_2 = require("./ajv");
function validate(id, data) {
    if (!ajv_2.ajv.validate(id, data) && ajv_2.ajv.errors) {
        const err = new ajv_1.ValidationError(ajv_2.ajv.errors);
        err.message = ajv_2.ajv.errorsText(ajv_2.ajv.errors);
        throw err;
    }
}
exports.validate = validate;
//# sourceMappingURL=validate.js.map