import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1LocalObjectReference } from "./IoK8sApiCoreV1LocalObjectReference.ts";
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
      "$ref": "io.k8s.api.core.v1.LocalObjectReference#"
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
IoK8sApiCoreV1LocalObjectReference();
register("io.k8s.api.core.v1.RBDVolumeSource", schema);
}

