
import { IIoK8sApiCoreV1LoadBalancerStatus } from "./IoK8sApiCoreV1LoadBalancerStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiNetworkingV1beta1IngressStatus.ts";

/**
 * IngressStatus describe the current state of the Ingress.
 */
export interface IIoK8sApiNetworkingV1beta1IngressStatus {
/**
 * LoadBalancer contains the current status of the load-balancer.
 */
"loadBalancer"?: IIoK8sApiCoreV1LoadBalancerStatus;
}

/**
 * IngressStatus describe the current state of the Ingress.
 */
export class IoK8sApiNetworkingV1beta1IngressStatus extends Model<IIoK8sApiNetworkingV1beta1IngressStatus> implements IIoK8sApiNetworkingV1beta1IngressStatus {

"loadBalancer"?: IIoK8sApiCoreV1LoadBalancerStatus;
}

Model.setSchema(IoK8sApiNetworkingV1beta1IngressStatus, "io.k8s.api.networking.v1beta1.IngressStatus", addSchema);

export {
  IIoK8sApiNetworkingV1beta1IngressStatus as IIngressStatus,
  IoK8sApiNetworkingV1beta1IngressStatus as IngressStatus
};
