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
    "options": {
      "additionalProperties": {
        "type": "string"
      },
      "type": "object"
    },
    "readOnly": {
      "type": "boolean"
    },
    "secretRef": {
      "$ref": "io.k8s.api.core.v1.LocalObjectReference#"
    }
  },
  "required": [
    "driver"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1LocalObjectReference();
register("io.k8s.api.core.v1.FlexVolumeSource", schema);
}

