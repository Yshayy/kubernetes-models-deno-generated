
import { IIoK8sApiCoreV1LocalObjectReference } from "./IoK8sApiCoreV1LocalObjectReference.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1StorageOSVolumeSource.ts";

/**
 * Represents a StorageOS persistent volume resource.
 */
export interface IIoK8sApiCoreV1StorageOSVolumeSource {
/**
 * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
 */
"fsType"?: string;
/**
 * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
 */
"readOnly"?: boolean;
/**
 * SecretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted.
 */
"secretRef"?: IIoK8sApiCoreV1LocalObjectReference;
/**
 * VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.
 */
"volumeName"?: string;
/**
 * VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
 */
"volumeNamespace"?: string;
}

/**
 * Represents a StorageOS persistent volume resource.
 */
export class IoK8sApiCoreV1StorageOSVolumeSource extends Model<IIoK8sApiCoreV1StorageOSVolumeSource> implements IIoK8sApiCoreV1StorageOSVolumeSource {

"fsType"?: string;

"readOnly"?: boolean;

"secretRef"?: IIoK8sApiCoreV1LocalObjectReference;

"volumeName"?: string;

"volumeNamespace"?: string;
}

Model.setSchema(IoK8sApiCoreV1StorageOSVolumeSource, "io.k8s.api.core.v1.StorageOSVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1StorageOSVolumeSource as IStorageOSVolumeSource,
  IoK8sApiCoreV1StorageOSVolumeSource as StorageOSVolumeSource
};
