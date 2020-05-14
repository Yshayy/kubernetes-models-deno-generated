
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1VsphereVirtualDiskVolumeSource.ts";

/**
 * Represents a vSphere volume resource.
 */
export interface IIoK8sApiCoreV1VsphereVirtualDiskVolumeSource {
/**
 * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
 */
"fsType"?: string;
/**
 * Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
 */
"storagePolicyID"?: string;
/**
 * Storage Policy Based Management (SPBM) profile name.
 */
"storagePolicyName"?: string;
/**
 * Path that identifies vSphere volume vmdk
 */
"volumePath": string;
}

/**
 * Represents a vSphere volume resource.
 */
export class IoK8sApiCoreV1VsphereVirtualDiskVolumeSource extends Model<IIoK8sApiCoreV1VsphereVirtualDiskVolumeSource> implements IIoK8sApiCoreV1VsphereVirtualDiskVolumeSource {

"fsType"?: string;

"storagePolicyID"?: string;

"storagePolicyName"?: string;

"volumePath": string;
}

Model.setSchema(IoK8sApiCoreV1VsphereVirtualDiskVolumeSource, "io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1VsphereVirtualDiskVolumeSource as IVsphereVirtualDiskVolumeSource,
  IoK8sApiCoreV1VsphereVirtualDiskVolumeSource as VsphereVirtualDiskVolumeSource
};
