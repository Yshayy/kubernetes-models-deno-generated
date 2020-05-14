
import { IIoK8sApiCoreV1ObjectFieldSelector } from "./IoK8sApiCoreV1ObjectFieldSelector.ts";

import { IIoK8sApiCoreV1ResourceFieldSelector } from "./IoK8sApiCoreV1ResourceFieldSelector.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1DownwardAPIVolumeFile.ts";

/**
 * DownwardAPIVolumeFile represents information to create the file containing the pod field
 */
export interface IIoK8sApiCoreV1DownwardAPIVolumeFile {
/**
 * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
 */
"fieldRef"?: IIoK8sApiCoreV1ObjectFieldSelector;
/**
 * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
 */
"mode"?: number;
/**
 * Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
 */
"path": string;
/**
 * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
 */
"resourceFieldRef"?: IIoK8sApiCoreV1ResourceFieldSelector;
}

/**
 * DownwardAPIVolumeFile represents information to create the file containing the pod field
 */
export class IoK8sApiCoreV1DownwardAPIVolumeFile extends Model<IIoK8sApiCoreV1DownwardAPIVolumeFile> implements IIoK8sApiCoreV1DownwardAPIVolumeFile {

"fieldRef"?: IIoK8sApiCoreV1ObjectFieldSelector;

"mode"?: number;

"path": string;

"resourceFieldRef"?: IIoK8sApiCoreV1ResourceFieldSelector;
}

Model.setSchema(IoK8sApiCoreV1DownwardAPIVolumeFile, "io.k8s.api.core.v1.DownwardAPIVolumeFile", addSchema);

export {
  IIoK8sApiCoreV1DownwardAPIVolumeFile as IDownwardAPIVolumeFile,
  IoK8sApiCoreV1DownwardAPIVolumeFile as DownwardAPIVolumeFile
};
