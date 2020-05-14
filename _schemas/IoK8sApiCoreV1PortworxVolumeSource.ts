import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "fsType": {
      "type": "string"
    },
    "readOnly": {
      "type": "boolean"
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
register("io.k8s.api.core.v1.PortworxVolumeSource", schema);
}

