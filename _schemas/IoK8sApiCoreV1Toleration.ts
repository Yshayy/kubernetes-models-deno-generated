import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "effect": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "operator": {
      "type": "string"
    },
    "tolerationSeconds": {
      "format": "int64",
      "type": "integer"
    },
    "value": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.Toleration", schema);
}

