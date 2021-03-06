import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAppsV1StatefulSetCondition } from "./IoK8sApiAppsV1StatefulSetCondition.ts";
const schema: object = {
  "properties": {
    "collisionCount": {
      "format": "int32",
      "type": "integer"
    },
    "conditions": {
      "items": {
        "$ref": "io.k8s.api.apps.v1.StatefulSetCondition#"
      },
      "type": "array"
    },
    "currentReplicas": {
      "format": "int32",
      "type": "integer"
    },
    "currentRevision": {
      "type": "string"
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
    },
    "updateRevision": {
      "type": "string"
    },
    "updatedReplicas": {
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
IoK8sApiAppsV1StatefulSetCondition();
register("io.k8s.api.apps.v1.StatefulSetStatus", schema);
}

