import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiCoreV1PersistentVolumeClaimSpec } from "./IoK8sApiCoreV1PersistentVolumeClaimSpec.ts";

import { addSchema as IoK8sApiCoreV1PersistentVolumeClaimStatus } from "./IoK8sApiCoreV1PersistentVolumeClaimStatus.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "v1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "PersistentVolumeClaim"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.core.v1.PersistentVolumeClaimSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.core.v1.PersistentVolumeClaimStatus#"
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
IoK8sApiCoreV1PersistentVolumeClaimSpec();
IoK8sApiCoreV1PersistentVolumeClaimStatus();
register("io.k8s.api.core.v1.PersistentVolumeClaim", schema);
}

