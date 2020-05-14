
import { IIoK8sApiCoreV1ScopedResourceSelectorRequirement } from "./IoK8sApiCoreV1ScopedResourceSelectorRequirement.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ScopeSelector.ts";

/**
 * A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
 */
export interface IIoK8sApiCoreV1ScopeSelector {
/**
 * A list of scope selector requirements by scope of the resources.
 */
"matchExpressions"?: Array<IIoK8sApiCoreV1ScopedResourceSelectorRequirement>;
}

/**
 * A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
 */
export class IoK8sApiCoreV1ScopeSelector extends Model<IIoK8sApiCoreV1ScopeSelector> implements IIoK8sApiCoreV1ScopeSelector {

"matchExpressions"?: Array<IIoK8sApiCoreV1ScopedResourceSelectorRequirement>;
}

Model.setSchema(IoK8sApiCoreV1ScopeSelector, "io.k8s.api.core.v1.ScopeSelector", addSchema);

export {
  IIoK8sApiCoreV1ScopeSelector as IScopeSelector,
  IoK8sApiCoreV1ScopeSelector as ScopeSelector
};
