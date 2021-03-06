import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiDiscoveryV1beta1Endpoint } from "./IoK8sApiDiscoveryV1beta1Endpoint.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiDiscoveryV1beta1EndpointPort } from "./IoK8sApiDiscoveryV1beta1EndpointPort.ts";
const schema: object = {
  "properties": {
    "addressType": {
      "type": "string"
    },
    "apiVersion": {
      "type": "string",
      "enum": [
        "discovery.k8s.io/v1beta1"
      ]
    },
    "endpoints": {
      "items": {
        "$ref": "io.k8s.api.discovery.v1beta1.Endpoint#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "EndpointSlice"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "ports": {
      "items": {
        "$ref": "io.k8s.api.discovery.v1beta1.EndpointPort#"
      },
      "type": "array"
    }
  },
  "required": [
    "addressType",
    "endpoints",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiDiscoveryV1beta1Endpoint();
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
IoK8sApiDiscoveryV1beta1EndpointPort();
register("io.k8s.api.discovery.v1beta1.EndpointSlice", schema);
}

