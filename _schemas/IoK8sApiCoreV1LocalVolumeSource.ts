import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "fsType": {
      "type": "string"
    },
    "path": {
      "type": "string"
    }
  },
  "required": [
    "path"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.LocalVolumeSource", schema);
}

