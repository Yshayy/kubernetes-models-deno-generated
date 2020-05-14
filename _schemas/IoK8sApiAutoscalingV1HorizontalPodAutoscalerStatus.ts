import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";
const schema: object = {
  "properties": {
    "currentCPUUtilizationPercentage": {
      "format": "int32",
      "type": "integer"
    },
    "currentReplicas": {
      "format": "int32",
      "type": "integer"
    },
    "desiredReplicas": {
      "format": "int32",
      "type": "integer"
    },
    "lastScaleTime": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.Time#"
    },
    "observedGeneration": {
      "format": "int64",
      "type": "integer"
    }
  },
  "required": [
    "currentReplicas",
    "desiredReplicas"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1Time();
register("io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerStatus", schema);
}

