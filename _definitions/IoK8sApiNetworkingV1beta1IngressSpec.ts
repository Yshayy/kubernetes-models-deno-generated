
import { IIoK8sApiNetworkingV1beta1IngressBackend } from "./IoK8sApiNetworkingV1beta1IngressBackend.ts";

import { IIoK8sApiNetworkingV1beta1IngressRule } from "./IoK8sApiNetworkingV1beta1IngressRule.ts";

import { IIoK8sApiNetworkingV1beta1IngressTLS } from "./IoK8sApiNetworkingV1beta1IngressTLS.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiNetworkingV1beta1IngressSpec.ts";

/**
 * IngressSpec describes the Ingress the user wishes to exist.
 */
export interface IIoK8sApiNetworkingV1beta1IngressSpec {
/**
 * A default backend capable of servicing requests that don't match any rule. At least one of 'backend' or 'rules' must be specified. This field is optional to allow the loadbalancer controller or defaulting logic to specify a global default.
 */
"backend"?: IIoK8sApiNetworkingV1beta1IngressBackend;
/**
 * IngressClassName is the name of the IngressClass cluster resource. The associated IngressClass defines which controller will implement the resource. This replaces the deprecated `kubernetes.io/ingress.class` annotation. For backwards compatibility, when that annotation is set, it must be given precedence over this field. The controller may emit a warning if the field and annotation have different values. Implementations of this API should ignore Ingresses without a class specified. An IngressClass resource may be marked as default, which can be used to set a default value for this field. For more information, refer to the IngressClass documentation.
 */
"ingressClassName"?: string;
/**
 * A list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend.
 */
"rules"?: Array<IIoK8sApiNetworkingV1beta1IngressRule>;
/**
 * TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI.
 */
"tls"?: Array<IIoK8sApiNetworkingV1beta1IngressTLS>;
}

/**
 * IngressSpec describes the Ingress the user wishes to exist.
 */
export class IoK8sApiNetworkingV1beta1IngressSpec extends Model<IIoK8sApiNetworkingV1beta1IngressSpec> implements IIoK8sApiNetworkingV1beta1IngressSpec {

"backend"?: IIoK8sApiNetworkingV1beta1IngressBackend;

"ingressClassName"?: string;

"rules"?: Array<IIoK8sApiNetworkingV1beta1IngressRule>;

"tls"?: Array<IIoK8sApiNetworkingV1beta1IngressTLS>;
}

Model.setSchema(IoK8sApiNetworkingV1beta1IngressSpec, "io.k8s.api.networking.v1beta1.IngressSpec", addSchema);

export {
  IIoK8sApiNetworkingV1beta1IngressSpec as IIngressSpec,
  IoK8sApiNetworkingV1beta1IngressSpec as IngressSpec
};
