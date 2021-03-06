import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1StatusDetails } from "./IoK8sApimachineryPkgApisMetaV1StatusDetails.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "v1"
      ]
    },
    "code": {
      "format": "int32",
      "type": "integer"
    },
    "details": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.StatusDetails#"
    },
    "kind": {
      "type": "string",
      "enum": [
        "Status"
      ]
    },
    "message": {
      "type": "string"
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta#"
    },
    "reason": {
      "type": "string"
    },
    "status": {
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
IoK8sApimachineryPkgApisMetaV1StatusDetails();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.apimachinery.pkg.apis.meta.v1.Status", schema);
}

