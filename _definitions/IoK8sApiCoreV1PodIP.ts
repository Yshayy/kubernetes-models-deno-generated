
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PodIP.ts";

/**
 * IP address information for entries in the (plural) PodIPs field. Each entry includes:
 *    IP: An IP address allocated to the pod. Routable at least within the cluster.
 */
export interface IIoK8sApiCoreV1PodIP {
/**
 * ip is an IP address (IPv4 or IPv6) assigned to the pod
 */
"ip"?: string;
}

/**
 * IP address information for entries in the (plural) PodIPs field. Each entry includes:
 *    IP: An IP address allocated to the pod. Routable at least within the cluster.
 */
export class IoK8sApiCoreV1PodIP extends Model<IIoK8sApiCoreV1PodIP> implements IIoK8sApiCoreV1PodIP {

"ip"?: string;
}

Model.setSchema(IoK8sApiCoreV1PodIP, "io.k8s.api.core.v1.PodIP", addSchema);

export {
  IIoK8sApiCoreV1PodIP as IPodIP,
  IoK8sApiCoreV1PodIP as PodIP
};
