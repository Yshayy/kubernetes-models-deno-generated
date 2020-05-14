import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "allowedRuntimeClassNames": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "defaultRuntimeClassName": {
      "type": "string"
    }
  },
  "required": [
    "allowedRuntimeClassNames"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.policy.v1beta1.RuntimeClassStrategyOptions", schema);
}

