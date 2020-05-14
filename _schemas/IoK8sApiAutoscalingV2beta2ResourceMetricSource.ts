import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2MetricTarget } from "./IoK8sApiAutoscalingV2beta2MetricTarget.ts";
const schema: object = {
  "properties": {
    "name": {
      "type": "string"
    },
    "target": {
      "$ref": "io.k8s.api.autoscaling.v2beta2.MetricTarget#"
    }
  },
  "required": [
    "name",
    "target"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiAutoscalingV2beta2MetricTarget();
register("io.k8s.api.autoscaling.v2beta2.ResourceMetricSource", schema);
}

