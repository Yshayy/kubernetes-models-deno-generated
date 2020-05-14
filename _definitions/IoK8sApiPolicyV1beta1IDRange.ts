
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiPolicyV1beta1IDRange.ts";

/**
 * IDRange provides a min/max of an allowed range of IDs.
 */
export interface IIoK8sApiPolicyV1beta1IDRange {
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
 * IDRange provides a min/max of an allowed range of IDs.
 */
export class IoK8sApiPolicyV1beta1IDRange extends Model<IIoK8sApiPolicyV1beta1IDRange> implements IIoK8sApiPolicyV1beta1IDRange {

"max": number;

"min": number;
}

Model.setSchema(IoK8sApiPolicyV1beta1IDRange, "io.k8s.api.policy.v1beta1.IDRange", addSchema);

export {
  IIoK8sApiPolicyV1beta1IDRange as IIDRange,
  IoK8sApiPolicyV1beta1IDRange as IDRange
};
