
import { IIoK8sApiCoreV1DownwardAPIVolumeFile } from "./IoK8sApiCoreV1DownwardAPIVolumeFile.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1DownwardAPIVolumeSource.ts";

/**
 * DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.
 */
export interface IIoK8sApiCoreV1DownwardAPIVolumeSource {
/**
 * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
 */
"defaultMode"?: number;
/**
 * Items is a list of downward API volume file
 */
"items"?: Array<IIoK8sApiCoreV1DownwardAPIVolumeFile>;
}

/**
 * DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.
 */
export class IoK8sApiCoreV1DownwardAPIVolumeSource extends Model<IIoK8sApiCoreV1DownwardAPIVolumeSource> implements IIoK8sApiCoreV1DownwardAPIVolumeSource {

"defaultMode"?: number;

"items"?: Array<IIoK8sApiCoreV1DownwardAPIVolumeFile>;
}

Model.setSchema(IoK8sApiCoreV1DownwardAPIVolumeSource, "io.k8s.api.core.v1.DownwardAPIVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1DownwardAPIVolumeSource as IDownwardAPIVolumeSource,
  IoK8sApiCoreV1DownwardAPIVolumeSource as DownwardAPIVolumeSource
};
