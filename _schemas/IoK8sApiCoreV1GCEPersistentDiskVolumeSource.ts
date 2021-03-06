import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "fsType": {
      "type": "string"
    },
    "partition": {
      "format": "int32",
      "type": "integer"
    },
    "pdName": {
      "type": "string"
    },
    "readOnly": {
      "type": "boolean"
    }
  },
  "required": [
    "pdName"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.GCEPersistentDiskVolumeSource", schema);
}

