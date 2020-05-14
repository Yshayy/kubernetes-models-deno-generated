import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiNetworkingV1NetworkPolicyEgressRule } from "./IoK8sApiNetworkingV1NetworkPolicyEgressRule.ts";

import { addSchema as IoK8sApiNetworkingV1NetworkPolicyIngressRule } from "./IoK8sApiNetworkingV1NetworkPolicyIngressRule.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";
const schema: object = {
  "properties": {
    "egress": {
      "items": {
        "$ref": "io.k8s.api.networking.v1.NetworkPolicyEgressRule#"
      },
      "type": "array"
    },
    "ingress": {
      "items": {
        "$ref": "io.k8s.api.networking.v1.NetworkPolicyIngressRule#"
      },
      "type": "array"
    },
    "podSelector": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"
    },
    "policyTypes": {
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "required": [
    "podSelector"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiNetworkingV1NetworkPolicyEgressRule();
IoK8sApiNetworkingV1NetworkPolicyIngressRule();
IoK8sApimachineryPkgApisMetaV1LabelSelector();
register("io.k8s.api.networking.v1.NetworkPolicySpec", schema);
}

