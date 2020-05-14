import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAppsV1StatefulSet } from "./IoK8sApiAppsV1StatefulSet.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "apps/v1"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.apps.v1.StatefulSet#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "StatefulSetList"
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
IoK8sApiAppsV1StatefulSet();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.apps.v1.StatefulSetList", schema);
}

