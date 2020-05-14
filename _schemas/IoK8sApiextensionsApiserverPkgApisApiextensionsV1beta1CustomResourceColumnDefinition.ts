import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "JSONPath": {
      "type": "string"
    },
    "format": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "priority": {
      "format": "int32",
      "type": "integer"
    },
    "type": {
      "type": "string"
    }
  },
  "required": [
    "name",
    "type",
    "JSONPath"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceColumnDefinition", schema);
}

