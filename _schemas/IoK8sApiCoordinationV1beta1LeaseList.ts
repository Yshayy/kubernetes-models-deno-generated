import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoordinationV1beta1Lease } from "./IoK8sApiCoordinationV1beta1Lease.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "coordination.k8s.io/v1beta1"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.coordination.v1beta1.Lease#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "LeaseList"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta#"
    }
  },
  "required": [
    "items",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoordinationV1beta1Lease();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.coordination.v1beta1.LeaseList", schema);
}

