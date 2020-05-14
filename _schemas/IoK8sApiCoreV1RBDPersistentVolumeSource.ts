import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1SecretReference } from "./IoK8sApiCoreV1SecretReference.ts";
const schema: object = {
  "properties": {
    "fsType": {
      "type": "string"
    },
    "image": {
      "type": "string"
    },
    "keyring": {
      "type": "string"
    },
    "monitors": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "pool": {
      "type": "string"
    },
    "readOnly": {
      "type": "boolean"
    },
    "secretRef": {
      "$ref": "io.k8s.api.core.v1.SecretReference#"
    },
    "user": {
      "type": "string"
    }
  },
  "required": [
    "monitors",
    "image"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1SecretReference();
register("io.k8s.api.core.v1.RBDPersistentVolumeSource", schema);
}

