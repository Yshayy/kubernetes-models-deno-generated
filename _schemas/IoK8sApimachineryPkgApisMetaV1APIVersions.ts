import { register } from "../__include/validate/src/index.ts";

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
        "APIVersions"
      ]
    },
    "serverAddressByClientCIDRs": {
      "items": {
        "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR#"
      },
      "type": "array"
    },
    "versions": {
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "required": [
    "versions",
    "serverAddressByClientCIDRs",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR();
register("io.k8s.apimachinery.pkg.apis.meta.v1.APIVersions", schema);
}

