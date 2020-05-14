import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1ClientIPConfig } from "./IoK8sApiCoreV1ClientIPConfig.ts";
const schema: object = {
  "properties": {
    "clientIP": {
      "$ref": "io.k8s.api.core.v1.ClientIPConfig#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1ClientIPConfig();
register("io.k8s.api.core.v1.SessionAffinityConfig", schema);
}

