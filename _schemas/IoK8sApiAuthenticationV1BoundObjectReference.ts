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
    },
    "uid": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.authentication.v1.BoundObjectReference", schema);
}

