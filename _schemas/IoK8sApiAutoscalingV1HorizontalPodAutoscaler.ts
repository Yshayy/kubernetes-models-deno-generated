import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec } from "./IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec.ts";

import { addSchema as IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus } from "./IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "autoscaling/v1"
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
      "$ref": "io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerStatus#"
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
IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec();
IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus();
register("io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler", schema);
}

