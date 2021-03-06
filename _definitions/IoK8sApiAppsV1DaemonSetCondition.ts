
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1DaemonSetCondition.ts";

/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
export interface IIoK8sApiAppsV1DaemonSetCondition {
/**
 * Last time the condition transitioned from one status to another.
 */
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * A human readable message indicating details about the transition.
 */
"message"?: string;
/**
 * The reason for the condition's last transition.
 */
"reason"?: string;
/**
 * Status of the condition, one of True, False, Unknown.
 */
"status": string;
/**
 * Type of DaemonSet condition.
 */
"type": string;
}

/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
export class IoK8sApiAppsV1DaemonSetCondition extends Model<IIoK8sApiAppsV1DaemonSetCondition> implements IIoK8sApiAppsV1DaemonSetCondition {

"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

"message"?: string;

"reason"?: string;

"status": string;

"type": string;
}

Model.setSchema(IoK8sApiAppsV1DaemonSetCondition, "io.k8s.api.apps.v1.DaemonSetCondition", addSchema);

export {
  IIoK8sApiAppsV1DaemonSetCondition as IDaemonSetCondition,
  IoK8sApiAppsV1DaemonSetCondition as DaemonSetCondition
};
