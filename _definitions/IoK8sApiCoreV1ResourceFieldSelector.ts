
import { IIoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ResourceFieldSelector.ts";

/**
 * ResourceFieldSelector represents container resources (cpu, memory) and their output format
 */
export interface IIoK8sApiCoreV1ResourceFieldSelector {
/**
 * Container name: required for volumes, optional for env vars
 */
"containerName"?: string;
/**
 * Specifies the output format of the exposed resources, defaults to "1"
 */
"divisor"?: IIoK8sApimachineryPkgApiResourceQuantity;
/**
 * Required: resource to select
 */
"resource": string;
}

/**
 * ResourceFieldSelector represents container resources (cpu, memory) and their output format
 */
export class IoK8sApiCoreV1ResourceFieldSelector extends Model<IIoK8sApiCoreV1ResourceFieldSelector> implements IIoK8sApiCoreV1ResourceFieldSelector {

"containerName"?: string;

"divisor"?: IIoK8sApimachineryPkgApiResourceQuantity;

"resource": string;
}

Model.setSchema(IoK8sApiCoreV1ResourceFieldSelector, "io.k8s.api.core.v1.ResourceFieldSelector", addSchema);

export {
  IIoK8sApiCoreV1ResourceFieldSelector as IResourceFieldSelector,
  IoK8sApiCoreV1ResourceFieldSelector as ResourceFieldSelector
};
