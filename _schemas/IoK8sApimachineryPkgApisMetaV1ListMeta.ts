import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "continue": {
      "type": "string"
    },
    "remainingItemCount": {
      "format": "int64",
      "type": "integer"
    },
    "resourceVersion": {
      "type": "string"
    },
    "selfLink": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta", schema);
}

