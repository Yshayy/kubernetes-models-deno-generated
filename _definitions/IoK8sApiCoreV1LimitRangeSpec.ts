
import { IIoK8sApiCoreV1LimitRangeItem } from "./IoK8sApiCoreV1LimitRangeItem.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1LimitRangeSpec.ts";

/**
 * LimitRangeSpec defines a min/max usage limit for resources that match on kind.
 */
export interface IIoK8sApiCoreV1LimitRangeSpec {
/**
 * Limits is the list of LimitRangeItem objects that are enforced.
 */
"limits": Array<IIoK8sApiCoreV1LimitRangeItem>;
}

/**
 * LimitRangeSpec defines a min/max usage limit for resources that match on kind.
 */
export class IoK8sApiCoreV1LimitRangeSpec extends Model<IIoK8sApiCoreV1LimitRangeSpec> implements IIoK8sApiCoreV1LimitRangeSpec {

"limits": Array<IIoK8sApiCoreV1LimitRangeItem>;
}

Model.setSchema(IoK8sApiCoreV1LimitRangeSpec, "io.k8s.api.core.v1.LimitRangeSpec", addSchema);

export {
  IIoK8sApiCoreV1LimitRangeSpec as ILimitRangeSpec,
  IoK8sApiCoreV1LimitRangeSpec as LimitRangeSpec
};
