import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2HPAScalingRules } from "./IoK8sApiAutoscalingV2beta2HPAScalingRules.ts";
const schema: object = {
  "properties": {
    "scaleDown": {
      "$ref": "io.k8s.api.autoscaling.v2beta2.HPAScalingRules#"
    },
    "scaleUp": {
      "$ref": "io.k8s.api.autoscaling.v2beta2.HPAScalingRules#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiAutoscalingV2beta2HPAScalingRules();
register("io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerBehavior", schema);
}

