import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "group": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "namespace": {
      "type": "string"
    },
    "resource": {
      "type": "string"
    },
    "subresource": {
      "type": "string"
    },
    "verb": {
      "type": "string"
    },
    "version": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.authorization.v1beta1.ResourceAttributes", schema);
}

