
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1AzureDiskVolumeSource.ts";

/**
 * AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
 */
export interface IIoK8sApiCoreV1AzureDiskVolumeSource {
/**
 * Host Caching mode: None, Read Only, Read Write.
 */
"cachingMode"?: string;
/**
 * The Name of the data disk in the blob storage
 */
"diskName": string;
/**
 * The URI the data disk in the blob storage
 */
"diskURI": string;
/**
 * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
 */
"fsType"?: string;
/**
 * Expected values Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared
 */
"kind"?: string;
/**
 * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
 */
"readOnly"?: boolean;
}

/**
 * AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
 */
export class IoK8sApiCoreV1AzureDiskVolumeSource extends Model<IIoK8sApiCoreV1AzureDiskVolumeSource> implements IIoK8sApiCoreV1AzureDiskVolumeSource {

"cachingMode"?: string;

"diskName": string;

"diskURI": string;

"fsType"?: string;

"kind"?: string;

"readOnly"?: boolean;
}

Model.setSchema(IoK8sApiCoreV1AzureDiskVolumeSource, "io.k8s.api.core.v1.AzureDiskVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1AzureDiskVolumeSource as IAzureDiskVolumeSource,
  IoK8sApiCoreV1AzureDiskVolumeSource as AzureDiskVolumeSource
};
