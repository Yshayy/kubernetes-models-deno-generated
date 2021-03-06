import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAutoscalingV1CrossVersionObjectReference } from "./IoK8sApiAutoscalingV1CrossVersionObjectReference.ts";
const schema: object = {
  "properties": {
    "maxReplicas": {
      "format": "int32",
      "type": "integer"
    },
    "minReplicas": {
      "format": "int32",
      "type": "integer"
    },
    "scaleTargetRef": {
      "$ref": "io.k8s.api.autoscaling.v1.CrossVersionObjectReference#"
    },
    "targetCPUUtilizationPercentage": {
      "format": "int32",
      "type": "integer"
    }
  },
  "required": [
    "scaleTargetRef",
    "maxReplicas"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiAutoscalingV1CrossVersionObjectReference();
register("io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerSpec", schema);
}

