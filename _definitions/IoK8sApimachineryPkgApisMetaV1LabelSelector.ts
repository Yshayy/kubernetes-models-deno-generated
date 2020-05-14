
import { IIoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement } from "./IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

/**
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 */
export interface IIoK8sApimachineryPkgApisMetaV1LabelSelector {
/**
 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
 */
"matchExpressions"?: Array<IIoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement>;
/**
 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
 */
"matchLabels"?: {
[key: string]: string;
};
}

/**
 * A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
 */
export class IoK8sApimachineryPkgApisMetaV1LabelSelector extends Model<IIoK8sApimachineryPkgApisMetaV1LabelSelector> implements IIoK8sApimachineryPkgApisMetaV1LabelSelector {

"matchExpressions"?: Array<IIoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement>;

"matchLabels"?: {
[key: string]: string;
};
}

Model.setSchema(IoK8sApimachineryPkgApisMetaV1LabelSelector, "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector", addSchema);

export {
  IIoK8sApimachineryPkgApisMetaV1LabelSelector as ILabelSelector,
  IoK8sApimachineryPkgApisMetaV1LabelSelector as LabelSelector
};
