import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "attachRequired": {
      "type": "boolean"
    },
    "podInfoOnMount": {
      "type": "boolean"
    },
    "volumeLifecycleModes": {
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.storage.v1beta1.CSIDriverSpec", schema);
}

