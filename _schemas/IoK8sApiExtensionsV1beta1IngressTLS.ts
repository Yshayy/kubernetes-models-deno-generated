import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "hosts": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "secretName": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.extensions.v1beta1.IngressTLS", schema);
}

