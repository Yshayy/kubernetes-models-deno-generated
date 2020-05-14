import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "field": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "reason": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.apimachinery.pkg.apis.meta.v1.StatusCause", schema);
}

