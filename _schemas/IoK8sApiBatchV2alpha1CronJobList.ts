import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiBatchV2alpha1CronJob } from "./IoK8sApiBatchV2alpha1CronJob.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "batch/v2alpha1"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.batch.v2alpha1.CronJob#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "CronJobList"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta#"
    }
  },
  "required": [
    "items",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiBatchV2alpha1CronJob();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.batch.v2alpha1.CronJobList", schema);
}

