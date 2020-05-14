import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1APIGroup } from "./IoK8sApimachineryPkgApisMetaV1APIGroup.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "v1"
      ]
    },
    "groups": {
      "items": {
        "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.APIGroup#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "APIGroupList"
      ]
    }
  },
  "required": [
    "groups",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1APIGroup();
register("io.k8s.apimachinery.pkg.apis.meta.v1.APIGroupList", schema);
}

