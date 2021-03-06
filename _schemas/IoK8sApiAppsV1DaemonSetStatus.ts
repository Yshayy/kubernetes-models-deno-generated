import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAppsV1DaemonSetCondition } from "./IoK8sApiAppsV1DaemonSetCondition.ts";
const schema: object = {
  "properties": {
    "collisionCount": {
      "format": "int32",
      "type": "integer"
    },
    "conditions": {
      "items": {
        "$ref": "io.k8s.api.apps.v1.DaemonSetCondition#"
      },
      "type": "array"
    },
    "currentNumberScheduled": {
      "format": "int32",
      "type": "integer"
    },
    "desiredNumberScheduled": {
      "format": "int32",
      "type": "integer"
    },
    "numberAvailable": {
      "format": "int32",
      "type": "integer"
    },
    "numberMisscheduled": {
      "format": "int32",
      "type": "integer"
    },
    "numberReady": {
      "format": "int32",
      "type": "integer"
    },
    "numberUnavailable": {
      "format": "int32",
      "type": "integer"
    },
    "observedGeneration": {
      "format": "int64",
      "type": "integer"
    },
    "updatedNumberScheduled": {
      "format": "int32",
      "type": "integer"
    }
  },
  "required": [
    "currentNumberScheduled",
    "numberMisscheduled",
    "desiredNumberScheduled",
    "numberReady"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiAppsV1DaemonSetCondition();
register("io.k8s.api.apps.v1.DaemonSetStatus", schema);
}

