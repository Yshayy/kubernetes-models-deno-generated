
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1LoadBalancerIngress.ts";

/**
 * LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point.
 */
export interface IIoK8sApiCoreV1LoadBalancerIngress {
/**
 * Hostname is set for load-balancer ingress points that are DNS based (typically AWS load-balancers)
 */
"hostname"?: string;
/**
 * IP is set for load-balancer ingress points that are IP based (typically GCE or OpenStack load-balancers)
 */
"ip"?: string;
}

/**
 * LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point.
 */
export class IoK8sApiCoreV1LoadBalancerIngress extends Model<IIoK8sApiCoreV1LoadBalancerIngress> implements IIoK8sApiCoreV1LoadBalancerIngress {

"hostname"?: string;

"ip"?: string;
}

Model.setSchema(IoK8sApiCoreV1LoadBalancerIngress, "io.k8s.api.core.v1.LoadBalancerIngress", addSchema);

export {
  IIoK8sApiCoreV1LoadBalancerIngress as ILoadBalancerIngress,
  IoK8sApiCoreV1LoadBalancerIngress as LoadBalancerIngress
};
