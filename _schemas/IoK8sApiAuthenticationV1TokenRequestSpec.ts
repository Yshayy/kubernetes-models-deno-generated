import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAuthenticationV1BoundObjectReference } from "./IoK8sApiAuthenticationV1BoundObjectReference.ts";
const schema: object = {
  "properties": {
    "audiences": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "boundObjectRef": {
      "$ref": "io.k8s.api.authentication.v1.BoundObjectReference#"
    },
    "expirationSeconds": {
      "format": "int64",
      "type": "integer"
    }
  },
  "required": [
    "audiences"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiAuthenticationV1BoundObjectReference();
register("io.k8s.api.authentication.v1.TokenRequestSpec", schema);
}

