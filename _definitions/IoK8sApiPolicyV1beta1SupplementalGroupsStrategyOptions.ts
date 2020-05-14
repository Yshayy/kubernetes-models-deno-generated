
import { IIoK8sApiPolicyV1beta1IDRange } from "./IoK8sApiPolicyV1beta1IDRange.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions.ts";

/**
 * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy.
 */
export interface IIoK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions {
/**
 * ranges are the allowed ranges of supplemental groups.  If you would like to force a single supplemental group then supply a single range with the same start and end. Required for MustRunAs.
 */
"ranges"?: Array<IIoK8sApiPolicyV1beta1IDRange>;
/**
 * rule is the strategy that will dictate what supplemental groups is used in the SecurityContext.
 */
"rule"?: string;
}

/**
 * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy.
 */
export class IoK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions extends Model<IIoK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions> implements IIoK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions {

"ranges"?: Array<IIoK8sApiPolicyV1beta1IDRange>;

"rule"?: string;
}

Model.setSchema(IoK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions, "io.k8s.api.policy.v1beta1.SupplementalGroupsStrategyOptions", addSchema);

export {
  IIoK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions as ISupplementalGroupsStrategyOptions,
  IoK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions as SupplementalGroupsStrategyOptions
};
