import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "type": "string"
};

export function addSchema() {
register("io.k8s.apimachinery.pkg.api.resource.Quantity", schema);
}

