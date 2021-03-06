import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiBatchV1beta1CronJob } from "./IoK8sApiBatchV1beta1CronJob.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "batch/v1beta1"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.batch.v1beta1.CronJob#"
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
IoK8sApiBatchV1beta1CronJob();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.batch.v1beta1.CronJobList", schema);
}

