
import { IIoK8sApimachineryPkgUtilIntstrIntOrString } from "./IoK8sApimachineryPkgUtilIntstrIntOrString.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiNetworkingV1NetworkPolicyPort.ts";

/**
 * NetworkPolicyPort describes a port to allow traffic on
 */
export interface IIoK8sApiNetworkingV1NetworkPolicyPort {
/**
 * The port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers.
 */
"port"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;
/**
 * The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
 */
"protocol"?: string;
}

/**
 * NetworkPolicyPort describes a port to allow traffic on
 */
export class IoK8sApiNetworkingV1NetworkPolicyPort extends Model<IIoK8sApiNetworkingV1NetworkPolicyPort> implements IIoK8sApiNetworkingV1NetworkPolicyPort {

"port"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;

"protocol"?: string;
}

Model.setSchema(IoK8sApiNetworkingV1NetworkPolicyPort, "io.k8s.api.networking.v1.NetworkPolicyPort", addSchema);

export {
  IIoK8sApiNetworkingV1NetworkPolicyPort as INetworkPolicyPort,
  IoK8sApiNetworkingV1NetworkPolicyPort as NetworkPolicyPort
};
