
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1FlockerVolumeSource.ts";

/**
 * Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
 */
export interface IIoK8sApiCoreV1FlockerVolumeSource {
/**
 * Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
 */
"datasetName"?: string;
/**
 * UUID of the dataset. This is unique identifier of a Flocker dataset
 */
"datasetUUID"?: string;
}

/**
 * Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
 */
export class IoK8sApiCoreV1FlockerVolumeSource extends Model<IIoK8sApiCoreV1FlockerVolumeSource> implements IIoK8sApiCoreV1FlockerVolumeSource {

"datasetName"?: string;

"datasetUUID"?: string;
}

Model.setSchema(IoK8sApiCoreV1FlockerVolumeSource, "io.k8s.api.core.v1.FlockerVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1FlockerVolumeSource as IFlockerVolumeSource,
  IoK8sApiCoreV1FlockerVolumeSource as FlockerVolumeSource
};
