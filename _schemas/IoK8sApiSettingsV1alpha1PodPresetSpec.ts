import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1EnvVar } from "./IoK8sApiCoreV1EnvVar.ts";

import { addSchema as IoK8sApiCoreV1EnvFromSource } from "./IoK8sApiCoreV1EnvFromSource.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { addSchema as IoK8sApiCoreV1VolumeMount } from "./IoK8sApiCoreV1VolumeMount.ts";

import { addSchema as IoK8sApiCoreV1Volume } from "./IoK8sApiCoreV1Volume.ts";
const schema: object = {
  "properties": {
    "env": {
      "items": {
        "$ref": "io.k8s.api.core.v1.EnvVar#"
      },
      "type": "array"
    },
    "envFrom": {
      "items": {
        "$ref": "io.k8s.api.core.v1.EnvFromSource#"
      },
      "type": "array"
    },
    "selector": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"
    },
    "volumeMounts": {
      "items": {
        "$ref": "io.k8s.api.core.v1.VolumeMount#"
      },
      "type": "array"
    },
    "volumes": {
      "items": {
        "$ref": "io.k8s.api.core.v1.Volume#"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1EnvVar();
IoK8sApiCoreV1EnvFromSource();
IoK8sApimachineryPkgApisMetaV1LabelSelector();
IoK8sApiCoreV1VolumeMount();
IoK8sApiCoreV1Volume();
register("io.k8s.api.settings.v1alpha1.PodPresetSpec", schema);
}

