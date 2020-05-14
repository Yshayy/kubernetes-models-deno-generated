
import { IIoK8sApiAuditregistrationV1alpha1WebhookClientConfig } from "./IoK8sApiAuditregistrationV1alpha1WebhookClientConfig.ts";

import { IIoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig } from "./IoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuditregistrationV1alpha1Webhook.ts";

/**
 * Webhook holds the configuration of the webhook
 */
export interface IIoK8sApiAuditregistrationV1alpha1Webhook {
/**
 * ClientConfig holds the connection parameters for the webhook required
 */
"clientConfig": IIoK8sApiAuditregistrationV1alpha1WebhookClientConfig;
/**
 * Throttle holds the options for throttling the webhook
 */
"throttle"?: IIoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig;
}

/**
 * Webhook holds the configuration of the webhook
 */
export class IoK8sApiAuditregistrationV1alpha1Webhook extends Model<IIoK8sApiAuditregistrationV1alpha1Webhook> implements IIoK8sApiAuditregistrationV1alpha1Webhook {

"clientConfig": IIoK8sApiAuditregistrationV1alpha1WebhookClientConfig;

"throttle"?: IIoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig;
}

Model.setSchema(IoK8sApiAuditregistrationV1alpha1Webhook, "io.k8s.api.auditregistration.v1alpha1.Webhook", addSchema);

export {
  IIoK8sApiAuditregistrationV1alpha1Webhook as IWebhook,
  IoK8sApiAuditregistrationV1alpha1Webhook as Webhook
};
