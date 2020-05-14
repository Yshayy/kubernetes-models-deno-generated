import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1SecretReference } from "./IoK8sApiCoreV1SecretReference.ts";
const schema: object = {
  "properties": {
    "monitors": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "path": {
      "type": "string"
    },
    "readOnly": {
      "type": "boolean"
    },
    "secretFile": {
      "type": "string"
    },
    "secretRef": {
      "$ref": "io.k8s.api.core.v1.SecretReference#"
    },
    "user": {
      "type": "string"
    }
  },
  "required": [
    "monitors"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1SecretReference();
register("io.k8s.api.core.v1.CephFSPersistentVolumeSource", schema);
}

