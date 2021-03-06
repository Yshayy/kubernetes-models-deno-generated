
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiDiscoveryV1beta1EndpointPort.ts";

/**
 * EndpointPort represents a Port used by an EndpointSlice
 */
export interface IIoK8sApiDiscoveryV1beta1EndpointPort {
/**
 * The application protocol for this port. This field follows standard Kubernetes label syntax. Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and http://www.iana.org/assignments/service-names). Non-standard protocols should use prefixed names such as mycompany.com/my-custom-protocol.
 */
"appProtocol"?: string;
/**
 * The name of this port. All ports in an EndpointSlice must have a unique name. If the EndpointSlice is dervied from a Kubernetes service, this corresponds to the Service.ports[].name. Name must either be an empty string or pass DNS_LABEL validation: \* must be no more than 63 characters long. \* must consist of lower case alphanumeric characters or '-'. \* must start and end with an alphanumeric character. Default is empty string.
 */
"name"?: string;
/**
 * The port number of the endpoint. If this is not specified, ports are not restricted and must be interpreted in the context of the specific consumer.
 */
"port"?: number;
/**
 * The IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP.
 */
"protocol"?: string;
}

/**
 * EndpointPort represents a Port used by an EndpointSlice
 */
export class IoK8sApiDiscoveryV1beta1EndpointPort extends Model<IIoK8sApiDiscoveryV1beta1EndpointPort> implements IIoK8sApiDiscoveryV1beta1EndpointPort {

"appProtocol"?: string;

"name"?: string;

"port"?: number;

"protocol"?: string;
}

Model.setSchema(IoK8sApiDiscoveryV1beta1EndpointPort, "io.k8s.api.discovery.v1beta1.EndpointPort", addSchema);

export {
  IIoK8sApiDiscoveryV1beta1EndpointPort as IEndpointPort,
  IoK8sApiDiscoveryV1beta1EndpointPort as EndpointPort
};
