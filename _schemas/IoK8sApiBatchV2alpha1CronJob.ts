import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiBatchV2alpha1CronJobSpec } from "./IoK8sApiBatchV2alpha1CronJobSpec.ts";

import { addSchema as IoK8sApiBatchV2alpha1CronJobStatus } from "./IoK8sApiBatchV2alpha1CronJobStatus.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "batch/v2alpha1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "CronJob"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.batch.v2alpha1.CronJobSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.batch.v2alpha1.CronJobStatus#"
    }
  },
  "type": "object",
  "required": [
    "apiVersion",
    "kind"
  ]
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
IoK8sApiBatchV2alpha1CronJobSpec();
IoK8sApiBatchV2alpha1CronJobStatus();
register("io.k8s.api.batch.v2alpha1.CronJob", schema);
}

