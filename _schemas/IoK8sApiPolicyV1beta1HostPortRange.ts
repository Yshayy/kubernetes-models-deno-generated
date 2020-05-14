import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "max": {
      "format": "int32",
      "type": "integer"
    },
    "min": {
      "format": "int32",
      "type": "integer"
    }
  },
  "required": [
    "min",
    "max"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.policy.v1beta1.HostPortRange", schema);
}

