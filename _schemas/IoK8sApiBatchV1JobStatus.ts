import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { addSchema as IoK8sApiBatchV1JobCondition } from "./IoK8sApiBatchV1JobCondition.ts";
const schema: object = {
  "properties": {
    "active": {
      "format": "int32",
      "type": "integer"
    },
    "completionTime": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.Time#"
    },
    "conditions": {
      "items": {
        "$ref": "io.k8s.api.batch.v1.JobCondition#"
      },
      "type": "array"
    },
    "failed": {
      "format": "int32",
      "type": "integer"
    },
    "startTime": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.Time#"
    },
    "succeeded": {
      "format": "int32",
      "type": "integer"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1Time();
IoK8sApiBatchV1JobCondition();
register("io.k8s.api.batch.v1.JobStatus", schema);
}

