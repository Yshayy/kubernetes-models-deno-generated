
import { IIoK8sApiNetworkingV1beta1HTTPIngressPath } from "./IoK8sApiNetworkingV1beta1HTTPIngressPath.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiNetworkingV1beta1HTTPIngressRuleValue.ts";

/**
 * HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
 */
export interface IIoK8sApiNetworkingV1beta1HTTPIngressRuleValue {
/**
 * A collection of paths that map requests to backends.
 */
"paths": Array<IIoK8sApiNetworkingV1beta1HTTPIngressPath>;
}

/**
 * HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
 */
export class IoK8sApiNetworkingV1beta1HTTPIngressRuleValue extends Model<IIoK8sApiNetworkingV1beta1HTTPIngressRuleValue> implements IIoK8sApiNetworkingV1beta1HTTPIngressRuleValue {

"paths": Array<IIoK8sApiNetworkingV1beta1HTTPIngressPath>;
}

Model.setSchema(IoK8sApiNetworkingV1beta1HTTPIngressRuleValue, "io.k8s.api.networking.v1beta1.HTTPIngressRuleValue", addSchema);

export {
  IIoK8sApiNetworkingV1beta1HTTPIngressRuleValue as IHTTPIngressRuleValue,
  IoK8sApiNetworkingV1beta1HTTPIngressRuleValue as HTTPIngressRuleValue
};
