import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1NodeConfigSource } from "./IoK8sApiCoreV1NodeConfigSource.ts";
const schema: object = {
  "properties": {
    "active": {
      "$ref": "io.k8s.api.core.v1.NodeConfigSource#"
    },
    "assigned": {
      "$ref": "io.k8s.api.core.v1.NodeConfigSource#"
    },
    "error": {
      "type": "string"
    },
    "lastKnownGood": {
      "$ref": "io.k8s.api.core.v1.NodeConfigSource#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1NodeConfigSource();
register("io.k8s.api.core.v1.NodeConfigStatus", schema);
}

