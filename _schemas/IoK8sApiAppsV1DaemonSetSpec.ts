import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { addSchema as IoK8sApiCoreV1PodTemplateSpec } from "./IoK8sApiCoreV1PodTemplateSpec.ts";

import { addSchema as IoK8sApiAppsV1DaemonSetUpdateStrategy } from "./IoK8sApiAppsV1DaemonSetUpdateStrategy.ts";
const schema: object = {
  "properties": {
    "minReadySeconds": {
      "format": "int32",
      "type": "integer"
    },
    "revisionHistoryLimit": {
      "format": "int32",
      "type": "integer"
    },
    "selector": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"
    },
    "template": {
      "$ref": "io.k8s.api.core.v1.PodTemplateSpec#"
    },
    "updateStrategy": {
      "$ref": "io.k8s.api.apps.v1.DaemonSetUpdateStrategy#"
    }
  },
  "required": [
    "selector",
    "template"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1LabelSelector();
IoK8sApiCoreV1PodTemplateSpec();
IoK8sApiAppsV1DaemonSetUpdateStrategy();
register("io.k8s.api.apps.v1.DaemonSetSpec", schema);
}

