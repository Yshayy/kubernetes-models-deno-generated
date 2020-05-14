
import { IIoK8sApiCoreV1ReplicationControllerCondition } from "./IoK8sApiCoreV1ReplicationControllerCondition.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ReplicationControllerStatus.ts";

/**
 * ReplicationControllerStatus represents the current status of a replication controller.
 */
export interface IIoK8sApiCoreV1ReplicationControllerStatus {
/**
 * The number of available replicas (ready for at least minReadySeconds) for this replication controller.
 */
"availableReplicas"?: number;
/**
 * Represents the latest available observations of a replication controller's current state.
 */
"conditions"?: Array<IIoK8sApiCoreV1ReplicationControllerCondition>;
/**
 * The number of pods that have labels matching the labels of the pod template of the replication controller.
 */
"fullyLabeledReplicas"?: number;
/**
 * ObservedGeneration reflects the generation of the most recently observed replication controller.
 */
"observedGeneration"?: number;
/**
 * The number of ready replicas for this replication controller.
 */
"readyReplicas"?: number;
/**
 * Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
 */
"replicas": number;
}

/**
 * ReplicationControllerStatus represents the current status of a replication controller.
 */
export class IoK8sApiCoreV1ReplicationControllerStatus extends Model<IIoK8sApiCoreV1ReplicationControllerStatus> implements IIoK8sApiCoreV1ReplicationControllerStatus {

"availableReplicas"?: number;

"conditions"?: Array<IIoK8sApiCoreV1ReplicationControllerCondition>;

"fullyLabeledReplicas"?: number;

"observedGeneration"?: number;

"readyReplicas"?: number;

"replicas": number;
}

Model.setSchema(IoK8sApiCoreV1ReplicationControllerStatus, "io.k8s.api.core.v1.ReplicationControllerStatus", addSchema);

export {
  IIoK8sApiCoreV1ReplicationControllerStatus as IReplicationControllerStatus,
  IoK8sApiCoreV1ReplicationControllerStatus as ReplicationControllerStatus
};
