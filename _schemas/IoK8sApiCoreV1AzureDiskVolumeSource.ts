import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "cachingMode": {
      "type": "string"
    },
    "diskName": {
      "type": "string"
    },
    "diskURI": {
      "type": "string"
    },
    "fsType": {
      "type": "string"
    },
    "kind": {
      "type": "string"
    },
    "readOnly": {
      "type": "boolean"
    }
  },
  "required": [
    "diskName",
    "diskURI"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.AzureDiskVolumeSource", schema);
}

