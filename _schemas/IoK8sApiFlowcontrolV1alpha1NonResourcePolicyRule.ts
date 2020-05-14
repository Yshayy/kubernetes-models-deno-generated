import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "nonResourceURLs": {
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
    "nonResourceURLs"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.flowcontrol.v1alpha1.NonResourcePolicyRule", schema);
}

