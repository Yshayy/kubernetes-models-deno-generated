
import { IIoK8sApiCoreV1LoadBalancerStatus } from "./IoK8sApiCoreV1LoadBalancerStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ServiceStatus.ts";

/**
 * ServiceStatus represents the current status of a service.
 */
export interface IIoK8sApiCoreV1ServiceStatus {
/**
 * LoadBalancer contains the current status of the load-balancer, if one is present.
 */
"loadBalancer"?: IIoK8sApiCoreV1LoadBalancerStatus;
}

/**
 * ServiceStatus represents the current status of a service.
 */
export class IoK8sApiCoreV1ServiceStatus extends Model<IIoK8sApiCoreV1ServiceStatus> implements IIoK8sApiCoreV1ServiceStatus {

"loadBalancer"?: IIoK8sApiCoreV1LoadBalancerStatus;
}

Model.setSchema(IoK8sApiCoreV1ServiceStatus, "io.k8s.api.core.v1.ServiceStatus", addSchema);

export {
  IIoK8sApiCoreV1ServiceStatus as IServiceStatus,
  IoK8sApiCoreV1ServiceStatus as ServiceStatus
};
