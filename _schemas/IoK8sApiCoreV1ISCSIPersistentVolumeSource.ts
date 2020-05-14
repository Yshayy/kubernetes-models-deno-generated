import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1SecretReference } from "./IoK8sApiCoreV1SecretReference.ts";
const schema: object = {
  "properties": {
    "chapAuthDiscovery": {
      "type": "boolean"
    },
    "chapAuthSession": {
      "type": "boolean"
    },
    "fsType": {
      "type": "string"
    },
    "initiatorName": {
      "type": "string"
    },
    "iqn": {
      "type": "string"
    },
    "iscsiInterface": {
      "type": "string"
    },
    "lun": {
      "format": "int32",
      "type": "integer"
    },
    "portals": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "readOnly": {
      "type": "boolean"
    },
    "secretRef": {
      "$ref": "io.k8s.api.core.v1.SecretReference#"
    },
    "targetPortal": {
      "type": "string"
    }
  },
  "required": [
    "targetPortal",
    "iqn",
    "lun"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1SecretReference();
register("io.k8s.api.core.v1.ISCSIPersistentVolumeSource", schema);
}

