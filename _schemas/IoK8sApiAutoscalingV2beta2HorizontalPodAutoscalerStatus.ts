import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerCondition } from "./IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerCondition.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2MetricStatus } from "./IoK8sApiAutoscalingV2beta2MetricStatus.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";
const schema: object = {
  "properties": {
    "conditions": {
      "items": {
        "$ref": "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerCondition#"
      },
      "type": "array"
    },
    "currentMetrics": {
      "items": {
        "$ref": "io.k8s.api.autoscaling.v2beta2.MetricStatus#"
      },
      "type": "array"
    },
    "currentReplicas": {
      "format": "int32",
      "type": "integer"
    },
    "desiredReplicas": {
      "format": "int32",
      "type": "integer"
    },
    "lastScaleTime": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.Time#"
    },
    "observedGeneration": {
      "format": "int64",
      "type": "integer"
    }
  },
  "required": [
    "currentReplicas",
    "desiredReplicas",
    "conditions"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerCondition();
IoK8sApiAutoscalingV2beta2MetricStatus();
IoK8sApimachineryPkgApisMetaV1Time();
register("io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerStatus", schema);
}

