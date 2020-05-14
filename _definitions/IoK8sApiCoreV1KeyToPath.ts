
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1KeyToPath.ts";

/**
 * Maps a string key to a path within a volume.
 */
export interface IIoK8sApiCoreV1KeyToPath {
/**
 * The key to project.
 */
"key": string;
/**
 * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
 */
"mode"?: number;
/**
 * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
 */
"path": string;
}

/**
 * Maps a string key to a path within a volume.
 */
export class IoK8sApiCoreV1KeyToPath extends Model<IIoK8sApiCoreV1KeyToPath> implements IIoK8sApiCoreV1KeyToPath {

"key": string;

"mode"?: number;

"path": string;
}

Model.setSchema(IoK8sApiCoreV1KeyToPath, "io.k8s.api.core.v1.KeyToPath", addSchema);

export {
  IIoK8sApiCoreV1KeyToPath as IKeyToPath,
  IoK8sApiCoreV1KeyToPath as KeyToPath
};
