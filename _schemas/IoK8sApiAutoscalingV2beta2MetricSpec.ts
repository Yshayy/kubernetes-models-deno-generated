import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2ExternalMetricSource } from "./IoK8sApiAutoscalingV2beta2ExternalMetricSource.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2ObjectMetricSource } from "./IoK8sApiAutoscalingV2beta2ObjectMetricSource.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2PodsMetricSource } from "./IoK8sApiAutoscalingV2beta2PodsMetricSource.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2ResourceMetricSource } from "./IoK8sApiAutoscalingV2beta2ResourceMetricSource.ts";
const schema: object = {
  "properties": {
    "external": {
      "$ref": "io.k8s.api.autoscaling.v2beta2.ExternalMetricSource#"
    },
    "object": {
      "$ref": "io.k8s.api.autoscaling.v2beta2.ObjectMetricSource#"
    },
    "pods": {
      "$ref": "io.k8s.api.autoscaling.v2beta2.PodsMetricSource#"
    },
    "resource": {
      "$ref": "io.k8s.api.autoscaling.v2beta2.ResourceMetricSource#"
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
IoK8sApiAutoscalingV2beta2ExternalMetricSource();
IoK8sApiAutoscalingV2beta2ObjectMetricSource();
IoK8sApiAutoscalingV2beta2PodsMetricSource();
IoK8sApiAutoscalingV2beta2ResourceMetricSource();
register("io.k8s.api.autoscaling.v2beta2.MetricSpec", schema);
}

