
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ReplicationControllerCondition.ts";

/**
 * ReplicationControllerCondition describes the state of a replication controller at a certain point.
 */
export interface IIoK8sApiCoreV1ReplicationControllerCondition {
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
 * Type of replication controller condition.
 */
"type": string;
}

/**
 * ReplicationControllerCondition describes the state of a replication controller at a certain point.
 */
export class IoK8sApiCoreV1ReplicationControllerCondition extends Model<IIoK8sApiCoreV1ReplicationControllerCondition> implements IIoK8sApiCoreV1ReplicationControllerCondition {

"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

"message"?: string;

"reason"?: string;

"status": string;

"type": string;
}

Model.setSchema(IoK8sApiCoreV1ReplicationControllerCondition, "io.k8s.api.core.v1.ReplicationControllerCondition", addSchema);

export {
  IIoK8sApiCoreV1ReplicationControllerCondition as IReplicationControllerCondition,
  IoK8sApiCoreV1ReplicationControllerCondition as ReplicationControllerCondition
};
