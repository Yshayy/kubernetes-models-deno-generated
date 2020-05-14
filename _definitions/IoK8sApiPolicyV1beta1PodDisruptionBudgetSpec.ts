
import { IIoK8sApimachineryPkgUtilIntstrIntOrString } from "./IoK8sApimachineryPkgUtilIntstrIntOrString.ts";

import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiPolicyV1beta1PodDisruptionBudgetSpec.ts";

/**
 * PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
 */
export interface IIoK8sApiPolicyV1beta1PodDisruptionBudgetSpec {
/**
 * An eviction is allowed if at most "maxUnavailable" pods selected by "selector" are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with "minAvailable".
 */
"maxUnavailable"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;
/**
 * An eviction is allowed if at least "minAvailable" pods selected by "selector" will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying "100%".
 */
"minAvailable"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;
/**
 * Label query over pods whose evictions are managed by the disruption budget.
 */
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
}

/**
 * PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
 */
export class IoK8sApiPolicyV1beta1PodDisruptionBudgetSpec extends Model<IIoK8sApiPolicyV1beta1PodDisruptionBudgetSpec> implements IIoK8sApiPolicyV1beta1PodDisruptionBudgetSpec {

"maxUnavailable"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;

"minAvailable"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;

"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
}

Model.setSchema(IoK8sApiPolicyV1beta1PodDisruptionBudgetSpec, "io.k8s.api.policy.v1beta1.PodDisruptionBudgetSpec", addSchema);

export {
  IIoK8sApiPolicyV1beta1PodDisruptionBudgetSpec as IPodDisruptionBudgetSpec,
  IoK8sApiPolicyV1beta1PodDisruptionBudgetSpec as PodDisruptionBudgetSpec
};
