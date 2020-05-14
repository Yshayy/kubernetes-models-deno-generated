import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1ConfigMapNodeConfigSource } from "./IoK8sApiCoreV1ConfigMapNodeConfigSource.ts";
const schema: object = {
  "properties": {
    "configMap": {
      "$ref": "io.k8s.api.core.v1.ConfigMapNodeConfigSource#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1ConfigMapNodeConfigSource();
register("io.k8s.api.core.v1.NodeConfigSource", schema);
}

