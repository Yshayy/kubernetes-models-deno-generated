import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAuditregistrationV1alpha1WebhookClientConfig } from "./IoK8sApiAuditregistrationV1alpha1WebhookClientConfig.ts";

import { addSchema as IoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig } from "./IoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig.ts";
const schema: object = {
  "properties": {
    "clientConfig": {
      "$ref": "io.k8s.api.auditregistration.v1alpha1.WebhookClientConfig#"
    },
    "throttle": {
      "$ref": "io.k8s.api.auditregistration.v1alpha1.WebhookThrottleConfig#"
    }
  },
  "required": [
    "clientConfig"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiAuditregistrationV1alpha1WebhookClientConfig();
IoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig();
register("io.k8s.api.auditregistration.v1alpha1.Webhook", schema);
}

