
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1ReplicaSetCondition.ts";

/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
export interface IIoK8sApiAppsV1ReplicaSetCondition {
/**
 * The last time the condition transitioned from one status to another.
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
 * Type of replica set condition.
 */
"type": string;
}

/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
export class IoK8sApiAppsV1ReplicaSetCondition extends Model<IIoK8sApiAppsV1ReplicaSetCondition> implements IIoK8sApiAppsV1ReplicaSetCondition {

"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

"message"?: string;

"reason"?: string;

"status": string;

"type": string;
}

Model.setSchema(IoK8sApiAppsV1ReplicaSetCondition, "io.k8s.api.apps.v1.ReplicaSetCondition", addSchema);

export {
  IIoK8sApiAppsV1ReplicaSetCondition as IReplicaSetCondition,
  IoK8sApiAppsV1ReplicaSetCondition as ReplicaSetCondition
};
