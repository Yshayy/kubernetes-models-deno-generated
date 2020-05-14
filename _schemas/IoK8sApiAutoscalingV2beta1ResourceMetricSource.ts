import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";
const schema: object = {
  "properties": {
    "name": {
      "type": "string"
    },
    "targetAverageUtilization": {
      "format": "int32",
      "type": "integer"
    },
    "targetAverageValue": {
      "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
    }
  },
  "required": [
    "name"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApiResourceQuantity();
register("io.k8s.api.autoscaling.v2beta1.ResourceMetricSource", schema);
}

