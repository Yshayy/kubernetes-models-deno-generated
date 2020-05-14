import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1APIResource } from "./IoK8sApimachineryPkgApisMetaV1APIResource.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "v1"
      ]
    },
    "groupVersion": {
      "type": "string"
    },
    "kind": {
      "type": "string",
      "enum": [
        "APIResourceList"
      ]
    },
    "resources": {
      "items": {
        "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.APIResource#"
      },
      "type": "array"
    }
  },
  "required": [
    "groupVersion",
    "resources",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1APIResource();
register("io.k8s.apimachinery.pkg.apis.meta.v1.APIResourceList", schema);
}

