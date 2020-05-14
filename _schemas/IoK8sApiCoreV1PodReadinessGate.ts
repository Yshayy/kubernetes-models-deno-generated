import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "conditionType": {
      "type": "string"
    }
  },
  "required": [
    "conditionType"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.PodReadinessGate", schema);
}

