import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "apiGroups": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "nonResourceURLs": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "resourceNames": {
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
    "verbs": {
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "required": [
    "verbs"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.rbac.v1alpha1.PolicyRule", schema);
}

