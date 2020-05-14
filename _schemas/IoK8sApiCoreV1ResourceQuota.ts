import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiCoreV1ResourceQuotaSpec } from "./IoK8sApiCoreV1ResourceQuotaSpec.ts";

import { addSchema as IoK8sApiCoreV1ResourceQuotaStatus } from "./IoK8sApiCoreV1ResourceQuotaStatus.ts";
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
        "ResourceQuota"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.core.v1.ResourceQuotaSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.core.v1.ResourceQuotaStatus#"
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
IoK8sApiCoreV1ResourceQuotaSpec();
IoK8sApiCoreV1ResourceQuotaStatus();
register("io.k8s.api.core.v1.ResourceQuota", schema);
}

