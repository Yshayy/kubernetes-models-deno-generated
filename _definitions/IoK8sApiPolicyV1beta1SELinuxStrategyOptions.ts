
import { IIoK8sApiCoreV1SELinuxOptions } from "./IoK8sApiCoreV1SELinuxOptions.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiPolicyV1beta1SELinuxStrategyOptions.ts";

/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export interface IIoK8sApiPolicyV1beta1SELinuxStrategyOptions {
/**
 * rule is the strategy that will dictate the allowable labels that may be set.
 */
"rule": string;
/**
 * seLinuxOptions required to run as; required for MustRunAs More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
 */
"seLinuxOptions"?: IIoK8sApiCoreV1SELinuxOptions;
}

/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export class IoK8sApiPolicyV1beta1SELinuxStrategyOptions extends Model<IIoK8sApiPolicyV1beta1SELinuxStrategyOptions> implements IIoK8sApiPolicyV1beta1SELinuxStrategyOptions {

"rule": string;

"seLinuxOptions"?: IIoK8sApiCoreV1SELinuxOptions;
}

Model.setSchema(IoK8sApiPolicyV1beta1SELinuxStrategyOptions, "io.k8s.api.policy.v1beta1.SELinuxStrategyOptions", addSchema);

export {
  IIoK8sApiPolicyV1beta1SELinuxStrategyOptions as ISELinuxStrategyOptions,
  IoK8sApiPolicyV1beta1SELinuxStrategyOptions as SELinuxStrategyOptions
};
