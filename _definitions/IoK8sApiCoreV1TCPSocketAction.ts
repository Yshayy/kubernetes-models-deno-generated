
import { IIoK8sApimachineryPkgUtilIntstrIntOrString } from "./IoK8sApimachineryPkgUtilIntstrIntOrString.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1TCPSocketAction.ts";

/**
 * TCPSocketAction describes an action based on opening a socket
 */
export interface IIoK8sApiCoreV1TCPSocketAction {
/**
 * Optional: Host name to connect to, defaults to the pod IP.
 */
"host"?: string;
/**
 * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
 */
"port": IIoK8sApimachineryPkgUtilIntstrIntOrString;
}

/**
 * TCPSocketAction describes an action based on opening a socket
 */
export class IoK8sApiCoreV1TCPSocketAction extends Model<IIoK8sApiCoreV1TCPSocketAction> implements IIoK8sApiCoreV1TCPSocketAction {

"host"?: string;

"port": IIoK8sApimachineryPkgUtilIntstrIntOrString;
}

Model.setSchema(IoK8sApiCoreV1TCPSocketAction, "io.k8s.api.core.v1.TCPSocketAction", addSchema);

export {
  IIoK8sApiCoreV1TCPSocketAction as ITCPSocketAction,
  IoK8sApiCoreV1TCPSocketAction as TCPSocketAction
};
