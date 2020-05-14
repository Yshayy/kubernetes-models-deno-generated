import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1NamespaceCondition } from "./IoK8sApiCoreV1NamespaceCondition.ts";
const schema: object = {
  "properties": {
    "conditions": {
      "items": {
        "$ref": "io.k8s.api.core.v1.NamespaceCondition#"
      },
      "type": "array"
    },
    "phase": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1NamespaceCondition();
register("io.k8s.api.core.v1.NamespaceStatus", schema);
}

