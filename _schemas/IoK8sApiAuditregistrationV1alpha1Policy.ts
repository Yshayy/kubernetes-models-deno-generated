import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "level": {
      "type": "string"
    },
    "stages": {
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "required": [
    "level"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.auditregistration.v1alpha1.Policy", schema);
}

