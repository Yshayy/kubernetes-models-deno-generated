
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PodReadinessGate.ts";

/**
 * PodReadinessGate contains the reference to a pod condition
 */
export interface IIoK8sApiCoreV1PodReadinessGate {
/**
 * ConditionType refers to a condition in the pod's condition list with matching type.
 */
"conditionType": string;
}

/**
 * PodReadinessGate contains the reference to a pod condition
 */
export class IoK8sApiCoreV1PodReadinessGate extends Model<IIoK8sApiCoreV1PodReadinessGate> implements IIoK8sApiCoreV1PodReadinessGate {

"conditionType": string;
}

Model.setSchema(IoK8sApiCoreV1PodReadinessGate, "io.k8s.api.core.v1.PodReadinessGate", addSchema);

export {
  IIoK8sApiCoreV1PodReadinessGate as IPodReadinessGate,
  IoK8sApiCoreV1PodReadinessGate as PodReadinessGate
};
