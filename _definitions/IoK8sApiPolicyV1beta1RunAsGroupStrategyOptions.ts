
import { IIoK8sApiPolicyV1beta1IDRange } from "./IoK8sApiPolicyV1beta1IDRange.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiPolicyV1beta1RunAsGroupStrategyOptions.ts";

/**
 * RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export interface IIoK8sApiPolicyV1beta1RunAsGroupStrategyOptions {
/**
 * ranges are the allowed ranges of gids that may be used. If you would like to force a single gid then supply a single range with the same start and end. Required for MustRunAs.
 */
"ranges"?: Array<IIoK8sApiPolicyV1beta1IDRange>;
/**
 * rule is the strategy that will dictate the allowable RunAsGroup values that may be set.
 */
"rule": string;
}

/**
 * RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export class IoK8sApiPolicyV1beta1RunAsGroupStrategyOptions extends Model<IIoK8sApiPolicyV1beta1RunAsGroupStrategyOptions> implements IIoK8sApiPolicyV1beta1RunAsGroupStrategyOptions {

"ranges"?: Array<IIoK8sApiPolicyV1beta1IDRange>;

"rule": string;
}

Model.setSchema(IoK8sApiPolicyV1beta1RunAsGroupStrategyOptions, "io.k8s.api.policy.v1beta1.RunAsGroupStrategyOptions", addSchema);

export {
  IIoK8sApiPolicyV1beta1RunAsGroupStrategyOptions as IRunAsGroupStrategyOptions,
  IoK8sApiPolicyV1beta1RunAsGroupStrategyOptions as RunAsGroupStrategyOptions
};
