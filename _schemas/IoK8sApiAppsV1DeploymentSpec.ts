import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { addSchema as IoK8sApiAppsV1DeploymentStrategy } from "./IoK8sApiAppsV1DeploymentStrategy.ts";

import { addSchema as IoK8sApiCoreV1PodTemplateSpec } from "./IoK8sApiCoreV1PodTemplateSpec.ts";
const schema: object = {
  "properties": {
    "minReadySeconds": {
      "format": "int32",
      "type": "integer"
    },
    "paused": {
      "type": "boolean"
    },
    "progressDeadlineSeconds": {
      "format": "int32",
      "type": "integer"
    },
    "replicas": {
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
    "strategy": {
      "$ref": "io.k8s.api.apps.v1.DeploymentStrategy#"
    },
    "template": {
      "$ref": "io.k8s.api.core.v1.PodTemplateSpec#"
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
IoK8sApiAppsV1DeploymentStrategy();
IoK8sApiCoreV1PodTemplateSpec();
register("io.k8s.api.apps.v1.DeploymentSpec", schema);
}

