import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiBatchV1beta1CronJobSpec } from "./IoK8sApiBatchV1beta1CronJobSpec.ts";

import { addSchema as IoK8sApiBatchV1beta1CronJobStatus } from "./IoK8sApiBatchV1beta1CronJobStatus.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "batch/v1beta1"
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
      "$ref": "io.k8s.api.batch.v1beta1.CronJobSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.batch.v1beta1.CronJobStatus#"
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
IoK8sApiBatchV1beta1CronJobSpec();
IoK8sApiBatchV1beta1CronJobStatus();
register("io.k8s.api.batch.v1beta1.CronJob", schema);
}

