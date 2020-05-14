import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "v1"
      ]
    },
    "data": {
      "additionalProperties": {
        "format": "byte",
        "type": "string"
      },
      "type": "object"
    },
    "immutable": {
      "type": "boolean"
    },
    "kind": {
      "type": "string",
      "enum": [
        "Secret"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "stringData": {
      "additionalProperties": {
        "type": "string"
      },
      "type": "object"
    },
    "type": {
      "type": "string"
    }
  },
  "type": "object",
  "required": [
    "apiVersion",
    "kind"
  ]
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
register("io.k8s.api.core.v1.Secret", schema);
}

