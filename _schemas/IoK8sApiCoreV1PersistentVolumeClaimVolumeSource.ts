import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "claimName": {
      "type": "string"
    },
    "readOnly": {
      "type": "boolean"
    }
  },
  "required": [
    "claimName"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.PersistentVolumeClaimVolumeSource", schema);
}

