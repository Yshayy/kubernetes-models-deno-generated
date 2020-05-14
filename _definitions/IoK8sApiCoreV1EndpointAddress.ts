
import { IIoK8sApiCoreV1ObjectReference } from "./IoK8sApiCoreV1ObjectReference.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1EndpointAddress.ts";

/**
 * EndpointAddress is a tuple that describes single IP address.
 */
export interface IIoK8sApiCoreV1EndpointAddress {
/**
 * The Hostname of this endpoint
 */
"hostname"?: string;
/**
 * The IP of this endpoint. May not be loopback (127.0.0.0/8), link-local (169.254.0.0/16), or link-local multicast ((224.0.0.0/24). IPv6 is also accepted but not fully supported on all platforms. Also, certain kubernetes components, like kube-proxy, are not IPv6 ready.
 */
"ip": string;
/**
 * Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node.
 */
"nodeName"?: string;
/**
 * Reference to object providing the endpoint.
 */
"targetRef"?: IIoK8sApiCoreV1ObjectReference;
}

/**
 * EndpointAddress is a tuple that describes single IP address.
 */
export class IoK8sApiCoreV1EndpointAddress extends Model<IIoK8sApiCoreV1EndpointAddress> implements IIoK8sApiCoreV1EndpointAddress {

"hostname"?: string;

"ip": string;

"nodeName"?: string;

"targetRef"?: IIoK8sApiCoreV1ObjectReference;
}

Model.setSchema(IoK8sApiCoreV1EndpointAddress, "io.k8s.api.core.v1.EndpointAddress", addSchema);

export {
  IIoK8sApiCoreV1EndpointAddress as IEndpointAddress,
  IoK8sApiCoreV1EndpointAddress as EndpointAddress
};
