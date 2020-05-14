import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiNodeV1alpha1RuntimeClassSpec } from "./IoK8sApiNodeV1alpha1RuntimeClassSpec.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "node.k8s.io/v1alpha1"
      ]
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
    "spec": {
      "$ref": "io.k8s.api.node.v1alpha1.RuntimeClassSpec#"
    }
  },
  "required": [
    "spec",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
IoK8sApiNodeV1alpha1RuntimeClassSpec();
register("io.k8s.api.node.v1alpha1.RuntimeClass", schema);
}

