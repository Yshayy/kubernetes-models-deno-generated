
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1EndpointPort.ts";

/**
 * EndpointPort is a tuple that describes a single port.
 */
export interface IIoK8sApiCoreV1EndpointPort {
/**
 * The application protocol for this port. This field follows standard Kubernetes label syntax. Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and http://www.iana.org/assignments/service-names). Non-standard protocols should use prefixed names such as mycompany.com/my-custom-protocol. Field can be enabled with ServiceAppProtocol feature gate.
 */
"appProtocol"?: string;
/**
 * The name of this port.  This must match the 'name' field in the corresponding ServicePort. Must be a DNS_LABEL. Optional only if one port is defined.
 */
"name"?: string;
/**
 * The port number of the endpoint.
 */
"port": number;
/**
 * The IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP.
 */
"protocol"?: string;
}

/**
 * EndpointPort is a tuple that describes a single port.
 */
export class IoK8sApiCoreV1EndpointPort extends Model<IIoK8sApiCoreV1EndpointPort> implements IIoK8sApiCoreV1EndpointPort {

"appProtocol"?: string;

"name"?: string;

"port": number;

"protocol"?: string;
}

Model.setSchema(IoK8sApiCoreV1EndpointPort, "io.k8s.api.core.v1.EndpointPort", addSchema);

export {
  IIoK8sApiCoreV1EndpointPort as IEndpointPort,
  IoK8sApiCoreV1EndpointPort as EndpointPort
};
