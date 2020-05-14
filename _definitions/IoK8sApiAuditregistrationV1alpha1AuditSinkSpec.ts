
import { IIoK8sApiAuditregistrationV1alpha1Policy } from "./IoK8sApiAuditregistrationV1alpha1Policy.ts";

import { IIoK8sApiAuditregistrationV1alpha1Webhook } from "./IoK8sApiAuditregistrationV1alpha1Webhook.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuditregistrationV1alpha1AuditSinkSpec.ts";

/**
 * AuditSinkSpec holds the spec for the audit sink
 */
export interface IIoK8sApiAuditregistrationV1alpha1AuditSinkSpec {
/**
 * Policy defines the policy for selecting which events should be sent to the webhook required
 */
"policy": IIoK8sApiAuditregistrationV1alpha1Policy;
/**
 * Webhook to send events required
 */
"webhook": IIoK8sApiAuditregistrationV1alpha1Webhook;
}

/**
 * AuditSinkSpec holds the spec for the audit sink
 */
export class IoK8sApiAuditregistrationV1alpha1AuditSinkSpec extends Model<IIoK8sApiAuditregistrationV1alpha1AuditSinkSpec> implements IIoK8sApiAuditregistrationV1alpha1AuditSinkSpec {

"policy": IIoK8sApiAuditregistrationV1alpha1Policy;

"webhook": IIoK8sApiAuditregistrationV1alpha1Webhook;
}

Model.setSchema(IoK8sApiAuditregistrationV1alpha1AuditSinkSpec, "io.k8s.api.auditregistration.v1alpha1.AuditSinkSpec", addSchema);

export {
  IIoK8sApiAuditregistrationV1alpha1AuditSinkSpec as IAuditSinkSpec,
  IoK8sApiAuditregistrationV1alpha1AuditSinkSpec as AuditSinkSpec
};
