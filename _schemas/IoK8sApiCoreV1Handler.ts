import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1ExecAction } from "./IoK8sApiCoreV1ExecAction.ts";

import { addSchema as IoK8sApiCoreV1HTTPGetAction } from "./IoK8sApiCoreV1HTTPGetAction.ts";

import { addSchema as IoK8sApiCoreV1TCPSocketAction } from "./IoK8sApiCoreV1TCPSocketAction.ts";
const schema: object = {
  "properties": {
    "exec": {
      "$ref": "io.k8s.api.core.v1.ExecAction#"
    },
    "httpGet": {
      "$ref": "io.k8s.api.core.v1.HTTPGetAction#"
    },
    "tcpSocket": {
      "$ref": "io.k8s.api.core.v1.TCPSocketAction#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1ExecAction();
IoK8sApiCoreV1HTTPGetAction();
IoK8sApiCoreV1TCPSocketAction();
register("io.k8s.api.core.v1.Handler", schema);
}

