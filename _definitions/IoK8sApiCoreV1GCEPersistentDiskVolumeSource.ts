
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1GCEPersistentDiskVolumeSource.ts";

/**
 * Represents a Persistent Disk resource in Google Compute Engine.
 * 
 * A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
 */
export interface IIoK8sApiCoreV1GCEPersistentDiskVolumeSource {
/**
 * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
 */
"fsType"?: string;
/**
 * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
 */
"partition"?: number;
/**
 * Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
 */
"pdName": string;
/**
 * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
 */
"readOnly"?: boolean;
}

/**
 * Represents a Persistent Disk resource in Google Compute Engine.
 * 
 * A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
 */
export class IoK8sApiCoreV1GCEPersistentDiskVolumeSource extends Model<IIoK8sApiCoreV1GCEPersistentDiskVolumeSource> implements IIoK8sApiCoreV1GCEPersistentDiskVolumeSource {

"fsType"?: string;

"partition"?: number;

"pdName": string;

"readOnly"?: boolean;
}

Model.setSchema(IoK8sApiCoreV1GCEPersistentDiskVolumeSource, "io.k8s.api.core.v1.GCEPersistentDiskVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1GCEPersistentDiskVolumeSource as IGCEPersistentDiskVolumeSource,
  IoK8sApiCoreV1GCEPersistentDiskVolumeSource as GCEPersistentDiskVolumeSource
};
