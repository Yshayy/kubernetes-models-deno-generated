import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "driver": {
      "type": "string"
    }
  },
  "required": [
    "driver"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.policy.v1beta1.AllowedFlexVolume", schema);
}

