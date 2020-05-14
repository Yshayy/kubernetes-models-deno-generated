import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiCoreV1PodSpec } from "./IoK8sApiCoreV1PodSpec.ts";
const schema: object = {
  "properties": {
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.core.v1.PodSpec#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
IoK8sApiCoreV1PodSpec();
register("io.k8s.api.core.v1.PodTemplateSpec", schema);
}

