import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "apiGroup": {
      "type": "string"
    },
    "kind": {
      "type": "string"
    },
    "name": {
      "type": "string"
    }
  },
  "required": [
    "apiGroup",
    "kind",
    "name"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.rbac.v1beta1.RoleRef", schema);
}

