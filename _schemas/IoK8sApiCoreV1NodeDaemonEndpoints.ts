import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1DaemonEndpoint } from "./IoK8sApiCoreV1DaemonEndpoint.ts";
const schema: object = {
  "properties": {
    "kubeletEndpoint": {
      "$ref": "io.k8s.api.core.v1.DaemonEndpoint#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1DaemonEndpoint();
register("io.k8s.api.core.v1.NodeDaemonEndpoints", schema);
}

