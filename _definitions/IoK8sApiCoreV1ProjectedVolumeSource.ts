
import { IIoK8sApiCoreV1VolumeProjection } from "./IoK8sApiCoreV1VolumeProjection.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ProjectedVolumeSource.ts";

/**
 * Represents a projected volume source
 */
export interface IIoK8sApiCoreV1ProjectedVolumeSource {
/**
 * Mode bits to use on created files by default. Must be a value between 0 and 0777. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
 */
"defaultMode"?: number;
/**
 * list of volume projections
 */
"sources": Array<IIoK8sApiCoreV1VolumeProjection>;
}

/**
 * Represents a projected volume source
 */
export class IoK8sApiCoreV1ProjectedVolumeSource extends Model<IIoK8sApiCoreV1ProjectedVolumeSource> implements IIoK8sApiCoreV1ProjectedVolumeSource {

"defaultMode"?: number;

"sources": Array<IIoK8sApiCoreV1VolumeProjection>;
}

Model.setSchema(IoK8sApiCoreV1ProjectedVolumeSource, "io.k8s.api.core.v1.ProjectedVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1ProjectedVolumeSource as IProjectedVolumeSource,
  IoK8sApiCoreV1ProjectedVolumeSource as ProjectedVolumeSource
};
