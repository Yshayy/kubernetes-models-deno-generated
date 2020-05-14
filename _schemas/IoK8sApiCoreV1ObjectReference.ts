import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string"
    },
    "fieldPath": {
      "type": "string"
    },
    "kind": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "namespace": {
      "type": "string"
    },
    "resourceVersion": {
      "type": "string"
    },
    "uid": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.ObjectReference", schema);
}

