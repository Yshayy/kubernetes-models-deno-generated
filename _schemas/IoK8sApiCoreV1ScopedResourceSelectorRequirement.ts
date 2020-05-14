import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "operator": {
      "type": "string"
    },
    "scopeName": {
      "type": "string"
    },
    "values": {
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "required": [
    "scopeName",
    "operator"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.ScopedResourceSelectorRequirement", schema);
}

