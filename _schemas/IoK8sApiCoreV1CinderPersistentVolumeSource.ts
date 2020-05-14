import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1SecretReference } from "./IoK8sApiCoreV1SecretReference.ts";
const schema: object = {
  "properties": {
    "fsType": {
      "type": "string"
    },
    "readOnly": {
      "type": "boolean"
    },
    "secretRef": {
      "$ref": "io.k8s.api.core.v1.SecretReference#"
    },
    "volumeID": {
      "type": "string"
    }
  },
  "required": [
    "volumeID"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1SecretReference();
register("io.k8s.api.core.v1.CinderPersistentVolumeSource", schema);
}

