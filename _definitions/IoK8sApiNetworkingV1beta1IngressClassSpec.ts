
import { IIoK8sApiCoreV1TypedLocalObjectReference } from "./IoK8sApiCoreV1TypedLocalObjectReference.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiNetworkingV1beta1IngressClassSpec.ts";

/**
 * IngressClassSpec provides information about the class of an Ingress.
 */
export interface IIoK8sApiNetworkingV1beta1IngressClassSpec {
/**
 * Controller refers to the name of the controller that should handle this class. This allows for different "flavors" that are controlled by the same controller. For example, you may have different Parameters for the same implementing controller. This should be specified as a domain-prefixed path no more than 250 characters in length, e.g. "acme.io/ingress-controller". This field is immutable.
 */
"controller"?: string;
/**
 * Parameters is a link to a custom resource containing additional configuration for the controller. This is optional if the controller does not require extra parameters.
 */
"parameters"?: IIoK8sApiCoreV1TypedLocalObjectReference;
}

/**
 * IngressClassSpec provides information about the class of an Ingress.
 */
export class IoK8sApiNetworkingV1beta1IngressClassSpec extends Model<IIoK8sApiNetworkingV1beta1IngressClassSpec> implements IIoK8sApiNetworkingV1beta1IngressClassSpec {

"controller"?: string;

"parameters"?: IIoK8sApiCoreV1TypedLocalObjectReference;
}

Model.setSchema(IoK8sApiNetworkingV1beta1IngressClassSpec, "io.k8s.api.networking.v1beta1.IngressClassSpec", addSchema);

export {
  IIoK8sApiNetworkingV1beta1IngressClassSpec as IIngressClassSpec,
  IoK8sApiNetworkingV1beta1IngressClassSpec as IngressClassSpec
};
