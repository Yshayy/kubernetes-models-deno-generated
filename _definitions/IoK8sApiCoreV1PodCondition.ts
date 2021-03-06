
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PodCondition.ts";

/**
 * PodCondition contains details for the current condition of this pod.
 */
export interface IIoK8sApiCoreV1PodCondition {
/**
 * Last time we probed the condition.
 */
"lastProbeTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * Last time the condition transitioned from one status to another.
 */
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * Human-readable message indicating details about last transition.
 */
"message"?: string;
/**
 * Unique, one-word, CamelCase reason for the condition's last transition.
 */
"reason"?: string;
/**
 * Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
 */
"status": string;
/**
 * Type is the type of the condition. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
 */
"type": string;
}

/**
 * PodCondition contains details for the current condition of this pod.
 */
export class IoK8sApiCoreV1PodCondition extends Model<IIoK8sApiCoreV1PodCondition> implements IIoK8sApiCoreV1PodCondition {

"lastProbeTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

"message"?: string;

"reason"?: string;

"status": string;

"type": string;
}

Model.setSchema(IoK8sApiCoreV1PodCondition, "io.k8s.api.core.v1.PodCondition", addSchema);

export {
  IIoK8sApiCoreV1PodCondition as IPodCondition,
  IoK8sApiCoreV1PodCondition as PodCondition
};
