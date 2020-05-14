import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1Toleration } from "./IoK8sApiCoreV1Toleration.ts";
const schema: object = {
  "properties": {
    "nodeSelector": {
      "additionalProperties": {
        "type": "string"
      },
      "type": "object"
    },
    "tolerations": {
      "items": {
        "$ref": "io.k8s.api.core.v1.Toleration#"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1Toleration();
register("io.k8s.api.node.v1beta1.Scheduling", schema);
}

