import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiNetworkingV1IPBlock } from "./IoK8sApiNetworkingV1IPBlock.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";
const schema: object = {
  "properties": {
    "ipBlock": {
      "$ref": "io.k8s.api.networking.v1.IPBlock#"
    },
    "namespaceSelector": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"
    },
    "podSelector": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiNetworkingV1IPBlock();
IoK8sApimachineryPkgApisMetaV1LabelSelector();
register("io.k8s.api.networking.v1.NetworkPolicyPeer", schema);
}

