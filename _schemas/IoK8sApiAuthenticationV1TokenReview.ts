import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiAuthenticationV1TokenReviewSpec } from "./IoK8sApiAuthenticationV1TokenReviewSpec.ts";

import { addSchema as IoK8sApiAuthenticationV1TokenReviewStatus } from "./IoK8sApiAuthenticationV1TokenReviewStatus.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "authentication.k8s.io/v1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "TokenReview"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.authentication.v1.TokenReviewSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.authentication.v1.TokenReviewStatus#"
    }
  },
  "required": [
    "spec",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
IoK8sApiAuthenticationV1TokenReviewSpec();
IoK8sApiAuthenticationV1TokenReviewStatus();
register("io.k8s.api.authentication.v1.TokenReview", schema);
}

