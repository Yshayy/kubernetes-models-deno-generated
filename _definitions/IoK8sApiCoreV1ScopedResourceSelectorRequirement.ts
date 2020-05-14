
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ScopedResourceSelectorRequirement.ts";

/**
 * A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values.
 */
export interface IIoK8sApiCoreV1ScopedResourceSelectorRequirement {
/**
 * Represents a scope's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist.
 */
"operator": string;
/**
 * The name of the scope that the selector applies to.
 */
"scopeName": string;
/**
 * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
 */
"values"?: Array<string>;
}

/**
 * A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values.
 */
export class IoK8sApiCoreV1ScopedResourceSelectorRequirement extends Model<IIoK8sApiCoreV1ScopedResourceSelectorRequirement> implements IIoK8sApiCoreV1ScopedResourceSelectorRequirement {

"operator": string;

"scopeName": string;

"values"?: Array<string>;
}

Model.setSchema(IoK8sApiCoreV1ScopedResourceSelectorRequirement, "io.k8s.api.core.v1.ScopedResourceSelectorRequirement", addSchema);

export {
  IIoK8sApiCoreV1ScopedResourceSelectorRequirement as IScopedResourceSelectorRequirement,
  IoK8sApiCoreV1ScopedResourceSelectorRequirement as ScopedResourceSelectorRequirement
};
