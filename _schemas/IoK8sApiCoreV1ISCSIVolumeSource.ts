import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1LocalObjectReference } from "./IoK8sApiCoreV1LocalObjectReference.ts";
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
      "$ref": "io.k8s.api.core.v1.LocalObjectReference#"
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
IoK8sApiCoreV1LocalObjectReference();
register("io.k8s.api.core.v1.ISCSIVolumeSource", schema);
}

