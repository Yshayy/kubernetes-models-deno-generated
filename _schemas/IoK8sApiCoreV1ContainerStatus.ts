import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1ContainerState } from "./IoK8sApiCoreV1ContainerState.ts";
const schema: object = {
  "properties": {
    "containerID": {
      "type": "string"
    },
    "image": {
      "type": "string"
    },
    "imageID": {
      "type": "string"
    },
    "lastState": {
      "$ref": "io.k8s.api.core.v1.ContainerState#"
    },
    "name": {
      "type": "string"
    },
    "ready": {
      "type": "boolean"
    },
    "restartCount": {
      "format": "int32",
      "type": "integer"
    },
    "started": {
      "type": "boolean"
    },
    "state": {
      "$ref": "io.k8s.api.core.v1.ContainerState#"
    }
  },
  "required": [
    "name",
    "ready",
    "restartCount",
    "image",
    "imageID"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1ContainerState();
register("io.k8s.api.core.v1.ContainerStatus", schema);
}

