
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1StatefulSetCondition.ts";

/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
export interface IIoK8sApiAppsV1StatefulSetCondition {
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
 * Type of statefulset condition.
 */
"type": string;
}

/**
 * StatefulSetCondition describes the state of a statefulset at a certain point.
 */
export class IoK8sApiAppsV1StatefulSetCondition extends Model<IIoK8sApiAppsV1StatefulSetCondition> implements IIoK8sApiAppsV1StatefulSetCondition {

"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

"message"?: string;

"reason"?: string;

"status": string;

"type": string;
}

Model.setSchema(IoK8sApiAppsV1StatefulSetCondition, "io.k8s.api.apps.v1.StatefulSetCondition", addSchema);

export {
  IIoK8sApiAppsV1StatefulSetCondition as IStatefulSetCondition,
  IoK8sApiAppsV1StatefulSetCondition as StatefulSetCondition
};
