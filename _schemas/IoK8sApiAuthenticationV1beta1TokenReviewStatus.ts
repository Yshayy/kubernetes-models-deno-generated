import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAuthenticationV1beta1UserInfo } from "./IoK8sApiAuthenticationV1beta1UserInfo.ts";
const schema: object = {
  "properties": {
    "audiences": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "authenticated": {
      "type": "boolean"
    },
    "error": {
      "type": "string"
    },
    "user": {
      "$ref": "io.k8s.api.authentication.v1beta1.UserInfo#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiAuthenticationV1beta1UserInfo();
register("io.k8s.api.authentication.v1beta1.TokenReviewStatus", schema);
}

