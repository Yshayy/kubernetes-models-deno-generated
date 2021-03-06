import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiNetworkingV1beta1IngressSpec } from "./IoK8sApiNetworkingV1beta1IngressSpec.ts";

import { addSchema as IoK8sApiNetworkingV1beta1IngressStatus } from "./IoK8sApiNetworkingV1beta1IngressStatus.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "networking.k8s.io/v1beta1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "Ingress"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.networking.v1beta1.IngressSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.networking.v1beta1.IngressStatus#"
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
IoK8sApiNetworkingV1beta1IngressSpec();
IoK8sApiNetworkingV1beta1IngressStatus();
register("io.k8s.api.networking.v1beta1.Ingress", schema);
}

