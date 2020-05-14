import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAuditregistrationV1alpha1AuditSink } from "./IoK8sApiAuditregistrationV1alpha1AuditSink.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "auditregistration.k8s.io/v1alpha1"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.auditregistration.v1alpha1.AuditSink#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "AuditSinkList"
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
IoK8sApiAuditregistrationV1alpha1AuditSink();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.auditregistration.v1alpha1.AuditSinkList", schema);
}

