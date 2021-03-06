
import { IIoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { IIoK8sApiCoreV1PersistentVolumeClaimCondition } from "./IoK8sApiCoreV1PersistentVolumeClaimCondition.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PersistentVolumeClaimStatus.ts";

/**
 * PersistentVolumeClaimStatus is the current status of a persistent volume claim.
 */
export interface IIoK8sApiCoreV1PersistentVolumeClaimStatus {
/**
 * AccessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
 */
"accessModes"?: Array<string>;
/**
 * Represents the actual resources of the underlying volume.
 */
"capacity"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
/**
 * Current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to 'ResizeStarted'.
 */
"conditions"?: Array<IIoK8sApiCoreV1PersistentVolumeClaimCondition>;
/**
 * Phase represents the current phase of PersistentVolumeClaim.
 */
"phase"?: string;
}

/**
 * PersistentVolumeClaimStatus is the current status of a persistent volume claim.
 */
export class IoK8sApiCoreV1PersistentVolumeClaimStatus extends Model<IIoK8sApiCoreV1PersistentVolumeClaimStatus> implements IIoK8sApiCoreV1PersistentVolumeClaimStatus {

"accessModes"?: Array<string>;

"capacity"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};

"conditions"?: Array<IIoK8sApiCoreV1PersistentVolumeClaimCondition>;

"phase"?: string;
}

Model.setSchema(IoK8sApiCoreV1PersistentVolumeClaimStatus, "io.k8s.api.core.v1.PersistentVolumeClaimStatus", addSchema);

export {
  IIoK8sApiCoreV1PersistentVolumeClaimStatus as IPersistentVolumeClaimStatus,
  IoK8sApiCoreV1PersistentVolumeClaimStatus as PersistentVolumeClaimStatus
};
