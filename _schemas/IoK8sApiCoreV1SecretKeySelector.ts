import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "key": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "optional": {
      "type": "boolean"
    }
  },
  "required": [
    "key"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.SecretKeySelector", schema);
}

