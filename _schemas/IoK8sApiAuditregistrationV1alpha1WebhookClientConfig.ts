import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAuditregistrationV1alpha1ServiceReference } from "./IoK8sApiAuditregistrationV1alpha1ServiceReference.ts";
const schema: object = {
  "properties": {
    "caBundle": {
      "format": "byte",
      "type": "string"
    },
    "service": {
      "$ref": "io.k8s.api.auditregistration.v1alpha1.ServiceReference#"
    },
    "url": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiAuditregistrationV1alpha1ServiceReference();
register("io.k8s.api.auditregistration.v1alpha1.WebhookClientConfig", schema);
}

