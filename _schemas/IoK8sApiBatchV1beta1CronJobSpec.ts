import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiBatchV1beta1JobTemplateSpec } from "./IoK8sApiBatchV1beta1JobTemplateSpec.ts";
const schema: object = {
  "properties": {
    "concurrencyPolicy": {
      "type": "string"
    },
    "failedJobsHistoryLimit": {
      "format": "int32",
      "type": "integer"
    },
    "jobTemplate": {
      "$ref": "io.k8s.api.batch.v1beta1.JobTemplateSpec#"
    },
    "schedule": {
      "type": "string"
    },
    "startingDeadlineSeconds": {
      "format": "int64",
      "type": "integer"
    },
    "successfulJobsHistoryLimit": {
      "format": "int32",
      "type": "integer"
    },
    "suspend": {
      "type": "boolean"
    }
  },
  "required": [
    "schedule",
    "jobTemplate"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiBatchV1beta1JobTemplateSpec();
register("io.k8s.api.batch.v1beta1.CronJobSpec", schema);
}

