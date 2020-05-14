
import { IIoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { IIoK8sApiCoreV1ScopeSelector } from "./IoK8sApiCoreV1ScopeSelector.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ResourceQuotaSpec.ts";

/**
 * ResourceQuotaSpec defines the desired hard limits to enforce for Quota.
 */
export interface IIoK8sApiCoreV1ResourceQuotaSpec {
/**
 * hard is the set of desired hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
 */
"hard"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
/**
 * scopeSelector is also a collection of filters like scopes that must match each object tracked by a quota but expressed using ScopeSelectorOperator in combination with possible values. For a resource to match, both scopes AND scopeSelector (if specified in spec), must be matched.
 */
"scopeSelector"?: IIoK8sApiCoreV1ScopeSelector;
/**
 * A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects.
 */
"scopes"?: Array<string>;
}

/**
 * ResourceQuotaSpec defines the desired hard limits to enforce for Quota.
 */
export class IoK8sApiCoreV1ResourceQuotaSpec extends Model<IIoK8sApiCoreV1ResourceQuotaSpec> implements IIoK8sApiCoreV1ResourceQuotaSpec {

"hard"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};

"scopeSelector"?: IIoK8sApiCoreV1ScopeSelector;

"scopes"?: Array<string>;
}

Model.setSchema(IoK8sApiCoreV1ResourceQuotaSpec, "io.k8s.api.core.v1.ResourceQuotaSpec", addSchema);

export {
  IIoK8sApiCoreV1ResourceQuotaSpec as IResourceQuotaSpec,
  IoK8sApiCoreV1ResourceQuotaSpec as ResourceQuotaSpec
};
