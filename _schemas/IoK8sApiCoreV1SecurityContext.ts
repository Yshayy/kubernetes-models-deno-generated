import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1Capabilities } from "./IoK8sApiCoreV1Capabilities.ts";

import { addSchema as IoK8sApiCoreV1SELinuxOptions } from "./IoK8sApiCoreV1SELinuxOptions.ts";

import { addSchema as IoK8sApiCoreV1WindowsSecurityContextOptions } from "./IoK8sApiCoreV1WindowsSecurityContextOptions.ts";
const schema: object = {
  "properties": {
    "allowPrivilegeEscalation": {
      "type": "boolean"
    },
    "capabilities": {
      "$ref": "io.k8s.api.core.v1.Capabilities#"
    },
    "privileged": {
      "type": "boolean"
    },
    "procMount": {
      "type": "string"
    },
    "readOnlyRootFilesystem": {
      "type": "boolean"
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
    "windowsOptions": {
      "$ref": "io.k8s.api.core.v1.WindowsSecurityContextOptions#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1Capabilities();
IoK8sApiCoreV1SELinuxOptions();
IoK8sApiCoreV1WindowsSecurityContextOptions();
register("io.k8s.api.core.v1.SecurityContext", schema);
}

