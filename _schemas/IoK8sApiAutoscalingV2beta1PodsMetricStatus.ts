import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";
const schema: object = {
  "properties": {
    "currentAverageValue": {
      "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
    },
    "metricName": {
      "type": "string"
    },
    "selector": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"
    }
  },
  "required": [
    "metricName",
    "currentAverageValue"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApiResourceQuantity();
IoK8sApimachineryPkgApisMetaV1LabelSelector();
register("io.k8s.api.autoscaling.v2beta1.PodsMetricStatus", schema);
}

