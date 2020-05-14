
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1HostPathVolumeSource.ts";

/**
 * Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
 */
export interface IIoK8sApiCoreV1HostPathVolumeSource {
/**
 * Path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
 */
"path": string;
/**
 * Type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
 */
"type"?: string;
}

/**
 * Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
 */
export class IoK8sApiCoreV1HostPathVolumeSource extends Model<IIoK8sApiCoreV1HostPathVolumeSource> implements IIoK8sApiCoreV1HostPathVolumeSource {

"path": string;

"type"?: string;
}

Model.setSchema(IoK8sApiCoreV1HostPathVolumeSource, "io.k8s.api.core.v1.HostPathVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1HostPathVolumeSource as IHostPathVolumeSource,
  IoK8sApiCoreV1HostPathVolumeSource as HostPathVolumeSource
};
