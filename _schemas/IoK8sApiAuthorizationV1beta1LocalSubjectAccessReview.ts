import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiAuthorizationV1beta1SubjectAccessReviewSpec } from "./IoK8sApiAuthorizationV1beta1SubjectAccessReviewSpec.ts";

import { addSchema as IoK8sApiAuthorizationV1beta1SubjectAccessReviewStatus } from "./IoK8sApiAuthorizationV1beta1SubjectAccessReviewStatus.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "authorization.k8s.io/v1beta1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "LocalSubjectAccessReview"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.authorization.v1beta1.SubjectAccessReviewSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.authorization.v1beta1.SubjectAccessReviewStatus#"
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
IoK8sApiAuthorizationV1beta1SubjectAccessReviewSpec();
IoK8sApiAuthorizationV1beta1SubjectAccessReviewStatus();
register("io.k8s.api.authorization.v1beta1.LocalSubjectAccessReview", schema);
}

