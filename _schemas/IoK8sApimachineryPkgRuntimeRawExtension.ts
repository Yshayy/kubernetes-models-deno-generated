import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "type": "object"
};

export function addSchema() {
register("io.k8s.apimachinery.pkg.runtime.RawExtension", schema);
}

