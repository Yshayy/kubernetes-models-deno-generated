import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string"
    },
    "kind": {
      "type": "string"
    },
    "name": {
      "type": "string"
    }
  },
  "required": [
    "kind",
    "name"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.autoscaling.v1.CrossVersionObjectReference", schema);
}

