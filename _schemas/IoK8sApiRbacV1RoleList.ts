import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiRbacV1Role } from "./IoK8sApiRbacV1Role.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "rbac.authorization.k8s.io/v1"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.rbac.v1.Role#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "RoleList"
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
IoK8sApiRbacV1Role();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.rbac.v1.RoleList", schema);
}

