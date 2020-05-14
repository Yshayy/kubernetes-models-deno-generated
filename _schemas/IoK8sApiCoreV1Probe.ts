import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1ExecAction } from "./IoK8sApiCoreV1ExecAction.ts";

import { addSchema as IoK8sApiCoreV1HTTPGetAction } from "./IoK8sApiCoreV1HTTPGetAction.ts";

import { addSchema as IoK8sApiCoreV1TCPSocketAction } from "./IoK8sApiCoreV1TCPSocketAction.ts";
const schema: object = {
  "properties": {
    "exec": {
      "$ref": "io.k8s.api.core.v1.ExecAction#"
    },
    "failureThreshold": {
      "format": "int32",
      "type": "integer"
    },
    "httpGet": {
      "$ref": "io.k8s.api.core.v1.HTTPGetAction#"
    },
    "initialDelaySeconds": {
      "format": "int32",
      "type": "integer"
    },
    "periodSeconds": {
      "format": "int32",
      "type": "integer"
    },
    "successThreshold": {
      "format": "int32",
      "type": "integer"
    },
    "tcpSocket": {
      "$ref": "io.k8s.api.core.v1.TCPSocketAction#"
    },
    "timeoutSeconds": {
      "format": "int32",
      "type": "integer"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1ExecAction();
IoK8sApiCoreV1HTTPGetAction();
IoK8sApiCoreV1TCPSocketAction();
register("io.k8s.api.core.v1.Probe", schema);
}

