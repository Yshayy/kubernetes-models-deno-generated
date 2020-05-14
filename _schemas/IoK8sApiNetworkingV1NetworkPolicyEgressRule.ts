import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiNetworkingV1NetworkPolicyPort } from "./IoK8sApiNetworkingV1NetworkPolicyPort.ts";

import { addSchema as IoK8sApiNetworkingV1NetworkPolicyPeer } from "./IoK8sApiNetworkingV1NetworkPolicyPeer.ts";
const schema: object = {
  "properties": {
    "ports": {
      "items": {
        "$ref": "io.k8s.api.networking.v1.NetworkPolicyPort#"
      },
      "type": "array"
    },
    "to": {
      "items": {
        "$ref": "io.k8s.api.networking.v1.NetworkPolicyPeer#"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiNetworkingV1NetworkPolicyPort();
IoK8sApiNetworkingV1NetworkPolicyPeer();
register("io.k8s.api.networking.v1.NetworkPolicyEgressRule", schema);
}

