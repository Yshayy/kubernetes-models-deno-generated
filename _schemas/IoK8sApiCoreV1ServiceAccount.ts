import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1LocalObjectReference } from "./IoK8sApiCoreV1LocalObjectReference.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiCoreV1ObjectReference } from "./IoK8sApiCoreV1ObjectReference.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "v1"
      ]
    },
    "automountServiceAccountToken": {
      "type": "boolean"
    },
    "imagePullSecrets": {
      "items": {
        "$ref": "io.k8s.api.core.v1.LocalObjectReference#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "ServiceAccount"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "secrets": {
      "items": {
        "$ref": "io.k8s.api.core.v1.ObjectReference#"
      },
      "type": "array"
    }
  },
  "type": "object",
  "required": [
    "apiVersion",
    "kind"
  ]
};

export function addSchema() {
IoK8sApiCoreV1LocalObjectReference();
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
IoK8sApiCoreV1ObjectReference();
register("io.k8s.api.core.v1.ServiceAccount", schema);
}

