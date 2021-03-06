import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { addSchema as IoK8sApiCoreV1PodTemplateSpec } from "./IoK8sApiCoreV1PodTemplateSpec.ts";
const schema: object = {
  "properties": {
    "activeDeadlineSeconds": {
      "format": "int64",
      "type": "integer"
    },
    "backoffLimit": {
      "format": "int32",
      "type": "integer"
    },
    "completions": {
      "format": "int32",
      "type": "integer"
    },
    "manualSelector": {
      "type": "boolean"
    },
    "parallelism": {
      "format": "int32",
      "type": "integer"
    },
    "selector": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"
    },
    "template": {
      "$ref": "io.k8s.api.core.v1.PodTemplateSpec#"
    },
    "ttlSecondsAfterFinished": {
      "format": "int32",
      "type": "integer"
    }
  },
  "required": [
    "template"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1LabelSelector();
IoK8sApiCoreV1PodTemplateSpec();
register("io.k8s.api.batch.v1.JobSpec", schema);
}

