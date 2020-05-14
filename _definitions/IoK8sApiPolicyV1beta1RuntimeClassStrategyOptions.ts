
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiPolicyV1beta1RuntimeClassStrategyOptions.ts";

/**
 * RuntimeClassStrategyOptions define the strategy that will dictate the allowable RuntimeClasses for a pod.
 */
export interface IIoK8sApiPolicyV1beta1RuntimeClassStrategyOptions {
/**
 * allowedRuntimeClassNames is a whitelist of RuntimeClass names that may be specified on a pod. A value of "\*" means that any RuntimeClass name is allowed, and must be the only item in the list. An empty list requires the RuntimeClassName field to be unset.
 */
"allowedRuntimeClassNames": Array<string>;
/**
 * defaultRuntimeClassName is the default RuntimeClassName to set on the pod. The default MUST be allowed by the allowedRuntimeClassNames list. A value of nil does not mutate the Pod.
 */
"defaultRuntimeClassName"?: string;
}

/**
 * RuntimeClassStrategyOptions define the strategy that will dictate the allowable RuntimeClasses for a pod.
 */
export class IoK8sApiPolicyV1beta1RuntimeClassStrategyOptions extends Model<IIoK8sApiPolicyV1beta1RuntimeClassStrategyOptions> implements IIoK8sApiPolicyV1beta1RuntimeClassStrategyOptions {

"allowedRuntimeClassNames": Array<string>;

"defaultRuntimeClassName"?: string;
}

Model.setSchema(IoK8sApiPolicyV1beta1RuntimeClassStrategyOptions, "io.k8s.api.policy.v1beta1.RuntimeClassStrategyOptions", addSchema);

export {
  IIoK8sApiPolicyV1beta1RuntimeClassStrategyOptions as IRuntimeClassStrategyOptions,
  IoK8sApiPolicyV1beta1RuntimeClassStrategyOptions as RuntimeClassStrategyOptions
};
