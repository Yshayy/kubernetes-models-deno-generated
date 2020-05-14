import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "pathPrefix": {
      "type": "string"
    },
    "readOnly": {
      "type": "boolean"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.policy.v1beta1.AllowedHostPath", schema);
}

