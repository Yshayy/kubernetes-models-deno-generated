import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiRbacV1RoleBinding } from "./IoK8sApiRbacV1RoleBinding.ts";

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
        "$ref": "io.k8s.api.rbac.v1.RoleBinding#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "RoleBindingList"
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
IoK8sApiRbacV1RoleBinding();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.rbac.v1.RoleBindingList", schema);
}

