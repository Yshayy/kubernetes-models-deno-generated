
import { IIoK8sApiCoreV1PodAffinityTerm } from "./IoK8sApiCoreV1PodAffinityTerm.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1WeightedPodAffinityTerm.ts";

/**
 * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
 */
export interface IIoK8sApiCoreV1WeightedPodAffinityTerm {
/**
 * Required. A pod affinity term, associated with the corresponding weight.
 */
"podAffinityTerm": IIoK8sApiCoreV1PodAffinityTerm;
/**
 * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
 */
"weight": number;
}

/**
 * The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
 */
export class IoK8sApiCoreV1WeightedPodAffinityTerm extends Model<IIoK8sApiCoreV1WeightedPodAffinityTerm> implements IIoK8sApiCoreV1WeightedPodAffinityTerm {

"podAffinityTerm": IIoK8sApiCoreV1PodAffinityTerm;

"weight": number;
}

Model.setSchema(IoK8sApiCoreV1WeightedPodAffinityTerm, "io.k8s.api.core.v1.WeightedPodAffinityTerm", addSchema);

export {
  IIoK8sApiCoreV1WeightedPodAffinityTerm as IWeightedPodAffinityTerm,
  IoK8sApiCoreV1WeightedPodAffinityTerm as WeightedPodAffinityTerm
};
