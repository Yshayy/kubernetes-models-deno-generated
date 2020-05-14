import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1Pod } from "./IoK8sApiCoreV1Pod.ts";

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
        "$ref": "io.k8s.api.core.v1.Pod#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "PodList"
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
IoK8sApiCoreV1Pod();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.core.v1.PodList", schema);
}

