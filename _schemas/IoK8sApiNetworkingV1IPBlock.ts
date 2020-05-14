import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "cidr": {
      "type": "string"
    },
    "except": {
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "required": [
    "cidr"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.networking.v1.IPBlock", schema);
}

