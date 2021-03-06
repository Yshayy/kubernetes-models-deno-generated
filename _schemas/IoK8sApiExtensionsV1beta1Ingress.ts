import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiExtensionsV1beta1IngressSpec } from "./IoK8sApiExtensionsV1beta1IngressSpec.ts";

import { addSchema as IoK8sApiExtensionsV1beta1IngressStatus } from "./IoK8sApiExtensionsV1beta1IngressStatus.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "extensions/v1beta1"
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
      "$ref": "io.k8s.api.extensions.v1beta1.IngressSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.extensions.v1beta1.IngressStatus#"
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
IoK8sApiExtensionsV1beta1IngressSpec();
IoK8sApiExtensionsV1beta1IngressStatus();
register("io.k8s.api.extensions.v1beta1.Ingress", schema);
}

