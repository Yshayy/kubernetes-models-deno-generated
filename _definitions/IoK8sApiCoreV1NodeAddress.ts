
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1NodeAddress.ts";

/**
 * NodeAddress contains information for the node's address.
 */
export interface IIoK8sApiCoreV1NodeAddress {
/**
 * The node address.
 */
"address": string;
/**
 * Node address type, one of Hostname, ExternalIP or InternalIP.
 */
"type": string;
}

/**
 * NodeAddress contains information for the node's address.
 */
export class IoK8sApiCoreV1NodeAddress extends Model<IIoK8sApiCoreV1NodeAddress> implements IIoK8sApiCoreV1NodeAddress {

"address": string;

"type": string;
}

Model.setSchema(IoK8sApiCoreV1NodeAddress, "io.k8s.api.core.v1.NodeAddress", addSchema);

export {
  IIoK8sApiCoreV1NodeAddress as INodeAddress,
  IoK8sApiCoreV1NodeAddress as NodeAddress
};
