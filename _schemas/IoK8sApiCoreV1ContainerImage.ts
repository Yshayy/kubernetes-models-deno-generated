import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "names": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "sizeBytes": {
      "format": "int64",
      "type": "integer"
    }
  },
  "required": [
    "names"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.ContainerImage", schema);
}

