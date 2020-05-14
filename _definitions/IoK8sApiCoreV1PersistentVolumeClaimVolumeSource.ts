
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PersistentVolumeClaimVolumeSource.ts";

/**
 * PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system).
 */
export interface IIoK8sApiCoreV1PersistentVolumeClaimVolumeSource {
/**
 * ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
 */
"claimName": string;
/**
 * Will force the ReadOnly setting in VolumeMounts. Default false.
 */
"readOnly"?: boolean;
}

/**
 * PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system).
 */
export class IoK8sApiCoreV1PersistentVolumeClaimVolumeSource extends Model<IIoK8sApiCoreV1PersistentVolumeClaimVolumeSource> implements IIoK8sApiCoreV1PersistentVolumeClaimVolumeSource {

"claimName": string;

"readOnly"?: boolean;
}

Model.setSchema(IoK8sApiCoreV1PersistentVolumeClaimVolumeSource, "io.k8s.api.core.v1.PersistentVolumeClaimVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1PersistentVolumeClaimVolumeSource as IPersistentVolumeClaimVolumeSource,
  IoK8sApiCoreV1PersistentVolumeClaimVolumeSource as PersistentVolumeClaimVolumeSource
};
