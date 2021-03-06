import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { addSchema as IoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";
const schema: object = {
  "properties": {
    "metricName": {
      "type": "string"
    },
    "metricSelector": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"
    },
    "targetAverageValue": {
      "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
    },
    "targetValue": {
      "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
    }
  },
  "required": [
    "metricName"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1LabelSelector();
IoK8sApimachineryPkgApiResourceQuantity();
register("io.k8s.api.autoscaling.v2beta1.ExternalMetricSource", schema);
}

