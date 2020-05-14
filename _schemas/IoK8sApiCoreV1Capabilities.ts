import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "add": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "drop": {
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.Capabilities", schema);
}

