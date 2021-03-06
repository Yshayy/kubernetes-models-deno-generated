import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1NodeConfigSource } from "./IoK8sApiCoreV1NodeConfigSource.ts";

import { addSchema as IoK8sApiCoreV1Taint } from "./IoK8sApiCoreV1Taint.ts";
const schema: object = {
  "properties": {
    "configSource": {
      "$ref": "io.k8s.api.core.v1.NodeConfigSource#"
    },
    "externalID": {
      "type": "string"
    },
    "podCIDR": {
      "type": "string"
    },
    "podCIDRs": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "providerID": {
      "type": "string"
    },
    "taints": {
      "items": {
        "$ref": "io.k8s.api.core.v1.Taint#"
      },
      "type": "array"
    },
    "unschedulable": {
      "type": "boolean"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1NodeConfigSource();
IoK8sApiCoreV1Taint();
register("io.k8s.api.core.v1.NodeSpec", schema);
}

