
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1LocalVolumeSource.ts";

/**
 * Local represents directly-attached storage with node affinity (Beta feature)
 */
export interface IIoK8sApiCoreV1LocalVolumeSource {
/**
 * Filesystem type to mount. It applies only when the Path is a block device. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default value is to auto-select a fileystem if unspecified.
 */
"fsType"?: string;
/**
 * The full path to the volume on the node. It can be either a directory or block device (disk, partition, ...).
 */
"path": string;
}

/**
 * Local represents directly-attached storage with node affinity (Beta feature)
 */
export class IoK8sApiCoreV1LocalVolumeSource extends Model<IIoK8sApiCoreV1LocalVolumeSource> implements IIoK8sApiCoreV1LocalVolumeSource {

"fsType"?: string;

"path": string;
}

Model.setSchema(IoK8sApiCoreV1LocalVolumeSource, "io.k8s.api.core.v1.LocalVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1LocalVolumeSource as ILocalVolumeSource,
  IoK8sApiCoreV1LocalVolumeSource as LocalVolumeSource
};
