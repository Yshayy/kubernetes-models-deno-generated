import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiCoreV1PersistentVolumeSpec } from "./IoK8sApiCoreV1PersistentVolumeSpec.ts";

import { addSchema as IoK8sApiCoreV1PersistentVolumeStatus } from "./IoK8sApiCoreV1PersistentVolumeStatus.ts";
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
        "PersistentVolume"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.core.v1.PersistentVolumeSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.core.v1.PersistentVolumeStatus#"
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
IoK8sApiCoreV1PersistentVolumeSpec();
IoK8sApiCoreV1PersistentVolumeStatus();
register("io.k8s.api.core.v1.PersistentVolume", schema);
}

