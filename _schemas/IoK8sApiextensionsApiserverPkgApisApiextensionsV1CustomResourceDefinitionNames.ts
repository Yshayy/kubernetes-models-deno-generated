import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "categories": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "kind": {
      "type": "string"
    },
    "listKind": {
      "type": "string"
    },
    "plural": {
      "type": "string"
    },
    "shortNames": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "singular": {
      "type": "string"
    }
  },
  "required": [
    "plural",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionNames", schema);
}

