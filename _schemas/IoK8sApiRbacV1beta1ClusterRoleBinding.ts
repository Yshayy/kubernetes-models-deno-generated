import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiRbacV1beta1RoleRef } from "./IoK8sApiRbacV1beta1RoleRef.ts";

import { addSchema as IoK8sApiRbacV1beta1Subject } from "./IoK8sApiRbacV1beta1Subject.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "rbac.authorization.k8s.io/v1beta1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "ClusterRoleBinding"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "roleRef": {
      "$ref": "io.k8s.api.rbac.v1beta1.RoleRef#"
    },
    "subjects": {
      "items": {
        "$ref": "io.k8s.api.rbac.v1beta1.Subject#"
      },
      "type": "array"
    }
  },
  "required": [
    "roleRef",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
IoK8sApiRbacV1beta1RoleRef();
IoK8sApiRbacV1beta1Subject();
register("io.k8s.api.rbac.v1beta1.ClusterRoleBinding", schema);
}

