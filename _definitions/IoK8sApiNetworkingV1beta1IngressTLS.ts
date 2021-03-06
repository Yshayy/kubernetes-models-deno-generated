
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiNetworkingV1beta1IngressTLS.ts";

/**
 * IngressTLS describes the transport layer security associated with an Ingress.
 */
export interface IIoK8sApiNetworkingV1beta1IngressTLS {
/**
 * Hosts are a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.
 */
"hosts"?: Array<string>;
/**
 * SecretName is the name of the secret used to terminate TLS traffic on port 443. Field is left optional to allow TLS routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing.
 */
"secretName"?: string;
}

/**
 * IngressTLS describes the transport layer security associated with an Ingress.
 */
export class IoK8sApiNetworkingV1beta1IngressTLS extends Model<IIoK8sApiNetworkingV1beta1IngressTLS> implements IIoK8sApiNetworkingV1beta1IngressTLS {

"hosts"?: Array<string>;

"secretName"?: string;
}

Model.setSchema(IoK8sApiNetworkingV1beta1IngressTLS, "io.k8s.api.networking.v1beta1.IngressTLS", addSchema);

export {
  IIoK8sApiNetworkingV1beta1IngressTLS as IIngressTLS,
  IoK8sApiNetworkingV1beta1IngressTLS as IngressTLS
};
