import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";
const schema: object = {
  "properties": {
    "containerName": {
      "type": "string"
    },
    "divisor": {
      "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
    },
    "resource": {
      "type": "string"
    }
  },
  "required": [
    "resource"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApiResourceQuantity();
register("io.k8s.api.core.v1.ResourceFieldSelector", schema);
}

