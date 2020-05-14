import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "level": {
      "type": "string"
    },
    "role": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "user": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.SELinuxOptions", schema);
}

