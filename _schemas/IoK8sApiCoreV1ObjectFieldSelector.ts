import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string"
    },
    "fieldPath": {
      "type": "string"
    }
  },
  "required": [
    "fieldPath"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.ObjectFieldSelector", schema);
}

