
import { IIoK8sApimachineryPkgUtilIntstrIntOrString } from "./IoK8sApimachineryPkgUtilIntstrIntOrString.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ServicePort.ts";

/**
 * ServicePort contains information on service's port.
 */
export interface IIoK8sApiCoreV1ServicePort {
/**
 * The application protocol for this port. This field follows standard Kubernetes label syntax. Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and http://www.iana.org/assignments/service-names). Non-standard protocols should use prefixed names such as mycompany.com/my-custom-protocol. Field can be enabled with ServiceAppProtocol feature gate.
 */
"appProtocol"?: string;
/**
 * The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
 */
"name"?: string;
/**
 * The port on each node on which this service is exposed when type=NodePort or LoadBalancer. Usually assigned by the system. If specified, it will be allocated to the service if unused or else creation of the service will fail. Default is to auto-allocate a port if the ServiceType of this Service requires one. More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
 */
"nodePort"?: number;
/**
 * The port that will be exposed by this service.
 */
"port": number;
/**
 * The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.
 */
"protocol"?: string;
/**
 * Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service
 */
"targetPort"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;
}

/**
 * ServicePort contains information on service's port.
 */
export class IoK8sApiCoreV1ServicePort extends Model<IIoK8sApiCoreV1ServicePort> implements IIoK8sApiCoreV1ServicePort {

"appProtocol"?: string;

"name"?: string;

"nodePort"?: number;

"port": number;

"protocol"?: string;

"targetPort"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;
}

Model.setSchema(IoK8sApiCoreV1ServicePort, "io.k8s.api.core.v1.ServicePort", addSchema);

export {
  IIoK8sApiCoreV1ServicePort as IServicePort,
  IoK8sApiCoreV1ServicePort as ServicePort
};
