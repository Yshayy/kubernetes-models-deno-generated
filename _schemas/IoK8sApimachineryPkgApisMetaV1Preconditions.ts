import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "resourceVersion": {
      "type": "string"
    },
    "uid": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.apimachinery.pkg.apis.meta.v1.Preconditions", schema);
}

