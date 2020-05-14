import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiAppsV1StatefulSetSpec } from "./IoK8sApiAppsV1StatefulSetSpec.ts";

import { addSchema as IoK8sApiAppsV1StatefulSetStatus } from "./IoK8sApiAppsV1StatefulSetStatus.ts";
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
        "StatefulSet"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.apps.v1.StatefulSetSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.apps.v1.StatefulSetStatus#"
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
IoK8sApiAppsV1StatefulSetSpec();
IoK8sApiAppsV1StatefulSetStatus();
register("io.k8s.api.apps.v1.StatefulSet", schema);
}

