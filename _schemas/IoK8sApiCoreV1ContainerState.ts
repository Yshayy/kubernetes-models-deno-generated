import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1ContainerStateRunning } from "./IoK8sApiCoreV1ContainerStateRunning.ts";

import { addSchema as IoK8sApiCoreV1ContainerStateTerminated } from "./IoK8sApiCoreV1ContainerStateTerminated.ts";

import { addSchema as IoK8sApiCoreV1ContainerStateWaiting } from "./IoK8sApiCoreV1ContainerStateWaiting.ts";
const schema: object = {
  "properties": {
    "running": {
      "$ref": "io.k8s.api.core.v1.ContainerStateRunning#"
    },
    "terminated": {
      "$ref": "io.k8s.api.core.v1.ContainerStateTerminated#"
    },
    "waiting": {
      "$ref": "io.k8s.api.core.v1.ContainerStateWaiting#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1ContainerStateRunning();
IoK8sApiCoreV1ContainerStateTerminated();
IoK8sApiCoreV1ContainerStateWaiting();
register("io.k8s.api.core.v1.ContainerState", schema);
}

