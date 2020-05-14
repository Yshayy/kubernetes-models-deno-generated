import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiSchedulingV1alpha1PriorityClass } from "./IoK8sApiSchedulingV1alpha1PriorityClass.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "scheduling.k8s.io/v1alpha1"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.scheduling.v1alpha1.PriorityClass#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "PriorityClassList"
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
IoK8sApiSchedulingV1alpha1PriorityClass();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.scheduling.v1alpha1.PriorityClassList", schema);
}

