import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "address": {
      "type": "string"
    },
    "type": {
      "type": "string"
    }
  },
  "required": [
    "type",
    "address"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.NodeAddress", schema);
}

