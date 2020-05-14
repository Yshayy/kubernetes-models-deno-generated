
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PhotonPersistentDiskVolumeSource.ts";

/**
 * Represents a Photon Controller persistent disk resource.
 */
export interface IIoK8sApiCoreV1PhotonPersistentDiskVolumeSource {
/**
 * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
 */
"fsType"?: string;
/**
 * ID that identifies Photon Controller persistent disk
 */
"pdID": string;
}

/**
 * Represents a Photon Controller persistent disk resource.
 */
export class IoK8sApiCoreV1PhotonPersistentDiskVolumeSource extends Model<IIoK8sApiCoreV1PhotonPersistentDiskVolumeSource> implements IIoK8sApiCoreV1PhotonPersistentDiskVolumeSource {

"fsType"?: string;

"pdID": string;
}

Model.setSchema(IoK8sApiCoreV1PhotonPersistentDiskVolumeSource, "io.k8s.api.core.v1.PhotonPersistentDiskVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1PhotonPersistentDiskVolumeSource as IPhotonPersistentDiskVolumeSource,
  IoK8sApiCoreV1PhotonPersistentDiskVolumeSource as PhotonPersistentDiskVolumeSource
};
