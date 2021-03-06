import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiCoreV1NamespaceSpec } from "./IoK8sApiCoreV1NamespaceSpec.ts";

import { addSchema as IoK8sApiCoreV1NamespaceStatus } from "./IoK8sApiCoreV1NamespaceStatus.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "v1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "Namespace"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.core.v1.NamespaceSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.core.v1.NamespaceStatus#"
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
IoK8sApiCoreV1NamespaceSpec();
IoK8sApiCoreV1NamespaceStatus();
register("io.k8s.api.core.v1.Namespace", schema);
}

