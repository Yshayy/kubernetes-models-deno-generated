
import { IIoK8sApiAppsV1DaemonSetCondition } from "./IoK8sApiAppsV1DaemonSetCondition.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1DaemonSetStatus.ts";

/**
 * DaemonSetStatus represents the current status of a daemon set.
 */
export interface IIoK8sApiAppsV1DaemonSetStatus {
/**
 * Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
 */
"collisionCount"?: number;
/**
 * Represents the latest available observations of a DaemonSet's current state.
 */
"conditions"?: Array<IIoK8sApiAppsV1DaemonSetCondition>;
/**
 * The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
 */
"currentNumberScheduled": number;
/**
 * The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
 */
"desiredNumberScheduled": number;
/**
 * The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds)
 */
"numberAvailable"?: number;
/**
 * The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
 */
"numberMisscheduled": number;
/**
 * The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and ready.
 */
"numberReady": number;
/**
 * The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds)
 */
"numberUnavailable"?: number;
/**
 * The most recent generation observed by the daemon set controller.
 */
"observedGeneration"?: number;
/**
 * The total number of nodes that are running updated daemon pod
 */
"updatedNumberScheduled"?: number;
}

/**
 * DaemonSetStatus represents the current status of a daemon set.
 */
export class IoK8sApiAppsV1DaemonSetStatus extends Model<IIoK8sApiAppsV1DaemonSetStatus> implements IIoK8sApiAppsV1DaemonSetStatus {

"collisionCount"?: number;

"conditions"?: Array<IIoK8sApiAppsV1DaemonSetCondition>;

"currentNumberScheduled": number;

"desiredNumberScheduled": number;

"numberAvailable"?: number;

"numberMisscheduled": number;

"numberReady": number;

"numberUnavailable"?: number;

"observedGeneration"?: number;

"updatedNumberScheduled"?: number;
}

Model.setSchema(IoK8sApiAppsV1DaemonSetStatus, "io.k8s.api.apps.v1.DaemonSetStatus", addSchema);

export {
  IIoK8sApiAppsV1DaemonSetStatus as IDaemonSetStatus,
  IoK8sApiAppsV1DaemonSetStatus as DaemonSetStatus
};
