import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiPolicyV1beta1PodDisruptionBudget } from "./IoK8sApiPolicyV1beta1PodDisruptionBudget.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "policy/v1beta1"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.policy.v1beta1.PodDisruptionBudget#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "PodDisruptionBudgetList"
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
IoK8sApiPolicyV1beta1PodDisruptionBudget();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.policy.v1beta1.PodDisruptionBudgetList", schema);
}

