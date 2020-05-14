import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAppsV1ReplicaSet } from "./IoK8sApiAppsV1ReplicaSet.ts";

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
        "$ref": "io.k8s.api.apps.v1.ReplicaSet#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "ReplicaSetList"
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
IoK8sApiAppsV1ReplicaSet();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.apps.v1.ReplicaSetList", schema);
}

