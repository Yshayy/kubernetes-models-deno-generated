import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1NodeAddress } from "./IoK8sApiCoreV1NodeAddress.ts";

import { addSchema as IoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { addSchema as IoK8sApiCoreV1NodeCondition } from "./IoK8sApiCoreV1NodeCondition.ts";

import { addSchema as IoK8sApiCoreV1NodeConfigStatus } from "./IoK8sApiCoreV1NodeConfigStatus.ts";

import { addSchema as IoK8sApiCoreV1NodeDaemonEndpoints } from "./IoK8sApiCoreV1NodeDaemonEndpoints.ts";

import { addSchema as IoK8sApiCoreV1ContainerImage } from "./IoK8sApiCoreV1ContainerImage.ts";

import { addSchema as IoK8sApiCoreV1NodeSystemInfo } from "./IoK8sApiCoreV1NodeSystemInfo.ts";

import { addSchema as IoK8sApiCoreV1AttachedVolume } from "./IoK8sApiCoreV1AttachedVolume.ts";
const schema: object = {
  "properties": {
    "addresses": {
      "items": {
        "$ref": "io.k8s.api.core.v1.NodeAddress#"
      },
      "type": "array"
    },
    "allocatable": {
      "additionalProperties": {
        "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
      },
      "type": "object"
    },
    "capacity": {
      "additionalProperties": {
        "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
      },
      "type": "object"
    },
    "conditions": {
      "items": {
        "$ref": "io.k8s.api.core.v1.NodeCondition#"
      },
      "type": "array"
    },
    "config": {
      "$ref": "io.k8s.api.core.v1.NodeConfigStatus#"
    },
    "daemonEndpoints": {
      "$ref": "io.k8s.api.core.v1.NodeDaemonEndpoints#"
    },
    "images": {
      "items": {
        "$ref": "io.k8s.api.core.v1.ContainerImage#"
      },
      "type": "array"
    },
    "nodeInfo": {
      "$ref": "io.k8s.api.core.v1.NodeSystemInfo#"
    },
    "phase": {
      "type": "string"
    },
    "volumesAttached": {
      "items": {
        "$ref": "io.k8s.api.core.v1.AttachedVolume#"
      },
      "type": "array"
    },
    "volumesInUse": {
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1NodeAddress();
IoK8sApimachineryPkgApiResourceQuantity();
IoK8sApiCoreV1NodeCondition();
IoK8sApiCoreV1NodeConfigStatus();
IoK8sApiCoreV1NodeDaemonEndpoints();
IoK8sApiCoreV1ContainerImage();
IoK8sApiCoreV1NodeSystemInfo();
IoK8sApiCoreV1AttachedVolume();
register("io.k8s.api.core.v1.NodeStatus", schema);
}

