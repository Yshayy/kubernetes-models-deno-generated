import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { addSchema as IoK8sApiAutoscalingV2beta1CrossVersionObjectReference } from "./IoK8sApiAutoscalingV2beta1CrossVersionObjectReference.ts";
const schema: object = {
  "properties": {
    "averageValue": {
      "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
    },
    "currentValue": {
      "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
    },
    "metricName": {
      "type": "string"
    },
    "selector": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"
    },
    "target": {
      "$ref": "io.k8s.api.autoscaling.v2beta1.CrossVersionObjectReference#"
    }
  },
  "required": [
    "target",
    "metricName",
    "currentValue"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApiResourceQuantity();
IoK8sApimachineryPkgApisMetaV1LabelSelector();
IoK8sApiAutoscalingV2beta1CrossVersionObjectReference();
register("io.k8s.api.autoscaling.v2beta1.ObjectMetricStatus", schema);
}

