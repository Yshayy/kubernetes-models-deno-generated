import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";
const schema: object = {
  "properties": {
    "currentAverageUtilization": {
      "format": "int32",
      "type": "integer"
    },
    "currentAverageValue": {
      "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
    },
    "name": {
      "type": "string"
    }
  },
  "required": [
    "name",
    "currentAverageValue"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApiResourceQuantity();
register("io.k8s.api.autoscaling.v2beta1.ResourceMetricStatus", schema);
}

