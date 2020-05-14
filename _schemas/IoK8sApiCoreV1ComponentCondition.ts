import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "error": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "type": {
      "type": "string"
    }
  },
  "required": [
    "type",
    "status"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.ComponentCondition", schema);
}

