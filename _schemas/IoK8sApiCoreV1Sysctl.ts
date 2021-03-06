import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "name": {
      "type": "string"
    },
    "value": {
      "type": "string"
    }
  },
  "required": [
    "name",
    "value"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.Sysctl", schema);
}

