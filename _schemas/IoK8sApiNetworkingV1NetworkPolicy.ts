import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiNetworkingV1NetworkPolicySpec } from "./IoK8sApiNetworkingV1NetworkPolicySpec.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "networking.k8s.io/v1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "NetworkPolicy"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.networking.v1.NetworkPolicySpec#"
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
IoK8sApiNetworkingV1NetworkPolicySpec();
register("io.k8s.api.networking.v1.NetworkPolicy", schema);
}

