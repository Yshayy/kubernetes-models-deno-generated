import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "apiGroups": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "apiVersions": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "operations": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "resources": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "scope": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.admissionregistration.v1.RuleWithOperations", schema);
}

