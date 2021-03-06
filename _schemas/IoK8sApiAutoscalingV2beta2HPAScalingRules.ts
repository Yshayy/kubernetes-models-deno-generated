import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2HPAScalingPolicy } from "./IoK8sApiAutoscalingV2beta2HPAScalingPolicy.ts";
const schema: object = {
  "properties": {
    "policies": {
      "items": {
        "$ref": "io.k8s.api.autoscaling.v2beta2.HPAScalingPolicy#"
      },
      "type": "array"
    },
    "selectPolicy": {
      "type": "string"
    },
    "stabilizationWindowSeconds": {
      "format": "int32",
      "type": "integer"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiAutoscalingV2beta2HPAScalingPolicy();
register("io.k8s.api.autoscaling.v2beta2.HPAScalingRules", schema);
}

