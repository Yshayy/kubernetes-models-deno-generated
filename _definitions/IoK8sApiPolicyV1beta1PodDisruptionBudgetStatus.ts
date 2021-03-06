
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiPolicyV1beta1PodDisruptionBudgetStatus.ts";

/**
 * PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system.
 */
export interface IIoK8sApiPolicyV1beta1PodDisruptionBudgetStatus {
/**
 * current number of healthy pods
 */
"currentHealthy": number;
/**
 * minimum desired number of healthy pods
 */
"desiredHealthy": number;
/**
 * DisruptedPods contains information about pods whose eviction was processed by the API server eviction subresource handler but has not yet been observed by the PodDisruptionBudget controller. A pod will be in this map from the time when the API server processed the eviction request to the time when the pod is seen by PDB controller as having been marked for deletion (or after a timeout). The key in the map is the name of the pod and the value is the time when the API server processed the eviction request. If the deletion didn't occur and a pod is still there it will be removed from the list automatically by PodDisruptionBudget controller after some time. If everything goes smooth this map should be empty for the most of the time. Large number of entries in the map may indicate problems with pod deletions.
 */
"disruptedPods"?: {
[key: string]: IIoK8sApimachineryPkgApisMetaV1Time;
};
/**
 * Number of pod disruptions that are currently allowed.
 */
"disruptionsAllowed": number;
/**
 * total number of pods counted by this disruption budget
 */
"expectedPods": number;
/**
 * Most recent generation observed when updating this PDB status. DisruptionsAllowed and other status information is valid only if observedGeneration equals to PDB's object generation.
 */
"observedGeneration"?: number;
}

/**
 * PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system.
 */
export class IoK8sApiPolicyV1beta1PodDisruptionBudgetStatus extends Model<IIoK8sApiPolicyV1beta1PodDisruptionBudgetStatus> implements IIoK8sApiPolicyV1beta1PodDisruptionBudgetStatus {

"currentHealthy": number;

"desiredHealthy": number;

"disruptedPods"?: {
[key: string]: IIoK8sApimachineryPkgApisMetaV1Time;
};

"disruptionsAllowed": number;

"expectedPods": number;

"observedGeneration"?: number;
}

Model.setSchema(IoK8sApiPolicyV1beta1PodDisruptionBudgetStatus, "io.k8s.api.policy.v1beta1.PodDisruptionBudgetStatus", addSchema);

export {
  IIoK8sApiPolicyV1beta1PodDisruptionBudgetStatus as IPodDisruptionBudgetStatus,
  IoK8sApiPolicyV1beta1PodDisruptionBudgetStatus as PodDisruptionBudgetStatus
};
