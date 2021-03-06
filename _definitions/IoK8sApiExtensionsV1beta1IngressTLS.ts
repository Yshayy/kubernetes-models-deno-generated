
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiExtensionsV1beta1IngressTLS.ts";

/**
 * IngressTLS describes the transport layer security associated with an Ingress.
 */
export interface IIoK8sApiExtensionsV1beta1IngressTLS {
/**
 * Hosts are a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.
 */
"hosts"?: Array<string>;
/**
 * SecretName is the name of the secret used to terminate SSL traffic on 443. Field is left optional to allow SSL routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing.
 */
"secretName"?: string;
}

/**
 * IngressTLS describes the transport layer security associated with an Ingress.
 */
export class IoK8sApiExtensionsV1beta1IngressTLS extends Model<IIoK8sApiExtensionsV1beta1IngressTLS> implements IIoK8sApiExtensionsV1beta1IngressTLS {

"hosts"?: Array<string>;

"secretName"?: string;
}

Model.setSchema(IoK8sApiExtensionsV1beta1IngressTLS, "io.k8s.api.extensions.v1beta1.IngressTLS", addSchema);

export {
  IIoK8sApiExtensionsV1beta1IngressTLS as IIngressTLS,
  IoK8sApiExtensionsV1beta1IngressTLS as IngressTLS
};
