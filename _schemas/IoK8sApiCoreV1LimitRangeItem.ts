import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";
const schema: object = {
  "properties": {
    "default": {
      "additionalProperties": {
        "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
      },
      "type": "object"
    },
    "defaultRequest": {
      "additionalProperties": {
        "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
      },
      "type": "object"
    },
    "max": {
      "additionalProperties": {
        "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
      },
      "type": "object"
    },
    "maxLimitRequestRatio": {
      "additionalProperties": {
        "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
      },
      "type": "object"
    },
    "min": {
      "additionalProperties": {
        "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
      },
      "type": "object"
    },
    "type": {
      "type": "string"
    }
  },
  "required": [
    "type"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApiResourceQuantity();
register("io.k8s.api.core.v1.LimitRangeItem", schema);
}

