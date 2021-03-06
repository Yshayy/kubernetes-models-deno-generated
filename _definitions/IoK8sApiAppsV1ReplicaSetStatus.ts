
import { IIoK8sApiAppsV1ReplicaSetCondition } from "./IoK8sApiAppsV1ReplicaSetCondition.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1ReplicaSetStatus.ts";

/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
export interface IIoK8sApiAppsV1ReplicaSetStatus {
/**
 * The number of available replicas (ready for at least minReadySeconds) for this replica set.
 */
"availableReplicas"?: number;
/**
 * Represents the latest available observations of a replica set's current state.
 */
"conditions"?: Array<IIoK8sApiAppsV1ReplicaSetCondition>;
/**
 * The number of pods that have labels matching the labels of the pod template of the replicaset.
 */
"fullyLabeledReplicas"?: number;
/**
 * ObservedGeneration reflects the generation of the most recently observed ReplicaSet.
 */
"observedGeneration"?: number;
/**
 * The number of ready replicas for this replica set.
 */
"readyReplicas"?: number;
/**
 * Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
 */
"replicas": number;
}

/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
export class IoK8sApiAppsV1ReplicaSetStatus extends Model<IIoK8sApiAppsV1ReplicaSetStatus> implements IIoK8sApiAppsV1ReplicaSetStatus {

"availableReplicas"?: number;

"conditions"?: Array<IIoK8sApiAppsV1ReplicaSetCondition>;

"fullyLabeledReplicas"?: number;

"observedGeneration"?: number;

"readyReplicas"?: number;

"replicas": number;
}

Model.setSchema(IoK8sApiAppsV1ReplicaSetStatus, "io.k8s.api.apps.v1.ReplicaSetStatus", addSchema);

export {
  IIoK8sApiAppsV1ReplicaSetStatus as IReplicaSetStatus,
  IoK8sApiAppsV1ReplicaSetStatus as ReplicaSetStatus
};
