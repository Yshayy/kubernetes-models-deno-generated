import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "path": {
      "type": "string"
    },
    "readOnly": {
      "type": "boolean"
    },
    "server": {
      "type": "string"
    }
  },
  "required": [
    "server",
    "path"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.NFSVolumeSource", schema);
}

