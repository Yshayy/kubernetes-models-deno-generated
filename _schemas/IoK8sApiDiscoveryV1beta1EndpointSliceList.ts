import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiDiscoveryV1beta1EndpointSlice } from "./IoK8sApiDiscoveryV1beta1EndpointSlice.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "discovery.k8s.io/v1beta1"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.discovery.v1beta1.EndpointSlice#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "EndpointSliceList"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta#"
    }
  },
  "required": [
    "items",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiDiscoveryV1beta1EndpointSlice();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.discovery.v1beta1.EndpointSliceList", schema);
}

