import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2MetricValueStatus } from "./IoK8sApiAutoscalingV2beta2MetricValueStatus.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2CrossVersionObjectReference } from "./IoK8sApiAutoscalingV2beta2CrossVersionObjectReference.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2MetricIdentifier } from "./IoK8sApiAutoscalingV2beta2MetricIdentifier.ts";
const schema: object = {
  "properties": {
    "current": {
      "$ref": "io.k8s.api.autoscaling.v2beta2.MetricValueStatus#"
    },
    "describedObject": {
      "$ref": "io.k8s.api.autoscaling.v2beta2.CrossVersionObjectReference#"
    },
    "metric": {
      "$ref": "io.k8s.api.autoscaling.v2beta2.MetricIdentifier#"
    }
  },
  "required": [
    "metric",
    "current",
    "describedObject"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiAutoscalingV2beta2MetricValueStatus();
IoK8sApiAutoscalingV2beta2CrossVersionObjectReference();
IoK8sApiAutoscalingV2beta2MetricIdentifier();
register("io.k8s.api.autoscaling.v2beta2.ObjectMetricStatus", schema);
}

