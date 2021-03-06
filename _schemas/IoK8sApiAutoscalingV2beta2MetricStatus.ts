import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2ExternalMetricStatus } from "./IoK8sApiAutoscalingV2beta2ExternalMetricStatus.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2ObjectMetricStatus } from "./IoK8sApiAutoscalingV2beta2ObjectMetricStatus.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2PodsMetricStatus } from "./IoK8sApiAutoscalingV2beta2PodsMetricStatus.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2ResourceMetricStatus } from "./IoK8sApiAutoscalingV2beta2ResourceMetricStatus.ts";
const schema: object = {
  "properties": {
    "external": {
      "$ref": "io.k8s.api.autoscaling.v2beta2.ExternalMetricStatus#"
    },
    "object": {
      "$ref": "io.k8s.api.autoscaling.v2beta2.ObjectMetricStatus#"
    },
    "pods": {
      "$ref": "io.k8s.api.autoscaling.v2beta2.PodsMetricStatus#"
    },
    "resource": {
      "$ref": "io.k8s.api.autoscaling.v2beta2.ResourceMetricStatus#"
    },
    "type": {
      "type": "string"
    }
  },
  "required": [
    "type"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiAutoscalingV2beta2ExternalMetricStatus();
IoK8sApiAutoscalingV2beta2ObjectMetricStatus();
IoK8sApiAutoscalingV2beta2PodsMetricStatus();
IoK8sApiAutoscalingV2beta2ResourceMetricStatus();
register("io.k8s.api.autoscaling.v2beta2.MetricStatus", schema);
}

