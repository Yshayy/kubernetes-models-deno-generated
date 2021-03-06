
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1AzureFilePersistentVolumeSource.ts";

/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 */
export interface IIoK8sApiCoreV1AzureFilePersistentVolumeSource {
/**
 * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
 */
"readOnly"?: boolean;
/**
 * the name of secret that contains Azure Storage Account Name and Key
 */
"secretName": string;
/**
 * the namespace of the secret that contains Azure Storage Account Name and Key default is the same as the Pod
 */
"secretNamespace"?: string;
/**
 * Share Name
 */
"shareName": string;
}

/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 */
export class IoK8sApiCoreV1AzureFilePersistentVolumeSource extends Model<IIoK8sApiCoreV1AzureFilePersistentVolumeSource> implements IIoK8sApiCoreV1AzureFilePersistentVolumeSource {

"readOnly"?: boolean;

"secretName": string;

"secretNamespace"?: string;

"shareName": string;
}

Model.setSchema(IoK8sApiCoreV1AzureFilePersistentVolumeSource, "io.k8s.api.core.v1.AzureFilePersistentVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1AzureFilePersistentVolumeSource as IAzureFilePersistentVolumeSource,
  IoK8sApiCoreV1AzureFilePersistentVolumeSource as AzureFilePersistentVolumeSource
};
