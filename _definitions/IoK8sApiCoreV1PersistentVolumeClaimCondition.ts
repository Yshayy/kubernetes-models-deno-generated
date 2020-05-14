
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PersistentVolumeClaimCondition.ts";

/**
 * PersistentVolumeClaimCondition contails details about state of pvc
 */
export interface IIoK8sApiCoreV1PersistentVolumeClaimCondition {
/**
 * Last time we probed the condition.
 */
"lastProbeTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * Last time the condition transitioned from one status to another.
 */
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * Human-readable message indicating details about last transition.
 */
"message"?: string;
/**
 * Unique, this should be a short, machine understandable string that gives the reason for condition's last transition. If it reports "ResizeStarted" that means the underlying persistent volume is being resized.
 */
"reason"?: string;
"status": string;
"type": string;
}

/**
 * PersistentVolumeClaimCondition contails details about state of pvc
 */
export class IoK8sApiCoreV1PersistentVolumeClaimCondition extends Model<IIoK8sApiCoreV1PersistentVolumeClaimCondition> implements IIoK8sApiCoreV1PersistentVolumeClaimCondition {

"lastProbeTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

"message"?: string;

"reason"?: string;
"status": string;
"type": string;
}

Model.setSchema(IoK8sApiCoreV1PersistentVolumeClaimCondition, "io.k8s.api.core.v1.PersistentVolumeClaimCondition", addSchema);

export {
  IIoK8sApiCoreV1PersistentVolumeClaimCondition as IPersistentVolumeClaimCondition,
  IoK8sApiCoreV1PersistentVolumeClaimCondition as PersistentVolumeClaimCondition
};
