
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PersistentVolumeStatus.ts";

/**
 * PersistentVolumeStatus is the current status of a persistent volume.
 */
export interface IIoK8sApiCoreV1PersistentVolumeStatus {
/**
 * A human-readable message indicating details about why the volume is in this state.
 */
"message"?: string;
/**
 * Phase indicates if a volume is available, bound to a claim, or released by a claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#phase
 */
"phase"?: string;
/**
 * Reason is a brief CamelCase string that describes any failure and is meant for machine parsing and tidy display in the CLI.
 */
"reason"?: string;
}

/**
 * PersistentVolumeStatus is the current status of a persistent volume.
 */
export class IoK8sApiCoreV1PersistentVolumeStatus extends Model<IIoK8sApiCoreV1PersistentVolumeStatus> implements IIoK8sApiCoreV1PersistentVolumeStatus {

"message"?: string;

"phase"?: string;

"reason"?: string;
}

Model.setSchema(IoK8sApiCoreV1PersistentVolumeStatus, "io.k8s.api.core.v1.PersistentVolumeStatus", addSchema);

export {
  IIoK8sApiCoreV1PersistentVolumeStatus as IPersistentVolumeStatus,
  IoK8sApiCoreV1PersistentVolumeStatus as PersistentVolumeStatus
};
