import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiDiscoveryV1beta1EndpointConditions } from "./IoK8sApiDiscoveryV1beta1EndpointConditions.ts";

import { addSchema as IoK8sApiCoreV1ObjectReference } from "./IoK8sApiCoreV1ObjectReference.ts";
const schema: object = {
  "properties": {
    "addresses": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "conditions": {
      "$ref": "io.k8s.api.discovery.v1beta1.EndpointConditions#"
    },
    "hostname": {
      "type": "string"
    },
    "targetRef": {
      "$ref": "io.k8s.api.core.v1.ObjectReference#"
    },
    "topology": {
      "additionalProperties": {
        "type": "string"
      },
      "type": "object"
    }
  },
  "required": [
    "addresses"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiDiscoveryV1beta1EndpointConditions();
IoK8sApiCoreV1ObjectReference();
register("io.k8s.api.discovery.v1beta1.Endpoint", schema);
}

