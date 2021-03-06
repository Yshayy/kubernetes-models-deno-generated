import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiAppsV1ReplicaSetSpec } from "./IoK8sApiAppsV1ReplicaSetSpec.ts";

import { addSchema as IoK8sApiAppsV1ReplicaSetStatus } from "./IoK8sApiAppsV1ReplicaSetStatus.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "apps/v1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "ReplicaSet"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.apps.v1.ReplicaSetSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.apps.v1.ReplicaSetStatus#"
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
IoK8sApiAppsV1ReplicaSetSpec();
IoK8sApiAppsV1ReplicaSetStatus();
register("io.k8s.api.apps.v1.ReplicaSet", schema);
}

