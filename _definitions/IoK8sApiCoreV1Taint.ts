
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1Taint.ts";

/**
 * The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint.
 */
export interface IIoK8sApiCoreV1Taint {
/**
 * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
 */
"effect": string;
/**
 * Required. The taint key to be applied to a node.
 */
"key": string;
/**
 * TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
 */
"timeAdded"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * The taint value corresponding to the taint key.
 */
"value"?: string;
}

/**
 * The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint.
 */
export class IoK8sApiCoreV1Taint extends Model<IIoK8sApiCoreV1Taint> implements IIoK8sApiCoreV1Taint {

"effect": string;

"key": string;

"timeAdded"?: IIoK8sApimachineryPkgApisMetaV1Time;

"value"?: string;
}

Model.setSchema(IoK8sApiCoreV1Taint, "io.k8s.api.core.v1.Taint", addSchema);

export {
  IIoK8sApiCoreV1Taint as ITaint,
  IoK8sApiCoreV1Taint as Taint
};
