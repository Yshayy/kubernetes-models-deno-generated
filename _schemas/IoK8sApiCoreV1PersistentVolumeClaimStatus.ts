import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { addSchema as IoK8sApiCoreV1PersistentVolumeClaimCondition } from "./IoK8sApiCoreV1PersistentVolumeClaimCondition.ts";
const schema: object = {
  "properties": {
    "accessModes": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "capacity": {
      "additionalProperties": {
        "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
      },
      "type": "object"
    },
    "conditions": {
      "items": {
        "$ref": "io.k8s.api.core.v1.PersistentVolumeClaimCondition#"
      },
      "type": "array"
    },
    "phase": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApiResourceQuantity();
IoK8sApiCoreV1PersistentVolumeClaimCondition();
register("io.k8s.api.core.v1.PersistentVolumeClaimStatus", schema);
}

