import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1Affinity } from "./IoK8sApiCoreV1Affinity.ts";

import { addSchema as IoK8sApiCoreV1Container } from "./IoK8sApiCoreV1Container.ts";

import { addSchema as IoK8sApiCoreV1PodDNSConfig } from "./IoK8sApiCoreV1PodDNSConfig.ts";

import { addSchema as IoK8sApiCoreV1EphemeralContainer } from "./IoK8sApiCoreV1EphemeralContainer.ts";

import { addSchema as IoK8sApiCoreV1HostAlias } from "./IoK8sApiCoreV1HostAlias.ts";

import { addSchema as IoK8sApiCoreV1LocalObjectReference } from "./IoK8sApiCoreV1LocalObjectReference.ts";

import { addSchema as IoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { addSchema as IoK8sApiCoreV1PodReadinessGate } from "./IoK8sApiCoreV1PodReadinessGate.ts";

import { addSchema as IoK8sApiCoreV1PodSecurityContext } from "./IoK8sApiCoreV1PodSecurityContext.ts";

import { addSchema as IoK8sApiCoreV1Toleration } from "./IoK8sApiCoreV1Toleration.ts";

import { addSchema as IoK8sApiCoreV1TopologySpreadConstraint } from "./IoK8sApiCoreV1TopologySpreadConstraint.ts";

import { addSchema as IoK8sApiCoreV1Volume } from "./IoK8sApiCoreV1Volume.ts";
const schema: object = {
  "properties": {
    "activeDeadlineSeconds": {
      "format": "int64",
      "type": "integer"
    },
    "affinity": {
      "$ref": "io.k8s.api.core.v1.Affinity#"
    },
    "automountServiceAccountToken": {
      "type": "boolean"
    },
    "containers": {
      "items": {
        "$ref": "io.k8s.api.core.v1.Container#"
      },
      "type": "array"
    },
    "dnsConfig": {
      "$ref": "io.k8s.api.core.v1.PodDNSConfig#"
    },
    "dnsPolicy": {
      "type": "string"
    },
    "enableServiceLinks": {
      "type": "boolean"
    },
    "ephemeralContainers": {
      "items": {
        "$ref": "io.k8s.api.core.v1.EphemeralContainer#"
      },
      "type": "array"
    },
    "hostAliases": {
      "items": {
        "$ref": "io.k8s.api.core.v1.HostAlias#"
      },
      "type": "array"
    },
    "hostIPC": {
      "type": "boolean"
    },
    "hostNetwork": {
      "type": "boolean"
    },
    "hostPID": {
      "type": "boolean"
    },
    "hostname": {
      "type": "string"
    },
    "imagePullSecrets": {
      "items": {
        "$ref": "io.k8s.api.core.v1.LocalObjectReference#"
      },
      "type": "array"
    },
    "initContainers": {
      "items": {
        "$ref": "io.k8s.api.core.v1.Container#"
      },
      "type": "array"
    },
    "nodeName": {
      "type": "string"
    },
    "nodeSelector": {
      "additionalProperties": {
        "type": "string"
      },
      "type": "object"
    },
    "overhead": {
      "additionalProperties": {
        "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
      },
      "type": "object"
    },
    "preemptionPolicy": {
      "type": "string"
    },
    "priority": {
      "format": "int32",
      "type": "integer"
    },
    "priorityClassName": {
      "type": "string"
    },
    "readinessGates": {
      "items": {
        "$ref": "io.k8s.api.core.v1.PodReadinessGate#"
      },
      "type": "array"
    },
    "restartPolicy": {
      "type": "string"
    },
    "runtimeClassName": {
      "type": "string"
    },
    "schedulerName": {
      "type": "string"
    },
    "securityContext": {
      "$ref": "io.k8s.api.core.v1.PodSecurityContext#"
    },
    "serviceAccount": {
      "type": "string"
    },
    "serviceAccountName": {
      "type": "string"
    },
    "shareProcessNamespace": {
      "type": "boolean"
    },
    "subdomain": {
      "type": "string"
    },
    "terminationGracePeriodSeconds": {
      "format": "int64",
      "type": "integer"
    },
    "tolerations": {
      "items": {
        "$ref": "io.k8s.api.core.v1.Toleration#"
      },
      "type": "array"
    },
    "topologySpreadConstraints": {
      "items": {
        "$ref": "io.k8s.api.core.v1.TopologySpreadConstraint#"
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
  "required": [
    "containers"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1Affinity();
IoK8sApiCoreV1Container();
IoK8sApiCoreV1PodDNSConfig();
IoK8sApiCoreV1EphemeralContainer();
IoK8sApiCoreV1HostAlias();
IoK8sApiCoreV1LocalObjectReference();
IoK8sApimachineryPkgApiResourceQuantity();
IoK8sApiCoreV1PodReadinessGate();
IoK8sApiCoreV1PodSecurityContext();
IoK8sApiCoreV1Toleration();
IoK8sApiCoreV1TopologySpreadConstraint();
IoK8sApiCoreV1Volume();
register("io.k8s.api.core.v1.PodSpec", schema);
}

