import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiNodeV1alpha1Overhead } from "./IoK8sApiNodeV1alpha1Overhead.ts";

import { addSchema as IoK8sApiNodeV1alpha1Scheduling } from "./IoK8sApiNodeV1alpha1Scheduling.ts";
const schema: object = {
  "properties": {
    "overhead": {
      "$ref": "io.k8s.api.node.v1alpha1.Overhead#"
    },
    "runtimeHandler": {
      "type": "string"
    },
    "scheduling": {
      "$ref": "io.k8s.api.node.v1alpha1.Scheduling#"
    }
  },
  "required": [
    "runtimeHandler"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiNodeV1alpha1Overhead();
IoK8sApiNodeV1alpha1Scheduling();
register("io.k8s.api.node.v1alpha1.RuntimeClassSpec", schema);
}

