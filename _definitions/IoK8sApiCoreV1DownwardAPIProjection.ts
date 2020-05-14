
import { IIoK8sApiCoreV1DownwardAPIVolumeFile } from "./IoK8sApiCoreV1DownwardAPIVolumeFile.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1DownwardAPIProjection.ts";

/**
 * Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
 */
export interface IIoK8sApiCoreV1DownwardAPIProjection {
/**
 * Items is a list of DownwardAPIVolume file
 */
"items"?: Array<IIoK8sApiCoreV1DownwardAPIVolumeFile>;
}

/**
 * Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
 */
export class IoK8sApiCoreV1DownwardAPIProjection extends Model<IIoK8sApiCoreV1DownwardAPIProjection> implements IIoK8sApiCoreV1DownwardAPIProjection {

"items"?: Array<IIoK8sApiCoreV1DownwardAPIVolumeFile>;
}

Model.setSchema(IoK8sApiCoreV1DownwardAPIProjection, "io.k8s.api.core.v1.DownwardAPIProjection", addSchema);

export {
  IIoK8sApiCoreV1DownwardAPIProjection as IDownwardAPIProjection,
  IoK8sApiCoreV1DownwardAPIProjection as DownwardAPIProjection
};
