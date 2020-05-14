import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "fsType": {
      "type": "string"
    },
    "lun": {
      "format": "int32",
      "type": "integer"
    },
    "readOnly": {
      "type": "boolean"
    },
    "targetWWNs": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "wwids": {
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.FCVolumeSource", schema);
}

