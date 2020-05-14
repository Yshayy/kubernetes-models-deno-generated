
import { IIoK8sApiPolicyV1beta1IDRange } from "./IoK8sApiPolicyV1beta1IDRange.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiPolicyV1beta1RunAsUserStrategyOptions.ts";

/**
 * RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export interface IIoK8sApiPolicyV1beta1RunAsUserStrategyOptions {
/**
 * ranges are the allowed ranges of uids that may be used. If you would like to force a single uid then supply a single range with the same start and end. Required for MustRunAs.
 */
"ranges"?: Array<IIoK8sApiPolicyV1beta1IDRange>;
/**
 * rule is the strategy that will dictate the allowable RunAsUser values that may be set.
 */
"rule": string;
}

/**
 * RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export class IoK8sApiPolicyV1beta1RunAsUserStrategyOptions extends Model<IIoK8sApiPolicyV1beta1RunAsUserStrategyOptions> implements IIoK8sApiPolicyV1beta1RunAsUserStrategyOptions {

"ranges"?: Array<IIoK8sApiPolicyV1beta1IDRange>;

"rule": string;
}

Model.setSchema(IoK8sApiPolicyV1beta1RunAsUserStrategyOptions, "io.k8s.api.policy.v1beta1.RunAsUserStrategyOptions", addSchema);

export {
  IIoK8sApiPolicyV1beta1RunAsUserStrategyOptions as IRunAsUserStrategyOptions,
  IoK8sApiPolicyV1beta1RunAsUserStrategyOptions as RunAsUserStrategyOptions
};
