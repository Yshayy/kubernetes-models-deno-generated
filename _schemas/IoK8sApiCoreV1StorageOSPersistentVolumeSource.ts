import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1ObjectReference } from "./IoK8sApiCoreV1ObjectReference.ts";
const schema: object = {
  "properties": {
    "fsType": {
      "type": "string"
    },
    "readOnly": {
      "type": "boolean"
    },
    "secretRef": {
      "$ref": "io.k8s.api.core.v1.ObjectReference#"
    },
    "volumeName": {
      "type": "string"
    },
    "volumeNamespace": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1ObjectReference();
register("io.k8s.api.core.v1.StorageOSPersistentVolumeSource", schema);
}

