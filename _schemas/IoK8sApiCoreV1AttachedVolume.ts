import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "devicePath": {
      "type": "string"
    },
    "name": {
      "type": "string"
    }
  },
  "required": [
    "name",
    "devicePath"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.AttachedVolume", schema);
}

