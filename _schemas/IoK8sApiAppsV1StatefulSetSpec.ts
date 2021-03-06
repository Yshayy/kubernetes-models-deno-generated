import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { addSchema as IoK8sApiCoreV1PodTemplateSpec } from "./IoK8sApiCoreV1PodTemplateSpec.ts";

import { addSchema as IoK8sApiAppsV1StatefulSetUpdateStrategy } from "./IoK8sApiAppsV1StatefulSetUpdateStrategy.ts";

import { addSchema as IoK8sApiCoreV1PersistentVolumeClaim } from "./IoK8sApiCoreV1PersistentVolumeClaim.ts";
const schema: object = {
  "properties": {
    "podManagementPolicy": {
      "type": "string"
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
    "serviceName": {
      "type": "string"
    },
    "template": {
      "$ref": "io.k8s.api.core.v1.PodTemplateSpec#"
    },
    "updateStrategy": {
      "$ref": "io.k8s.api.apps.v1.StatefulSetUpdateStrategy#"
    },
    "volumeClaimTemplates": {
      "items": {
        "$ref": "io.k8s.api.core.v1.PersistentVolumeClaim#"
      },
      "type": "array"
    }
  },
  "required": [
    "selector",
    "template",
    "serviceName"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1LabelSelector();
IoK8sApiCoreV1PodTemplateSpec();
IoK8sApiAppsV1StatefulSetUpdateStrategy();
IoK8sApiCoreV1PersistentVolumeClaim();
register("io.k8s.api.apps.v1.StatefulSetSpec", schema);
}

