import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAppsV1DeploymentCondition } from "./IoK8sApiAppsV1DeploymentCondition.ts";
const schema: object = {
  "properties": {
    "availableReplicas": {
      "format": "int32",
      "type": "integer"
    },
    "collisionCount": {
      "format": "int32",
      "type": "integer"
    },
    "conditions": {
      "items": {
        "$ref": "io.k8s.api.apps.v1.DeploymentCondition#"
      },
      "type": "array"
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
    "unavailableReplicas": {
      "format": "int32",
      "type": "integer"
    },
    "updatedReplicas": {
      "format": "int32",
      "type": "integer"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiAppsV1DeploymentCondition();
register("io.k8s.api.apps.v1.DeploymentStatus", schema);
}

