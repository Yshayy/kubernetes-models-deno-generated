
import { IIoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ResourceQuotaStatus.ts";

/**
 * ResourceQuotaStatus defines the enforced hard limits and observed use.
 */
export interface IIoK8sApiCoreV1ResourceQuotaStatus {
/**
 * Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
 */
"hard"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
/**
 * Used is the current observed total usage of the resource in the namespace.
 */
"used"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
}

/**
 * ResourceQuotaStatus defines the enforced hard limits and observed use.
 */
export class IoK8sApiCoreV1ResourceQuotaStatus extends Model<IIoK8sApiCoreV1ResourceQuotaStatus> implements IIoK8sApiCoreV1ResourceQuotaStatus {

"hard"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};

"used"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
}

Model.setSchema(IoK8sApiCoreV1ResourceQuotaStatus, "io.k8s.api.core.v1.ResourceQuotaStatus", addSchema);

export {
  IIoK8sApiCoreV1ResourceQuotaStatus as IResourceQuotaStatus,
  IoK8sApiCoreV1ResourceQuotaStatus as ResourceQuotaStatus
};
