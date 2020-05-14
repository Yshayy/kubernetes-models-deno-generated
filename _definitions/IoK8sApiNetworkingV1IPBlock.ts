
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiNetworkingV1IPBlock.ts";

/**
 * IPBlock describes a particular CIDR (Ex. "192.168.1.1/24","2001:db9::/64") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
 */
export interface IIoK8sApiNetworkingV1IPBlock {
/**
 * CIDR is a string representing the IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64"
 */
"cidr": string;
/**
 * Except is a slice of CIDRs that should not be included within an IP Block Valid examples are "192.168.1.1/24" or "2001:db9::/64" Except values will be rejected if they are outside the CIDR range
 */
"except"?: Array<string>;
}

/**
 * IPBlock describes a particular CIDR (Ex. "192.168.1.1/24","2001:db9::/64") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
 */
export class IoK8sApiNetworkingV1IPBlock extends Model<IIoK8sApiNetworkingV1IPBlock> implements IIoK8sApiNetworkingV1IPBlock {

"cidr": string;

"except"?: Array<string>;
}

Model.setSchema(IoK8sApiNetworkingV1IPBlock, "io.k8s.api.networking.v1.IPBlock", addSchema);

export {
  IIoK8sApiNetworkingV1IPBlock as IIPBlock,
  IoK8sApiNetworkingV1IPBlock as IPBlock
};
