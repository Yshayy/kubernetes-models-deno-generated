import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "fsType": {
      "type": "string"
    },
    "pdID": {
      "type": "string"
    }
  },
  "required": [
    "pdID"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.PhotonPersistentDiskVolumeSource", schema);
}

