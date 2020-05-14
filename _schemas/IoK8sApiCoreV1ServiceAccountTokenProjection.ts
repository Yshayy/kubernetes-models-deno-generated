import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "audience": {
      "type": "string"
    },
    "expirationSeconds": {
      "format": "int64",
      "type": "integer"
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
register("io.k8s.api.core.v1.ServiceAccountTokenProjection", schema);
}

