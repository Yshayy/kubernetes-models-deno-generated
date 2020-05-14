import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery } from "./IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR } from "./IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "v1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "APIGroup"
      ]
    },
    "name": {
      "type": "string"
    },
    "preferredVersion": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery#"
    },
    "serverAddressByClientCIDRs": {
      "items": {
        "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR#"
      },
      "type": "array"
    },
    "versions": {
      "items": {
        "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.GroupVersionForDiscovery#"
      },
      "type": "array"
    }
  },
  "required": [
    "name",
    "versions",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery();
IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR();
register("io.k8s.apimachinery.pkg.apis.meta.v1.APIGroup", schema);
}

