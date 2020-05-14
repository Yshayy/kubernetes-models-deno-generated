
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1FCVolumeSource.ts";

/**
 * Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.
 */
export interface IIoK8sApiCoreV1FCVolumeSource {
/**
 * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
 */
"fsType"?: string;
/**
 * Optional: FC target lun number
 */
"lun"?: number;
/**
 * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
 */
"readOnly"?: boolean;
/**
 * Optional: FC target worldwide names (WWNs)
 */
"targetWWNs"?: Array<string>;
/**
 * Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
 */
"wwids"?: Array<string>;
}

/**
 * Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.
 */
export class IoK8sApiCoreV1FCVolumeSource extends Model<IIoK8sApiCoreV1FCVolumeSource> implements IIoK8sApiCoreV1FCVolumeSource {

"fsType"?: string;

"lun"?: number;

"readOnly"?: boolean;

"targetWWNs"?: Array<string>;

"wwids"?: Array<string>;
}

Model.setSchema(IoK8sApiCoreV1FCVolumeSource, "io.k8s.api.core.v1.FCVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1FCVolumeSource as IFCVolumeSource,
  IoK8sApiCoreV1FCVolumeSource as FCVolumeSource
};
