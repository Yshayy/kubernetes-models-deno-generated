
import { IIoK8sApiCoreV1ExecAction } from "./IoK8sApiCoreV1ExecAction.ts";

import { IIoK8sApiCoreV1HTTPGetAction } from "./IoK8sApiCoreV1HTTPGetAction.ts";

import { IIoK8sApiCoreV1TCPSocketAction } from "./IoK8sApiCoreV1TCPSocketAction.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1Probe.ts";

/**
 * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
 */
export interface IIoK8sApiCoreV1Probe {
/**
 * One and only one of the following should be specified. Exec specifies the action to take.
 */
"exec"?: IIoK8sApiCoreV1ExecAction;
/**
 * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
 */
"failureThreshold"?: number;
/**
 * HTTPGet specifies the http request to perform.
 */
"httpGet"?: IIoK8sApiCoreV1HTTPGetAction;
/**
 * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
 */
"initialDelaySeconds"?: number;
/**
 * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
 */
"periodSeconds"?: number;
/**
 * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
 */
"successThreshold"?: number;
/**
 * TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported
 */
"tcpSocket"?: IIoK8sApiCoreV1TCPSocketAction;
/**
 * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
 */
"timeoutSeconds"?: number;
}

/**
 * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
 */
export class IoK8sApiCoreV1Probe extends Model<IIoK8sApiCoreV1Probe> implements IIoK8sApiCoreV1Probe {

"exec"?: IIoK8sApiCoreV1ExecAction;

"failureThreshold"?: number;

"httpGet"?: IIoK8sApiCoreV1HTTPGetAction;

"initialDelaySeconds"?: number;

"periodSeconds"?: number;

"successThreshold"?: number;

"tcpSocket"?: IIoK8sApiCoreV1TCPSocketAction;

"timeoutSeconds"?: number;
}

Model.setSchema(IoK8sApiCoreV1Probe, "io.k8s.api.core.v1.Probe", addSchema);

export {
  IIoK8sApiCoreV1Probe as IProbe,
  IoK8sApiCoreV1Probe as Probe
};
