import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAuditregistrationV1alpha1Policy } from "./IoK8sApiAuditregistrationV1alpha1Policy.ts";

import { addSchema as IoK8sApiAuditregistrationV1alpha1Webhook } from "./IoK8sApiAuditregistrationV1alpha1Webhook.ts";
const schema: object = {
  "properties": {
    "policy": {
      "$ref": "io.k8s.api.auditregistration.v1alpha1.Policy#"
    },
    "webhook": {
      "$ref": "io.k8s.api.auditregistration.v1alpha1.Webhook#"
    }
  },
  "required": [
    "policy",
    "webhook"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiAuditregistrationV1alpha1Policy();
IoK8sApiAuditregistrationV1alpha1Webhook();
register("io.k8s.api.auditregistration.v1alpha1.AuditSinkSpec", schema);
}

