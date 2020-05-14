import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiNodeV1beta1Overhead } from "./IoK8sApiNodeV1beta1Overhead.ts";

import { addSchema as IoK8sApiNodeV1beta1Scheduling } from "./IoK8sApiNodeV1beta1Scheduling.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "node.k8s.io/v1beta1"
      ]
    },
    "handler": {
      "type": "string"
    },
    "kind": {
      "type": "string",
      "enum": [
        "RuntimeClass"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "overhead": {
      "$ref": "io.k8s.api.node.v1beta1.Overhead#"
    },
    "scheduling": {
      "$ref": "io.k8s.api.node.v1beta1.Scheduling#"
    }
  },
  "required": [
    "handler",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
IoK8sApiNodeV1beta1Overhead();
IoK8sApiNodeV1beta1Scheduling();
register("io.k8s.api.node.v1beta1.RuntimeClass", schema);
}

