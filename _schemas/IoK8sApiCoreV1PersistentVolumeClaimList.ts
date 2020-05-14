import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1PersistentVolumeClaim } from "./IoK8sApiCoreV1PersistentVolumeClaim.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "v1"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.core.v1.PersistentVolumeClaim#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "PersistentVolumeClaimList"
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
IoK8sApiCoreV1PersistentVolumeClaim();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.core.v1.PersistentVolumeClaimList", schema);
}

