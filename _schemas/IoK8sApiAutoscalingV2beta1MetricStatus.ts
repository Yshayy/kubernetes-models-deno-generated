import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAutoscalingV2beta1ExternalMetricStatus } from "./IoK8sApiAutoscalingV2beta1ExternalMetricStatus.ts";

import { addSchema as IoK8sApiAutoscalingV2beta1ObjectMetricStatus } from "./IoK8sApiAutoscalingV2beta1ObjectMetricStatus.ts";

import { addSchema as IoK8sApiAutoscalingV2beta1PodsMetricStatus } from "./IoK8sApiAutoscalingV2beta1PodsMetricStatus.ts";

import { addSchema as IoK8sApiAutoscalingV2beta1ResourceMetricStatus } from "./IoK8sApiAutoscalingV2beta1ResourceMetricStatus.ts";
const schema: object = {
  "properties": {
    "external": {
      "$ref": "io.k8s.api.autoscaling.v2beta1.ExternalMetricStatus#"
    },
    "object": {
      "$ref": "io.k8s.api.autoscaling.v2beta1.ObjectMetricStatus#"
    },
    "pods": {
      "$ref": "io.k8s.api.autoscaling.v2beta1.PodsMetricStatus#"
    },
    "resource": {
      "$ref": "io.k8s.api.autoscaling.v2beta1.ResourceMetricStatus#"
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
IoK8sApiAutoscalingV2beta1ExternalMetricStatus();
IoK8sApiAutoscalingV2beta1ObjectMetricStatus();
IoK8sApiAutoscalingV2beta1PodsMetricStatus();
IoK8sApiAutoscalingV2beta1ResourceMetricStatus();
register("io.k8s.api.autoscaling.v2beta1.MetricStatus", schema);
}

