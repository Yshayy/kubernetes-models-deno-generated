import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "categories": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "group": {
      "type": "string"
    },
    "kind": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "namespaced": {
      "type": "boolean"
    },
    "shortNames": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "singularName": {
      "type": "string"
    },
    "storageVersionHash": {
      "type": "string"
    },
    "verbs": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "version": {
      "type": "string"
    }
  },
  "required": [
    "name",
    "singularName",
    "namespaced",
    "kind",
    "verbs"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.apimachinery.pkg.apis.meta.v1.APIResource", schema);
}

