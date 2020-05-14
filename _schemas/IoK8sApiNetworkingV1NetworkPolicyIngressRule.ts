import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiNetworkingV1NetworkPolicyPeer } from "./IoK8sApiNetworkingV1NetworkPolicyPeer.ts";

import { addSchema as IoK8sApiNetworkingV1NetworkPolicyPort } from "./IoK8sApiNetworkingV1NetworkPolicyPort.ts";
const schema: object = {
  "properties": {
    "from": {
      "items": {
        "$ref": "io.k8s.api.networking.v1.NetworkPolicyPeer#"
      },
      "type": "array"
    },
    "ports": {
      "items": {
        "$ref": "io.k8s.api.networking.v1.NetworkPolicyPort#"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiNetworkingV1NetworkPolicyPeer();
IoK8sApiNetworkingV1NetworkPolicyPort();
register("io.k8s.api.networking.v1.NetworkPolicyIngressRule", schema);
}

