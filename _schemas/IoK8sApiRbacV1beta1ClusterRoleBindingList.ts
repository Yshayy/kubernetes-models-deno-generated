import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiRbacV1beta1ClusterRoleBinding } from "./IoK8sApiRbacV1beta1ClusterRoleBinding.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "rbac.authorization.k8s.io/v1beta1"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.rbac.v1beta1.ClusterRoleBinding#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "ClusterRoleBindingList"
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
IoK8sApiRbacV1beta1ClusterRoleBinding();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.rbac.v1beta1.ClusterRoleBindingList", schema);
}

