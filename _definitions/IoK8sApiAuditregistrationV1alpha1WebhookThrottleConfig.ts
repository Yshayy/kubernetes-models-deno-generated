
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig.ts";

/**
 * WebhookThrottleConfig holds the configuration for throttling events
 */
export interface IIoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig {
/**
 * ThrottleBurst is the maximum number of events sent at the same moment default 15 QPS
 */
"burst"?: number;
/**
 * ThrottleQPS maximum number of batches per second default 10 QPS
 */
"qps"?: number;
}

/**
 * WebhookThrottleConfig holds the configuration for throttling events
 */
export class IoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig extends Model<IIoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig> implements IIoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig {

"burst"?: number;

"qps"?: number;
}

Model.setSchema(IoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig, "io.k8s.api.auditregistration.v1alpha1.WebhookThrottleConfig", addSchema);

export {
  IIoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig as IWebhookThrottleConfig,
  IoK8sApiAuditregistrationV1alpha1WebhookThrottleConfig as WebhookThrottleConfig
};
