import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1EnvVar } from "./IoK8sApiCoreV1EnvVar.ts";

import { addSchema as IoK8sApiCoreV1EnvFromSource } from "./IoK8sApiCoreV1EnvFromSource.ts";

import { addSchema as IoK8sApiCoreV1Lifecycle } from "./IoK8sApiCoreV1Lifecycle.ts";

import { addSchema as IoK8sApiCoreV1Probe } from "./IoK8sApiCoreV1Probe.ts";

import { addSchema as IoK8sApiCoreV1ContainerPort } from "./IoK8sApiCoreV1ContainerPort.ts";

import { addSchema as IoK8sApiCoreV1ResourceRequirements } from "./IoK8sApiCoreV1ResourceRequirements.ts";

import { addSchema as IoK8sApiCoreV1SecurityContext } from "./IoK8sApiCoreV1SecurityContext.ts";

import { addSchema as IoK8sApiCoreV1VolumeDevice } from "./IoK8sApiCoreV1VolumeDevice.ts";

import { addSchema as IoK8sApiCoreV1VolumeMount } from "./IoK8sApiCoreV1VolumeMount.ts";
const schema: object = {
  "properties": {
    "args": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "command": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
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
    "image": {
      "type": "string"
    },
    "imagePullPolicy": {
      "type": "string"
    },
    "lifecycle": {
      "$ref": "io.k8s.api.core.v1.Lifecycle#"
    },
    "livenessProbe": {
      "$ref": "io.k8s.api.core.v1.Probe#"
    },
    "name": {
      "type": "string"
    },
    "ports": {
      "items": {
        "$ref": "io.k8s.api.core.v1.ContainerPort#"
      },
      "type": "array"
    },
    "readinessProbe": {
      "$ref": "io.k8s.api.core.v1.Probe#"
    },
    "resources": {
      "$ref": "io.k8s.api.core.v1.ResourceRequirements#"
    },
    "securityContext": {
      "$ref": "io.k8s.api.core.v1.SecurityContext#"
    },
    "startupProbe": {
      "$ref": "io.k8s.api.core.v1.Probe#"
    },
    "stdin": {
      "type": "boolean"
    },
    "stdinOnce": {
      "type": "boolean"
    },
    "targetContainerName": {
      "type": "string"
    },
    "terminationMessagePath": {
      "type": "string"
    },
    "terminationMessagePolicy": {
      "type": "string"
    },
    "tty": {
      "type": "boolean"
    },
    "volumeDevices": {
      "items": {
        "$ref": "io.k8s.api.core.v1.VolumeDevice#"
      },
      "type": "array"
    },
    "volumeMounts": {
      "items": {
        "$ref": "io.k8s.api.core.v1.VolumeMount#"
      },
      "type": "array"
    },
    "workingDir": {
      "type": "string"
    }
  },
  "required": [
    "name"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1EnvVar();
IoK8sApiCoreV1EnvFromSource();
IoK8sApiCoreV1Lifecycle();
IoK8sApiCoreV1Probe();
IoK8sApiCoreV1ContainerPort();
IoK8sApiCoreV1ResourceRequirements();
IoK8sApiCoreV1SecurityContext();
IoK8sApiCoreV1VolumeDevice();
IoK8sApiCoreV1VolumeMount();
register("io.k8s.api.core.v1.EphemeralContainer", schema);
}

