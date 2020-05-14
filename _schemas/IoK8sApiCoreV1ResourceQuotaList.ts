import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1ResourceQuota } from "./IoK8sApiCoreV1ResourceQuota.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "v1"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.core.v1.ResourceQuota#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "ResourceQuotaList"
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
IoK8sApiCoreV1ResourceQuota();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.core.v1.ResourceQuotaList", schema);
}

