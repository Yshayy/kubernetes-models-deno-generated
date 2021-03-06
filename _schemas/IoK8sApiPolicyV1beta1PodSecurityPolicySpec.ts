import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiPolicyV1beta1AllowedCSIDriver } from "./IoK8sApiPolicyV1beta1AllowedCSIDriver.ts";

import { addSchema as IoK8sApiPolicyV1beta1AllowedFlexVolume } from "./IoK8sApiPolicyV1beta1AllowedFlexVolume.ts";

import { addSchema as IoK8sApiPolicyV1beta1AllowedHostPath } from "./IoK8sApiPolicyV1beta1AllowedHostPath.ts";

import { addSchema as IoK8sApiPolicyV1beta1FSGroupStrategyOptions } from "./IoK8sApiPolicyV1beta1FSGroupStrategyOptions.ts";

import { addSchema as IoK8sApiPolicyV1beta1HostPortRange } from "./IoK8sApiPolicyV1beta1HostPortRange.ts";

import { addSchema as IoK8sApiPolicyV1beta1RunAsGroupStrategyOptions } from "./IoK8sApiPolicyV1beta1RunAsGroupStrategyOptions.ts";

import { addSchema as IoK8sApiPolicyV1beta1RunAsUserStrategyOptions } from "./IoK8sApiPolicyV1beta1RunAsUserStrategyOptions.ts";

import { addSchema as IoK8sApiPolicyV1beta1RuntimeClassStrategyOptions } from "./IoK8sApiPolicyV1beta1RuntimeClassStrategyOptions.ts";

import { addSchema as IoK8sApiPolicyV1beta1SELinuxStrategyOptions } from "./IoK8sApiPolicyV1beta1SELinuxStrategyOptions.ts";

import { addSchema as IoK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions } from "./IoK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions.ts";
const schema: object = {
  "properties": {
    "allowPrivilegeEscalation": {
      "type": "boolean"
    },
    "allowedCSIDrivers": {
      "items": {
        "$ref": "io.k8s.api.policy.v1beta1.AllowedCSIDriver#"
      },
      "type": "array"
    },
    "allowedCapabilities": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "allowedFlexVolumes": {
      "items": {
        "$ref": "io.k8s.api.policy.v1beta1.AllowedFlexVolume#"
      },
      "type": "array"
    },
    "allowedHostPaths": {
      "items": {
        "$ref": "io.k8s.api.policy.v1beta1.AllowedHostPath#"
      },
      "type": "array"
    },
    "allowedProcMountTypes": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "allowedUnsafeSysctls": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "defaultAddCapabilities": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "defaultAllowPrivilegeEscalation": {
      "type": "boolean"
    },
    "forbiddenSysctls": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "fsGroup": {
      "$ref": "io.k8s.api.policy.v1beta1.FSGroupStrategyOptions#"
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
    "hostPorts": {
      "items": {
        "$ref": "io.k8s.api.policy.v1beta1.HostPortRange#"
      },
      "type": "array"
    },
    "privileged": {
      "type": "boolean"
    },
    "readOnlyRootFilesystem": {
      "type": "boolean"
    },
    "requiredDropCapabilities": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "runAsGroup": {
      "$ref": "io.k8s.api.policy.v1beta1.RunAsGroupStrategyOptions#"
    },
    "runAsUser": {
      "$ref": "io.k8s.api.policy.v1beta1.RunAsUserStrategyOptions#"
    },
    "runtimeClass": {
      "$ref": "io.k8s.api.policy.v1beta1.RuntimeClassStrategyOptions#"
    },
    "seLinux": {
      "$ref": "io.k8s.api.policy.v1beta1.SELinuxStrategyOptions#"
    },
    "supplementalGroups": {
      "$ref": "io.k8s.api.policy.v1beta1.SupplementalGroupsStrategyOptions#"
    },
    "volumes": {
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "required": [
    "seLinux",
    "runAsUser",
    "supplementalGroups",
    "fsGroup"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiPolicyV1beta1AllowedCSIDriver();
IoK8sApiPolicyV1beta1AllowedFlexVolume();
IoK8sApiPolicyV1beta1AllowedHostPath();
IoK8sApiPolicyV1beta1FSGroupStrategyOptions();
IoK8sApiPolicyV1beta1HostPortRange();
IoK8sApiPolicyV1beta1RunAsGroupStrategyOptions();
IoK8sApiPolicyV1beta1RunAsUserStrategyOptions();
IoK8sApiPolicyV1beta1RuntimeClassStrategyOptions();
IoK8sApiPolicyV1beta1SELinuxStrategyOptions();
IoK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions();
register("io.k8s.api.policy.v1beta1.PodSecurityPolicySpec", schema);
}

