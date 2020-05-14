import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1EndpointAddress } from "./IoK8sApiCoreV1EndpointAddress.ts";

import { addSchema as IoK8sApiCoreV1EndpointPort } from "./IoK8sApiCoreV1EndpointPort.ts";
const schema: object = {
  "properties": {
    "addresses": {
      "items": {
        "$ref": "io.k8s.api.core.v1.EndpointAddress#"
      },
      "type": "array"
    },
    "notReadyAddresses": {
      "items": {
        "$ref": "io.k8s.api.core.v1.EndpointAddress#"
      },
      "type": "array"
    },
    "ports": {
      "items": {
        "$ref": "io.k8s.api.core.v1.EndpointPort#"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1EndpointAddress();
IoK8sApiCoreV1EndpointPort();
register("io.k8s.api.core.v1.EndpointSubset", schema);
}

