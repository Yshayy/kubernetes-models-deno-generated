
import { IIoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiNodeV1alpha1Overhead.ts";

/**
 * Overhead structure represents the resource overhead associated with running a pod.
 */
export interface IIoK8sApiNodeV1alpha1Overhead {
/**
 * PodFixed represents the fixed resource overhead associated with running a pod.
 */
"podFixed"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
}

/**
 * Overhead structure represents the resource overhead associated with running a pod.
 */
export class IoK8sApiNodeV1alpha1Overhead extends Model<IIoK8sApiNodeV1alpha1Overhead> implements IIoK8sApiNodeV1alpha1Overhead {

"podFixed"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
}

Model.setSchema(IoK8sApiNodeV1alpha1Overhead, "io.k8s.api.node.v1alpha1.Overhead", addSchema);

export {
  IIoK8sApiNodeV1alpha1Overhead as IOverhead,
  IoK8sApiNodeV1alpha1Overhead as Overhead
};
