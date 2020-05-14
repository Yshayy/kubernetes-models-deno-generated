import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "message": {
      "type": "string"
    },
    "phase": {
      "type": "string"
    },
    "reason": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.PersistentVolumeStatus", schema);
}

