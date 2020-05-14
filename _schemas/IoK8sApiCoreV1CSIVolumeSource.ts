import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1LocalObjectReference } from "./IoK8sApiCoreV1LocalObjectReference.ts";
const schema: object = {
  "properties": {
    "driver": {
      "type": "string"
    },
    "fsType": {
      "type": "string"
    },
    "nodePublishSecretRef": {
      "$ref": "io.k8s.api.core.v1.LocalObjectReference#"
    },
    "readOnly": {
      "type": "boolean"
    },
    "volumeAttributes": {
      "additionalProperties": {
        "type": "string"
      },
      "type": "object"
    }
  },
  "required": [
    "driver"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1LocalObjectReference();
register("io.k8s.api.core.v1.CSIVolumeSource", schema);
}

