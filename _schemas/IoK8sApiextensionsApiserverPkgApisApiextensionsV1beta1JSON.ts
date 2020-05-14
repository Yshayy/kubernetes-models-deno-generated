import { register } from "../__include/validate/src/index.ts";
const schema: object = {};

export function addSchema() {
register("io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSON", schema);
}

