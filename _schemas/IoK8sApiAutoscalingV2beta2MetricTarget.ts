import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";
const schema: object = {
  "properties": {
    "averageUtilization": {
      "format": "int32",
      "type": "integer"
    },
    "averageValue": {
      "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
    },
    "type": {
      "type": "string"
    },
    "value": {
      "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
    }
  },
  "required": [
    "type"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApiResourceQuantity();
register("io.k8s.api.autoscaling.v2beta2.MetricTarget", schema);
}

