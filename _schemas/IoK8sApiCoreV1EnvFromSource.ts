import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1ConfigMapEnvSource } from "./IoK8sApiCoreV1ConfigMapEnvSource.ts";

import { addSchema as IoK8sApiCoreV1SecretEnvSource } from "./IoK8sApiCoreV1SecretEnvSource.ts";
const schema: object = {
  "properties": {
    "configMapRef": {
      "$ref": "io.k8s.api.core.v1.ConfigMapEnvSource#"
    },
    "prefix": {
      "type": "string"
    },
    "secretRef": {
      "$ref": "io.k8s.api.core.v1.SecretEnvSource#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1ConfigMapEnvSource();
IoK8sApiCoreV1SecretEnvSource();
register("io.k8s.api.core.v1.EnvFromSource", schema);
}

