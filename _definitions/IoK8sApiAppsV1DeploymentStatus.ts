
import { IIoK8sApiAppsV1DeploymentCondition } from "./IoK8sApiAppsV1DeploymentCondition.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1DeploymentStatus.ts";

/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export interface IIoK8sApiAppsV1DeploymentStatus {
/**
 * Total number of available pods (ready for at least minReadySeconds) targeted by this deployment.
 */
"availableReplicas"?: number;
/**
 * Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet.
 */
"collisionCount"?: number;
/**
 * Represents the latest available observations of a deployment's current state.
 */
"conditions"?: Array<IIoK8sApiAppsV1DeploymentCondition>;
/**
 * The generation observed by the deployment controller.
 */
"observedGeneration"?: number;
/**
 * Total number of ready pods targeted by this deployment.
 */
"readyReplicas"?: number;
/**
 * Total number of non-terminated pods targeted by this deployment (their labels match the selector).
 */
"replicas"?: number;
/**
 * Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created.
 */
"unavailableReplicas"?: number;
/**
 * Total number of non-terminated pods targeted by this deployment that have the desired template spec.
 */
"updatedReplicas"?: number;
}

/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export class IoK8sApiAppsV1DeploymentStatus extends Model<IIoK8sApiAppsV1DeploymentStatus> implements IIoK8sApiAppsV1DeploymentStatus {

"availableReplicas"?: number;

"collisionCount"?: number;

"conditions"?: Array<IIoK8sApiAppsV1DeploymentCondition>;

"observedGeneration"?: number;

"readyReplicas"?: number;

"replicas"?: number;

"unavailableReplicas"?: number;

"updatedReplicas"?: number;
}

Model.setSchema(IoK8sApiAppsV1DeploymentStatus, "io.k8s.api.apps.v1.DeploymentStatus", addSchema);

export {
  IIoK8sApiAppsV1DeploymentStatus as IDeploymentStatus,
  IoK8sApiAppsV1DeploymentStatus as DeploymentStatus
};
