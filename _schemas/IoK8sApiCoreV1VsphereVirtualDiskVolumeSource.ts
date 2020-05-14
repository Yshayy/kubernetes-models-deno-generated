import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "fsType": {
      "type": "string"
    },
    "storagePolicyID": {
      "type": "string"
    },
    "storagePolicyName": {
      "type": "string"
    },
    "volumePath": {
      "type": "string"
    }
  },
  "required": [
    "volumePath"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource", schema);
}

