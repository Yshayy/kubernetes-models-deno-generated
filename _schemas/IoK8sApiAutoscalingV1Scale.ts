import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiAutoscalingV1ScaleSpec } from "./IoK8sApiAutoscalingV1ScaleSpec.ts";

import { addSchema as IoK8sApiAutoscalingV1ScaleStatus } from "./IoK8sApiAutoscalingV1ScaleStatus.ts";
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
        "Scale"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.autoscaling.v1.ScaleSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.autoscaling.v1.ScaleStatus#"
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
IoK8sApiAutoscalingV1ScaleSpec();
IoK8sApiAutoscalingV1ScaleStatus();
register("io.k8s.api.autoscaling.v1.Scale", schema);
}

