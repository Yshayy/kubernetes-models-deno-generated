
import { IIoK8sApiAppsV1StatefulSetCondition } from "./IoK8sApiAppsV1StatefulSetCondition.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1StatefulSetStatus.ts";

/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 */
export interface IIoK8sApiAppsV1StatefulSetStatus {
/**
 * collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
 */
"collisionCount"?: number;
/**
 * Represents the latest available observations of a statefulset's current state.
 */
"conditions"?: Array<IIoK8sApiAppsV1StatefulSetCondition>;
/**
 * currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision.
 */
"currentReplicas"?: number;
/**
 * currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas).
 */
"currentRevision"?: string;
/**
 * observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet's generation, which is updated on mutation by the API Server.
 */
"observedGeneration"?: number;
/**
 * readyReplicas is the number of Pods created by the StatefulSet controller that have a Ready Condition.
 */
"readyReplicas"?: number;
/**
 * replicas is the number of Pods created by the StatefulSet controller.
 */
"replicas": number;
/**
 * updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas)
 */
"updateRevision"?: string;
/**
 * updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision.
 */
"updatedReplicas"?: number;
}

/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 */
export class IoK8sApiAppsV1StatefulSetStatus extends Model<IIoK8sApiAppsV1StatefulSetStatus> implements IIoK8sApiAppsV1StatefulSetStatus {

"collisionCount"?: number;

"conditions"?: Array<IIoK8sApiAppsV1StatefulSetCondition>;

"currentReplicas"?: number;

"currentRevision"?: string;

"observedGeneration"?: number;

"readyReplicas"?: number;

"replicas": number;

"updateRevision"?: string;

"updatedReplicas"?: number;
}

Model.setSchema(IoK8sApiAppsV1StatefulSetStatus, "io.k8s.api.apps.v1.StatefulSetStatus", addSchema);

export {
  IIoK8sApiAppsV1StatefulSetStatus as IStatefulSetStatus,
  IoK8sApiAppsV1StatefulSetStatus as StatefulSetStatus
};
