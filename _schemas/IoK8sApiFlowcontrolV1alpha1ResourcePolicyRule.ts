import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "apiGroups": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "clusterScope": {
      "type": "boolean"
    },
    "namespaces": {
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
    "verbs",
    "apiGroups",
    "resources"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.flowcontrol.v1alpha1.ResourcePolicyRule", schema);
}

