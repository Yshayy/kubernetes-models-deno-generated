import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAutoscalingV2beta1ExternalMetricSource } from "./IoK8sApiAutoscalingV2beta1ExternalMetricSource.ts";

import { addSchema as IoK8sApiAutoscalingV2beta1ObjectMetricSource } from "./IoK8sApiAutoscalingV2beta1ObjectMetricSource.ts";

import { addSchema as IoK8sApiAutoscalingV2beta1PodsMetricSource } from "./IoK8sApiAutoscalingV2beta1PodsMetricSource.ts";

import { addSchema as IoK8sApiAutoscalingV2beta1ResourceMetricSource } from "./IoK8sApiAutoscalingV2beta1ResourceMetricSource.ts";
const schema: object = {
  "properties": {
    "external": {
      "$ref": "io.k8s.api.autoscaling.v2beta1.ExternalMetricSource#"
    },
    "object": {
      "$ref": "io.k8s.api.autoscaling.v2beta1.ObjectMetricSource#"
    },
    "pods": {
      "$ref": "io.k8s.api.autoscaling.v2beta1.PodsMetricSource#"
    },
    "resource": {
      "$ref": "io.k8s.api.autoscaling.v2beta1.ResourceMetricSource#"
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
IoK8sApiAutoscalingV2beta1ExternalMetricSource();
IoK8sApiAutoscalingV2beta1ObjectMetricSource();
IoK8sApiAutoscalingV2beta1PodsMetricSource();
IoK8sApiAutoscalingV2beta1ResourceMetricSource();
register("io.k8s.api.autoscaling.v2beta1.MetricSpec", schema);
}

