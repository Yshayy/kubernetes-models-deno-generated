import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1SecretReference } from "./IoK8sApiCoreV1SecretReference.ts";
const schema: object = {
  "properties": {
    "controllerExpandSecretRef": {
      "$ref": "io.k8s.api.core.v1.SecretReference#"
    },
    "controllerPublishSecretRef": {
      "$ref": "io.k8s.api.core.v1.SecretReference#"
    },
    "driver": {
      "type": "string"
    },
    "fsType": {
      "type": "string"
    },
    "nodePublishSecretRef": {
      "$ref": "io.k8s.api.core.v1.SecretReference#"
    },
    "nodeStageSecretRef": {
      "$ref": "io.k8s.api.core.v1.SecretReference#"
    },
    "readOnly": {
      "type": "boolean"
    },
    "volumeAttributes": {
      "additionalProperties": {
        "type": "string"
      },
      "type": "object"
    },
    "volumeHandle": {
      "type": "string"
    }
  },
  "required": [
    "driver",
    "volumeHandle"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1SecretReference();
register("io.k8s.api.core.v1.CSIPersistentVolumeSource", schema);
}

