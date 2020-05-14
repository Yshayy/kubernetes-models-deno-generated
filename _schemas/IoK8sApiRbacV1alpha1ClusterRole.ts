import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiRbacV1alpha1AggregationRule } from "./IoK8sApiRbacV1alpha1AggregationRule.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiRbacV1alpha1PolicyRule } from "./IoK8sApiRbacV1alpha1PolicyRule.ts";
const schema: object = {
  "properties": {
    "aggregationRule": {
      "$ref": "io.k8s.api.rbac.v1alpha1.AggregationRule#"
    },
    "apiVersion": {
      "type": "string",
      "enum": [
        "rbac.authorization.k8s.io/v1alpha1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "ClusterRole"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "rules": {
      "items": {
        "$ref": "io.k8s.api.rbac.v1alpha1.PolicyRule#"
      },
      "type": "array"
    }
  },
  "type": "object",
  "required": [
    "apiVersion",
    "kind"
  ]
};

export function addSchema() {
IoK8sApiRbacV1alpha1AggregationRule();
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
IoK8sApiRbacV1alpha1PolicyRule();
register("io.k8s.api.rbac.v1alpha1.ClusterRole", schema);
}

