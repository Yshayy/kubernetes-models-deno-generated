
import { IIoK8sApiCoreV1LoadBalancerIngress } from "./IoK8sApiCoreV1LoadBalancerIngress.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1LoadBalancerStatus.ts";

/**
 * LoadBalancerStatus represents the status of a load-balancer.
 */
export interface IIoK8sApiCoreV1LoadBalancerStatus {
/**
 * Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points.
 */
"ingress"?: Array<IIoK8sApiCoreV1LoadBalancerIngress>;
}

/**
 * LoadBalancerStatus represents the status of a load-balancer.
 */
export class IoK8sApiCoreV1LoadBalancerStatus extends Model<IIoK8sApiCoreV1LoadBalancerStatus> implements IIoK8sApiCoreV1LoadBalancerStatus {

"ingress"?: Array<IIoK8sApiCoreV1LoadBalancerIngress>;
}

Model.setSchema(IoK8sApiCoreV1LoadBalancerStatus, "io.k8s.api.core.v1.LoadBalancerStatus", addSchema);

export {
  IIoK8sApiCoreV1LoadBalancerStatus as ILoadBalancerStatus,
  IoK8sApiCoreV1LoadBalancerStatus as LoadBalancerStatus
};
