import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiNetworkingV1beta1IngressBackend } from "./IoK8sApiNetworkingV1beta1IngressBackend.ts";

import { addSchema as IoK8sApiNetworkingV1beta1IngressRule } from "./IoK8sApiNetworkingV1beta1IngressRule.ts";

import { addSchema as IoK8sApiNetworkingV1beta1IngressTLS } from "./IoK8sApiNetworkingV1beta1IngressTLS.ts";
const schema: object = {
  "properties": {
    "backend": {
      "$ref": "io.k8s.api.networking.v1beta1.IngressBackend#"
    },
    "ingressClassName": {
      "type": "string"
    },
    "rules": {
      "items": {
        "$ref": "io.k8s.api.networking.v1beta1.IngressRule#"
      },
      "type": "array"
    },
    "tls": {
      "items": {
        "$ref": "io.k8s.api.networking.v1beta1.IngressTLS#"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiNetworkingV1beta1IngressBackend();
IoK8sApiNetworkingV1beta1IngressRule();
IoK8sApiNetworkingV1beta1IngressTLS();
register("io.k8s.api.networking.v1beta1.IngressSpec", schema);
}

