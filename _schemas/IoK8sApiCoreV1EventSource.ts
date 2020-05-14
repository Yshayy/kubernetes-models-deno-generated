import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "component": {
      "type": "string"
    },
    "host": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.EventSource", schema);
}

