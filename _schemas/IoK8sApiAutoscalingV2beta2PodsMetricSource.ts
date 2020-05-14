import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2MetricIdentifier } from "./IoK8sApiAutoscalingV2beta2MetricIdentifier.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2MetricTarget } from "./IoK8sApiAutoscalingV2beta2MetricTarget.ts";
const schema: object = {
  "properties": {
    "metric": {
      "$ref": "io.k8s.api.autoscaling.v2beta2.MetricIdentifier#"
    },
    "target": {
      "$ref": "io.k8s.api.autoscaling.v2beta2.MetricTarget#"
    }
  },
  "required": [
    "metric",
    "target"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiAutoscalingV2beta2MetricIdentifier();
IoK8sApiAutoscalingV2beta2MetricTarget();
register("io.k8s.api.autoscaling.v2beta2.PodsMetricSource", schema);
}

