import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiBatchV1JobSpec } from "./IoK8sApiBatchV1JobSpec.ts";

import { addSchema as IoK8sApiBatchV1JobStatus } from "./IoK8sApiBatchV1JobStatus.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "batch/v1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "Job"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.batch.v1.JobSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.batch.v1.JobStatus#"
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
IoK8sApiBatchV1JobSpec();
IoK8sApiBatchV1JobStatus();
register("io.k8s.api.batch.v1.Job", schema);
}

