import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec } from "./IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec.ts";

import { addSchema as IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerStatus } from "./IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerStatus.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "autoscaling/v2beta2"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "HorizontalPodAutoscaler"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerStatus#"
    }
  },
  "type": "object",
  "required": [
    "apiVersion",
    "kind"
  ]
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec();
IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerStatus();
register("io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscaler", schema);
}

