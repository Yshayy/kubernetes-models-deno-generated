import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "key": {
      "type": "string"
    },
    "mode": {
      "format": "int32",
      "type": "integer"
    },
    "path": {
      "type": "string"
    }
  },
  "required": [
    "key",
    "path"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.KeyToPath", schema);
}

