import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler } from "./IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "autoscaling/v2beta2"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscaler#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "HorizontalPodAutoscalerList"
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
IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerList", schema);
}

