import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerBehavior } from "./IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerBehavior.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2MetricSpec } from "./IoK8sApiAutoscalingV2beta2MetricSpec.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2CrossVersionObjectReference } from "./IoK8sApiAutoscalingV2beta2CrossVersionObjectReference.ts";
const schema: object = {
  "properties": {
    "behavior": {
      "$ref": "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerBehavior#"
    },
    "maxReplicas": {
      "format": "int32",
      "type": "integer"
    },
    "metrics": {
      "items": {
        "$ref": "io.k8s.api.autoscaling.v2beta2.MetricSpec#"
      },
      "type": "array"
    },
    "minReplicas": {
      "format": "int32",
      "type": "integer"
    },
    "scaleTargetRef": {
      "$ref": "io.k8s.api.autoscaling.v2beta2.CrossVersionObjectReference#"
    }
  },
  "required": [
    "scaleTargetRef",
    "maxReplicas"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerBehavior();
IoK8sApiAutoscalingV2beta2MetricSpec();
IoK8sApiAutoscalingV2beta2CrossVersionObjectReference();
register("io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerSpec", schema);
}

