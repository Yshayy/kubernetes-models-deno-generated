
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1AzureFileVolumeSource.ts";

/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 */
export interface IIoK8sApiCoreV1AzureFileVolumeSource {
/**
 * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
 */
"readOnly"?: boolean;
/**
 * the name of secret that contains Azure Storage Account Name and Key
 */
"secretName": string;
/**
 * Share Name
 */
"shareName": string;
}

/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 */
export class IoK8sApiCoreV1AzureFileVolumeSource extends Model<IIoK8sApiCoreV1AzureFileVolumeSource> implements IIoK8sApiCoreV1AzureFileVolumeSource {

"readOnly"?: boolean;

"secretName": string;

"shareName": string;
}

Model.setSchema(IoK8sApiCoreV1AzureFileVolumeSource, "io.k8s.api.core.v1.AzureFileVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1AzureFileVolumeSource as IAzureFileVolumeSource,
  IoK8sApiCoreV1AzureFileVolumeSource as AzureFileVolumeSource
};
