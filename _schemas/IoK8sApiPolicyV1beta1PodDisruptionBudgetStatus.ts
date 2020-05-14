import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";
const schema: object = {
  "properties": {
    "currentHealthy": {
      "format": "int32",
      "type": "integer"
    },
    "desiredHealthy": {
      "format": "int32",
      "type": "integer"
    },
    "disruptedPods": {
      "additionalProperties": {
        "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.Time#"
      },
      "type": "object"
    },
    "disruptionsAllowed": {
      "format": "int32",
      "type": "integer"
    },
    "expectedPods": {
      "format": "int32",
      "type": "integer"
    },
    "observedGeneration": {
      "format": "int64",
      "type": "integer"
    }
  },
  "required": [
    "disruptionsAllowed",
    "currentHealthy",
    "desiredHealthy",
    "expectedPods"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1Time();
register("io.k8s.api.policy.v1beta1.PodDisruptionBudgetStatus", schema);
}

