import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1Handler } from "./IoK8sApiCoreV1Handler.ts";
const schema: object = {
  "properties": {
    "postStart": {
      "$ref": "io.k8s.api.core.v1.Handler#"
    },
    "preStop": {
      "$ref": "io.k8s.api.core.v1.Handler#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1Handler();
register("io.k8s.api.core.v1.Lifecycle", schema);
}

