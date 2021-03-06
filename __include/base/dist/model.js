"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
const tslib_1 = require("tslib");
const is_plain_object_1 = tslib_1.__importDefault(require("is-plain-object"));
const validate_1 = require("@kubernetes-models/validate");
const SCHEMA_ID = Symbol("SCHEMA_ID");
const ADD_SCHEMA = Symbol("ADD_SCHEMA");
function setDefinedProps(src, dst) {
    for (const key of Object.keys(src)) {
        if (src[key] !== undefined) {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            dst[key] = filterUndefinedValues(src[key]);
        }
    }
    return dst;
}
function filterUndefinedValues(data) {
    if (Array.isArray(data)) {
        return data.map(filterUndefinedValues);
    }
    if (is_plain_object_1.default(data)) {
        return setDefinedProps(data, {});
    }
    return data;
}
class Model {
    constructor(data) {
        if (data) {
            setDefinedProps(data, this);
        }
    }
    toJSON() {
        return setDefinedProps(this, {});
    }
    validate() {
        const id = this[SCHEMA_ID];
        if (!id)
            return;
        if (typeof this[ADD_SCHEMA] === "function") {
            this[ADD_SCHEMA]();
        }
        validate_1.validate(id, this);
    }
    static setSchema(ctor, id, addSchema) {
        ctor.prototype[SCHEMA_ID] = id;
        ctor.prototype[ADD_SCHEMA] = addSchema;
    }
}
exports.Model = Model;
//# sourceMappingURL=model.js.map