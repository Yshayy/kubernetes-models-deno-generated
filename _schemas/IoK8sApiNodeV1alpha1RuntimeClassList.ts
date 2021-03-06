import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiNodeV1alpha1RuntimeClass } from "./IoK8sApiNodeV1alpha1RuntimeClass.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "node.k8s.io/v1alpha1"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.node.v1alpha1.RuntimeClass#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "RuntimeClassList"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta#"
    }
  },
  "required": [
    "items",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiNodeV1alpha1RuntimeClass();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.node.v1alpha1.RuntimeClassList", schema);
}

