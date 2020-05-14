import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1Preconditions } from "./IoK8sApimachineryPkgApisMetaV1Preconditions.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "v1"
      ]
    },
    "dryRun": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "gracePeriodSeconds": {
      "format": "int64",
      "type": "integer"
    },
    "kind": {
      "type": "string",
      "enum": [
        "DeleteOptions"
      ]
    },
    "orphanDependents": {
      "type": "boolean"
    },
    "preconditions": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.Preconditions#"
    },
    "propagationPolicy": {
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
IoK8sApimachineryPkgApisMetaV1Preconditions();
register("io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions", schema);
}

