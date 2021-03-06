import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1ServicePort } from "./IoK8sApiCoreV1ServicePort.ts";

import { addSchema as IoK8sApiCoreV1SessionAffinityConfig } from "./IoK8sApiCoreV1SessionAffinityConfig.ts";
const schema: object = {
  "properties": {
    "clusterIP": {
      "type": "string"
    },
    "externalIPs": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "externalName": {
      "type": "string"
    },
    "externalTrafficPolicy": {
      "type": "string"
    },
    "healthCheckNodePort": {
      "format": "int32",
      "type": "integer"
    },
    "ipFamily": {
      "type": "string"
    },
    "loadBalancerIP": {
      "type": "string"
    },
    "loadBalancerSourceRanges": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "ports": {
      "items": {
        "$ref": "io.k8s.api.core.v1.ServicePort#"
      },
      "type": "array"
    },
    "publishNotReadyAddresses": {
      "type": "boolean"
    },
    "selector": {
      "additionalProperties": {
        "type": "string"
      },
      "type": "object"
    },
    "sessionAffinity": {
      "type": "string"
    },
    "sessionAffinityConfig": {
      "$ref": "io.k8s.api.core.v1.SessionAffinityConfig#"
    },
    "topologyKeys": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "type": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1ServicePort();
IoK8sApiCoreV1SessionAffinityConfig();
register("io.k8s.api.core.v1.ServiceSpec", schema);
}

