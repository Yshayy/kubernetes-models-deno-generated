import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string"
    },
    "blockOwnerDeletion": {
      "type": "boolean"
    },
    "controller": {
      "type": "boolean"
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
  "required": [
    "apiVersion",
    "kind",
    "name",
    "uid"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference", schema);
}

