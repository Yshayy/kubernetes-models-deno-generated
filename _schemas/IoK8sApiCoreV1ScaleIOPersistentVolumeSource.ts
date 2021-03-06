import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1SecretReference } from "./IoK8sApiCoreV1SecretReference.ts";
const schema: object = {
  "properties": {
    "fsType": {
      "type": "string"
    },
    "gateway": {
      "type": "string"
    },
    "protectionDomain": {
      "type": "string"
    },
    "readOnly": {
      "type": "boolean"
    },
    "secretRef": {
      "$ref": "io.k8s.api.core.v1.SecretReference#"
    },
    "sslEnabled": {
      "type": "boolean"
    },
    "storageMode": {
      "type": "string"
    },
    "storagePool": {
      "type": "string"
    },
    "system": {
      "type": "string"
    },
    "volumeName": {
      "type": "string"
    }
  },
  "required": [
    "gateway",
    "system",
    "secretRef"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1SecretReference();
register("io.k8s.api.core.v1.ScaleIOPersistentVolumeSource", schema);
}

