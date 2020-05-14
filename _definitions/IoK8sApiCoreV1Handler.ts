
import { IIoK8sApiCoreV1ExecAction } from "./IoK8sApiCoreV1ExecAction.ts";

import { IIoK8sApiCoreV1HTTPGetAction } from "./IoK8sApiCoreV1HTTPGetAction.ts";

import { IIoK8sApiCoreV1TCPSocketAction } from "./IoK8sApiCoreV1TCPSocketAction.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1Handler.ts";

/**
 * Handler defines a specific action that should be taken
 */
export interface IIoK8sApiCoreV1Handler {
/**
 * One and only one of the following should be specified. Exec specifies the action to take.
 */
"exec"?: IIoK8sApiCoreV1ExecAction;
/**
 * HTTPGet specifies the http request to perform.
 */
"httpGet"?: IIoK8sApiCoreV1HTTPGetAction;
/**
 * TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported
 */
"tcpSocket"?: IIoK8sApiCoreV1TCPSocketAction;
}

/**
 * Handler defines a specific action that should be taken
 */
export class IoK8sApiCoreV1Handler extends Model<IIoK8sApiCoreV1Handler> implements IIoK8sApiCoreV1Handler {

"exec"?: IIoK8sApiCoreV1ExecAction;

"httpGet"?: IIoK8sApiCoreV1HTTPGetAction;

"tcpSocket"?: IIoK8sApiCoreV1TCPSocketAction;
}

Model.setSchema(IoK8sApiCoreV1Handler, "io.k8s.api.core.v1.Handler", addSchema);

export {
  IIoK8sApiCoreV1Handler as IHandler,
  IoK8sApiCoreV1Handler as Handler
};
