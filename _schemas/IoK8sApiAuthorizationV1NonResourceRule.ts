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
    "verbs"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.authorization.v1.NonResourceRule", schema);
}

