import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiPolicyV1beta1PodSecurityPolicySpec } from "./IoK8sApiPolicyV1beta1PodSecurityPolicySpec.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "policy/v1beta1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "PodSecurityPolicy"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.policy.v1beta1.PodSecurityPolicySpec#"
    }
  },
  "type": "object",
  "required": [
    "apiVersion",
    "kind"
  ]
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
IoK8sApiPolicyV1beta1PodSecurityPolicySpec();
register("io.k8s.api.policy.v1beta1.PodSecurityPolicy", schema);
}

