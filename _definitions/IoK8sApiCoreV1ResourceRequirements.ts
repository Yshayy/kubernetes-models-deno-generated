
import { IIoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ResourceRequirements.ts";

/**
 * ResourceRequirements describes the compute resource requirements.
 */
export interface IIoK8sApiCoreV1ResourceRequirements {
/**
 * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
 */
"limits"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
/**
 * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
 */
"requests"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
}

/**
 * ResourceRequirements describes the compute resource requirements.
 */
export class IoK8sApiCoreV1ResourceRequirements extends Model<IIoK8sApiCoreV1ResourceRequirements> implements IIoK8sApiCoreV1ResourceRequirements {

"limits"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};

"requests"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
}

Model.setSchema(IoK8sApiCoreV1ResourceRequirements, "io.k8s.api.core.v1.ResourceRequirements", addSchema);

export {
  IIoK8sApiCoreV1ResourceRequirements as IResourceRequirements,
  IoK8sApiCoreV1ResourceRequirements as ResourceRequirements
};
