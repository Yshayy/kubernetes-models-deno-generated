import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAutoscalingV2beta1MetricSpec } from "./IoK8sApiAutoscalingV2beta1MetricSpec.ts";

import { addSchema as IoK8sApiAutoscalingV2beta1CrossVersionObjectReference } from "./IoK8sApiAutoscalingV2beta1CrossVersionObjectReference.ts";
const schema: object = {
  "properties": {
    "maxReplicas": {
      "format": "int32",
      "type": "integer"
    },
    "metrics": {
      "items": {
        "$ref": "io.k8s.api.autoscaling.v2beta1.MetricSpec#"
      },
      "type": "array"
    },
    "minReplicas": {
      "format": "int32",
      "type": "integer"
    },
    "scaleTargetRef": {
      "$ref": "io.k8s.api.autoscaling.v2beta1.CrossVersionObjectReference#"
    }
  },
  "required": [
    "scaleTargetRef",
    "maxReplicas"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiAutoscalingV2beta1MetricSpec();
IoK8sApiAutoscalingV2beta1CrossVersionObjectReference();
register("io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerSpec", schema);
}

