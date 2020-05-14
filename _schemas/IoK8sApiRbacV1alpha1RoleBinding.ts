import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiRbacV1alpha1RoleRef } from "./IoK8sApiRbacV1alpha1RoleRef.ts";

import { addSchema as IoK8sApiRbacV1alpha1Subject } from "./IoK8sApiRbacV1alpha1Subject.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "rbac.authorization.k8s.io/v1alpha1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "RoleBinding"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "roleRef": {
      "$ref": "io.k8s.api.rbac.v1alpha1.RoleRef#"
    },
    "subjects": {
      "items": {
        "$ref": "io.k8s.api.rbac.v1alpha1.Subject#"
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
IoK8sApiRbacV1alpha1RoleRef();
IoK8sApiRbacV1alpha1Subject();
register("io.k8s.api.rbac.v1alpha1.RoleBinding", schema);
}

