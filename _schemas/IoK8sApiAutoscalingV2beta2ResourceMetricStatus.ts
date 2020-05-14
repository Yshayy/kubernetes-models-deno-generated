import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2MetricValueStatus } from "./IoK8sApiAutoscalingV2beta2MetricValueStatus.ts";
const schema: object = {
  "properties": {
    "current": {
      "$ref": "io.k8s.api.autoscaling.v2beta2.MetricValueStatus#"
    },
    "name": {
      "type": "string"
    }
  },
  "required": [
    "name",
    "current"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiAutoscalingV2beta2MetricValueStatus();
register("io.k8s.api.autoscaling.v2beta2.ResourceMetricStatus", schema);
}

