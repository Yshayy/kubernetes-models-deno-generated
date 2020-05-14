import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAppsV1ReplicaSetCondition } from "./IoK8sApiAppsV1ReplicaSetCondition.ts";
const schema: object = {
  "properties": {
    "availableReplicas": {
      "format": "int32",
      "type": "integer"
    },
    "conditions": {
      "items": {
        "$ref": "io.k8s.api.apps.v1.ReplicaSetCondition#"
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
IoK8sApiAppsV1ReplicaSetCondition();
register("io.k8s.api.apps.v1.ReplicaSetStatus", schema);
}

