import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1SELinuxOptions } from "./IoK8sApiCoreV1SELinuxOptions.ts";

import { addSchema as IoK8sApiCoreV1Sysctl } from "./IoK8sApiCoreV1Sysctl.ts";

import { addSchema as IoK8sApiCoreV1WindowsSecurityContextOptions } from "./IoK8sApiCoreV1WindowsSecurityContextOptions.ts";
const schema: object = {
  "properties": {
    "fsGroup": {
      "format": "int64",
      "type": "integer"
    },
    "fsGroupChangePolicy": {
      "type": "string"
    },
    "runAsGroup": {
      "format": "int64",
      "type": "integer"
    },
    "runAsNonRoot": {
      "type": "boolean"
    },
    "runAsUser": {
      "format": "int64",
      "type": "integer"
    },
    "seLinuxOptions": {
      "$ref": "io.k8s.api.core.v1.SELinuxOptions#"
    },
    "supplementalGroups": {
      "items": {
        "format": "int64",
        "type": "integer"
      },
      "type": "array"
    },
    "sysctls": {
      "items": {
        "$ref": "io.k8s.api.core.v1.Sysctl#"
      },
      "type": "array"
    },
    "windowsOptions": {
      "$ref": "io.k8s.api.core.v1.WindowsSecurityContextOptions#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1SELinuxOptions();
IoK8sApiCoreV1Sysctl();
IoK8sApiCoreV1WindowsSecurityContextOptions();
register("io.k8s.api.core.v1.PodSecurityContext", schema);
}

