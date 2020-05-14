import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiAppsV1DaemonSetSpec } from "./IoK8sApiAppsV1DaemonSetSpec.ts";

import { addSchema as IoK8sApiAppsV1DaemonSetStatus } from "./IoK8sApiAppsV1DaemonSetStatus.ts";
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
        "DaemonSet"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.apps.v1.DaemonSetSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.apps.v1.DaemonSetStatus#"
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
IoK8sApiAppsV1DaemonSetSpec();
IoK8sApiAppsV1DaemonSetStatus();
register("io.k8s.api.apps.v1.DaemonSet", schema);
}

