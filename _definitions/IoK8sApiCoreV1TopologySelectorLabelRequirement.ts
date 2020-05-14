
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1TopologySelectorLabelRequirement.ts";

/**
 * A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future.
 */
export interface IIoK8sApiCoreV1TopologySelectorLabelRequirement {
/**
 * The label key that the selector applies to.
 */
"key": string;
/**
 * An array of string values. One value must match the label to be selected. Each entry in Values is ORed.
 */
"values": Array<string>;
}

/**
 * A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future.
 */
export class IoK8sApiCoreV1TopologySelectorLabelRequirement extends Model<IIoK8sApiCoreV1TopologySelectorLabelRequirement> implements IIoK8sApiCoreV1TopologySelectorLabelRequirement {

"key": string;

"values": Array<string>;
}

Model.setSchema(IoK8sApiCoreV1TopologySelectorLabelRequirement, "io.k8s.api.core.v1.TopologySelectorLabelRequirement", addSchema);

export {
  IIoK8sApiCoreV1TopologySelectorLabelRequirement as ITopologySelectorLabelRequirement,
  IoK8sApiCoreV1TopologySelectorLabelRequirement as TopologySelectorLabelRequirement
};
