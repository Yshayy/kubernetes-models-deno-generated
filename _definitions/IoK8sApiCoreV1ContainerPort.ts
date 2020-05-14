
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ContainerPort.ts";

/**
 * ContainerPort represents a network port in a single container.
 */
export interface IIoK8sApiCoreV1ContainerPort {
/**
 * Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
 */
"containerPort": number;
/**
 * What host IP to bind the external port to.
 */
"hostIP"?: string;
/**
 * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
 */
"hostPort"?: number;
/**
 * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.
 */
"name"?: string;
/**
 * Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP".
 */
"protocol"?: string;
}

/**
 * ContainerPort represents a network port in a single container.
 */
export class IoK8sApiCoreV1ContainerPort extends Model<IIoK8sApiCoreV1ContainerPort> implements IIoK8sApiCoreV1ContainerPort {

"containerPort": number;

"hostIP"?: string;

"hostPort"?: number;

"name"?: string;

"protocol"?: string;
}

Model.setSchema(IoK8sApiCoreV1ContainerPort, "io.k8s.api.core.v1.ContainerPort", addSchema);

export {
  IIoK8sApiCoreV1ContainerPort as IContainerPort,
  IoK8sApiCoreV1ContainerPort as ContainerPort
};
