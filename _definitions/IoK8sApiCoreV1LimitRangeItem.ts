
import { IIoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1LimitRangeItem.ts";

/**
 * LimitRangeItem defines a min/max usage limit for any resource that matches on kind.
 */
export interface IIoK8sApiCoreV1LimitRangeItem {
/**
 * Default resource requirement limit value by resource name if resource limit is omitted.
 */
"default"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
/**
 * DefaultRequest is the default resource requirement request value by resource name if resource request is omitted.
 */
"defaultRequest"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
/**
 * Max usage constraints on this kind by resource name.
 */
"max"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
/**
 * MaxLimitRequestRatio if specified, the named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource.
 */
"maxLimitRequestRatio"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
/**
 * Min usage constraints on this kind by resource name.
 */
"min"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
/**
 * Type of resource that this limit applies to.
 */
"type": string;
}

/**
 * LimitRangeItem defines a min/max usage limit for any resource that matches on kind.
 */
export class IoK8sApiCoreV1LimitRangeItem extends Model<IIoK8sApiCoreV1LimitRangeItem> implements IIoK8sApiCoreV1LimitRangeItem {

"default"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};

"defaultRequest"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};

"max"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};

"maxLimitRequestRatio"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};

"min"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};

"type": string;
}

Model.setSchema(IoK8sApiCoreV1LimitRangeItem, "io.k8s.api.core.v1.LimitRangeItem", addSchema);

export {
  IIoK8sApiCoreV1LimitRangeItem as ILimitRangeItem,
  IoK8sApiCoreV1LimitRangeItem as LimitRangeItem
};
