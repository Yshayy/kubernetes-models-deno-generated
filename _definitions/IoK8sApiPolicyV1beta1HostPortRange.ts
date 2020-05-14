
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiPolicyV1beta1HostPortRange.ts";

/**
 * HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined.
 */
export interface IIoK8sApiPolicyV1beta1HostPortRange {
/**
 * max is the end of the range, inclusive.
 */
"max": number;
/**
 * min is the start of the range, inclusive.
 */
"min": number;
}

/**
 * HostPortRange defines a range of host ports that will be enabled by a policy for pods to use.  It requires both the start and end to be defined.
 */
export class IoK8sApiPolicyV1beta1HostPortRange extends Model<IIoK8sApiPolicyV1beta1HostPortRange> implements IIoK8sApiPolicyV1beta1HostPortRange {

"max": number;

"min": number;
}

Model.setSchema(IoK8sApiPolicyV1beta1HostPortRange, "io.k8s.api.policy.v1beta1.HostPortRange", addSchema);

export {
  IIoK8sApiPolicyV1beta1HostPortRange as IHostPortRange,
  IoK8sApiPolicyV1beta1HostPortRange as HostPortRange
};
