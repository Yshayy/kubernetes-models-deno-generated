
import { IIoK8sApiCoreV1TypedLocalObjectReference } from "./IoK8sApiCoreV1TypedLocalObjectReference.ts";

import { IIoK8sApimachineryPkgUtilIntstrIntOrString } from "./IoK8sApimachineryPkgUtilIntstrIntOrString.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiNetworkingV1beta1IngressBackend.ts";

/**
 * IngressBackend describes all endpoints for a given service and port.
 */
export interface IIoK8sApiNetworkingV1beta1IngressBackend {
/**
 * Resource is an ObjectRef to another Kubernetes resource in the namespace of the Ingress object. If resource is specified, serviceName and servicePort must not be specified.
 */
"resource"?: IIoK8sApiCoreV1TypedLocalObjectReference;
/**
 * Specifies the name of the referenced service.
 */
"serviceName"?: string;
/**
 * Specifies the port of the referenced service.
 */
"servicePort"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;
}

/**
 * IngressBackend describes all endpoints for a given service and port.
 */
export class IoK8sApiNetworkingV1beta1IngressBackend extends Model<IIoK8sApiNetworkingV1beta1IngressBackend> implements IIoK8sApiNetworkingV1beta1IngressBackend {

"resource"?: IIoK8sApiCoreV1TypedLocalObjectReference;

"serviceName"?: string;

"servicePort"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;
}

Model.setSchema(IoK8sApiNetworkingV1beta1IngressBackend, "io.k8s.api.networking.v1beta1.IngressBackend", addSchema);

export {
  IIoK8sApiNetworkingV1beta1IngressBackend as IIngressBackend,
  IoK8sApiNetworkingV1beta1IngressBackend as IngressBackend
};
