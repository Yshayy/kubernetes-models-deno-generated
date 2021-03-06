import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiAuthorizationV1beta1SelfSubjectRulesReviewSpec } from "./IoK8sApiAuthorizationV1beta1SelfSubjectRulesReviewSpec.ts";

import { addSchema as IoK8sApiAuthorizationV1beta1SubjectRulesReviewStatus } from "./IoK8sApiAuthorizationV1beta1SubjectRulesReviewStatus.ts";
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
        "SelfSubjectRulesReview"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.authorization.v1beta1.SelfSubjectRulesReviewSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.authorization.v1beta1.SubjectRulesReviewStatus#"
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
IoK8sApiAuthorizationV1beta1SelfSubjectRulesReviewSpec();
IoK8sApiAuthorizationV1beta1SubjectRulesReviewStatus();
register("io.k8s.api.authorization.v1beta1.SelfSubjectRulesReview", schema);
}

