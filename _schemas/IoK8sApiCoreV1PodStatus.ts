import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1PodCondition } from "./IoK8sApiCoreV1PodCondition.ts";

import { addSchema as IoK8sApiCoreV1ContainerStatus } from "./IoK8sApiCoreV1ContainerStatus.ts";

import { addSchema as IoK8sApiCoreV1PodIP } from "./IoK8sApiCoreV1PodIP.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";
const schema: object = {
  "properties": {
    "conditions": {
      "items": {
        "$ref": "io.k8s.api.core.v1.PodCondition#"
      },
      "type": "array"
    },
    "containerStatuses": {
      "items": {
        "$ref": "io.k8s.api.core.v1.ContainerStatus#"
      },
      "type": "array"
    },
    "ephemeralContainerStatuses": {
      "items": {
        "$ref": "io.k8s.api.core.v1.ContainerStatus#"
      },
      "type": "array"
    },
    "hostIP": {
      "type": "string"
    },
    "initContainerStatuses": {
      "items": {
        "$ref": "io.k8s.api.core.v1.ContainerStatus#"
      },
      "type": "array"
    },
    "message": {
      "type": "string"
    },
    "nominatedNodeName": {
      "type": "string"
    },
    "phase": {
      "type": "string"
    },
    "podIP": {
      "type": "string"
    },
    "podIPs": {
      "items": {
        "$ref": "io.k8s.api.core.v1.PodIP#"
      },
      "type": "array"
    },
    "qosClass": {
      "type": "string"
    },
    "reason": {
      "type": "string"
    },
    "startTime": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.Time#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1PodCondition();
IoK8sApiCoreV1ContainerStatus();
IoK8sApiCoreV1PodIP();
IoK8sApimachineryPkgApisMetaV1Time();
register("io.k8s.api.core.v1.PodStatus", schema);
}

