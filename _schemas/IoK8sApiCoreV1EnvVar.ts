import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1EnvVarSource } from "./IoK8sApiCoreV1EnvVarSource.ts";
const schema: object = {
  "properties": {
    "name": {
      "type": "string"
    },
    "value": {
      "type": "string"
    },
    "valueFrom": {
      "$ref": "io.k8s.api.core.v1.EnvVarSource#"
    }
  },
  "required": [
    "name"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1EnvVarSource();
register("io.k8s.api.core.v1.EnvVar", schema);
}

