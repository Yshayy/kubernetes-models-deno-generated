
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement.ts";

/**
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
export interface IIoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement {
/**
 * key is the label key that the selector applies to.
 */
"key": string;
/**
 * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
 */
"operator": string;
/**
 * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
 */
"values"?: Array<string>;
}

/**
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
export class IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement extends Model<IIoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement> implements IIoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement {

"key": string;

"operator": string;

"values"?: Array<string>;
}

Model.setSchema(IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement, "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement", addSchema);

export {
  IIoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement as ILabelSelectorRequirement,
  IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement as LabelSelectorRequirement
};
