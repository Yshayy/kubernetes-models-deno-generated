
import { IIoK8sApiPolicyV1beta1IDRange } from "./IoK8sApiPolicyV1beta1IDRange.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiPolicyV1beta1FSGroupStrategyOptions.ts";

/**
 * FSGroupStrategyOptions defines the strategy type and options used to create the strategy.
 */
export interface IIoK8sApiPolicyV1beta1FSGroupStrategyOptions {
/**
 * ranges are the allowed ranges of fs groups.  If you would like to force a single fs group then supply a single range with the same start and end. Required for MustRunAs.
 */
"ranges"?: Array<IIoK8sApiPolicyV1beta1IDRange>;
/**
 * rule is the strategy that will dictate what FSGroup is used in the SecurityContext.
 */
"rule"?: string;
}

/**
 * FSGroupStrategyOptions defines the strategy type and options used to create the strategy.
 */
export class IoK8sApiPolicyV1beta1FSGroupStrategyOptions extends Model<IIoK8sApiPolicyV1beta1FSGroupStrategyOptions> implements IIoK8sApiPolicyV1beta1FSGroupStrategyOptions {

"ranges"?: Array<IIoK8sApiPolicyV1beta1IDRange>;

"rule"?: string;
}

Model.setSchema(IoK8sApiPolicyV1beta1FSGroupStrategyOptions, "io.k8s.api.policy.v1beta1.FSGroupStrategyOptions", addSchema);

export {
  IIoK8sApiPolicyV1beta1FSGroupStrategyOptions as IFSGroupStrategyOptions,
  IoK8sApiPolicyV1beta1FSGroupStrategyOptions as FSGroupStrategyOptions
};
