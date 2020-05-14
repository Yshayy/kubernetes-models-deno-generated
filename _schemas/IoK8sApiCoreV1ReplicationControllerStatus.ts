import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1ReplicationControllerCondition } from "./IoK8sApiCoreV1ReplicationControllerCondition.ts";
const schema: object = {
  "properties": {
    "availableReplicas": {
      "format": "int32",
      "type": "integer"
    },
    "conditions": {
      "items": {
        "$ref": "io.k8s.api.core.v1.ReplicationControllerCondition#"
      },
      "type": "array"
    },
    "fullyLabeledReplicas": {
      "format": "int32",
      "type": "integer"
    },
    "observedGeneration": {
      "format": "int64",
      "type": "integer"
    },
    "readyReplicas": {
      "format": "int32",
      "type": "integer"
    },
    "replicas": {
      "format": "int32",
      "type": "integer"
    }
  },
  "required": [
    "replicas"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1ReplicationControllerCondition();
register("io.k8s.api.core.v1.ReplicationControllerStatus", schema);
}

