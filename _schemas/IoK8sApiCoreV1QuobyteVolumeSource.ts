import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "group": {
      "type": "string"
    },
    "readOnly": {
      "type": "boolean"
    },
    "registry": {
      "type": "string"
    },
    "tenant": {
      "type": "string"
    },
    "user": {
      "type": "string"
    },
    "volume": {
      "type": "string"
    }
  },
  "required": [
    "registry",
    "volume"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.QuobyteVolumeSource", schema);
}

