import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1TopologySelectorTerm } from "./IoK8sApiCoreV1TopologySelectorTerm.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";
const schema: object = {
  "properties": {
    "allowVolumeExpansion": {
      "type": "boolean"
    },
    "allowedTopologies": {
      "items": {
        "$ref": "io.k8s.api.core.v1.TopologySelectorTerm#"
      },
      "type": "array"
    },
    "apiVersion": {
      "type": "string",
      "enum": [
        "storage.k8s.io/v1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "StorageClass"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "mountOptions": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "parameters": {
      "additionalProperties": {
        "type": "string"
      },
      "type": "object"
    },
    "provisioner": {
      "type": "string"
    },
    "reclaimPolicy": {
      "type": "string"
    },
    "volumeBindingMode": {
      "type": "string"
    }
  },
  "required": [
    "provisioner",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1TopologySelectorTerm();
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
register("io.k8s.api.storage.v1.StorageClass", schema);
}

