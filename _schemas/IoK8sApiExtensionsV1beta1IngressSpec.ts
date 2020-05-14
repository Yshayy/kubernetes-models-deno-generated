import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiExtensionsV1beta1IngressBackend } from "./IoK8sApiExtensionsV1beta1IngressBackend.ts";

import { addSchema as IoK8sApiExtensionsV1beta1IngressRule } from "./IoK8sApiExtensionsV1beta1IngressRule.ts";

import { addSchema as IoK8sApiExtensionsV1beta1IngressTLS } from "./IoK8sApiExtensionsV1beta1IngressTLS.ts";
const schema: object = {
  "properties": {
    "backend": {
      "$ref": "io.k8s.api.extensions.v1beta1.IngressBackend#"
    },
    "ingressClassName": {
      "type": "string"
    },
    "rules": {
      "items": {
        "$ref": "io.k8s.api.extensions.v1beta1.IngressRule#"
      },
      "type": "array"
    },
    "tls": {
      "items": {
        "$ref": "io.k8s.api.extensions.v1beta1.IngressTLS#"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiExtensionsV1beta1IngressBackend();
IoK8sApiExtensionsV1beta1IngressRule();
IoK8sApiExtensionsV1beta1IngressTLS();
register("io.k8s.api.extensions.v1beta1.IngressSpec", schema);
}

