import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiCoreV1PodSpec } from "./IoK8sApiCoreV1PodSpec.ts";

import { addSchema as IoK8sApiCoreV1PodStatus } from "./IoK8sApiCoreV1PodStatus.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "v1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "Pod"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.core.v1.PodSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.core.v1.PodStatus#"
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
IoK8sApiCoreV1PodSpec();
IoK8sApiCoreV1PodStatus();
register("io.k8s.api.core.v1.Pod", schema);
}

