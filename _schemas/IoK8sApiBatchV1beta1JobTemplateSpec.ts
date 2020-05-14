import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiBatchV1JobSpec } from "./IoK8sApiBatchV1JobSpec.ts";
const schema: object = {
  "properties": {
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.batch.v1.JobSpec#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
IoK8sApiBatchV1JobSpec();
register("io.k8s.api.batch.v1beta1.JobTemplateSpec", schema);
}

