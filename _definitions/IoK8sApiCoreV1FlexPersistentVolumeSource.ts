
import { IIoK8sApiCoreV1SecretReference } from "./IoK8sApiCoreV1SecretReference.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1FlexPersistentVolumeSource.ts";

/**
 * FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin.
 */
export interface IIoK8sApiCoreV1FlexPersistentVolumeSource {
/**
 * Driver is the name of the driver to use for this volume.
 */
"driver": string;
/**
 * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
 */
"fsType"?: string;
/**
 * Optional: Extra command options if any.
 */
"options"?: {
[key: string]: string;
};
/**
 * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
 */
"readOnly"?: boolean;
/**
 * Optional: SecretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.
 */
"secretRef"?: IIoK8sApiCoreV1SecretReference;
}

/**
 * FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin.
 */
export class IoK8sApiCoreV1FlexPersistentVolumeSource extends Model<IIoK8sApiCoreV1FlexPersistentVolumeSource> implements IIoK8sApiCoreV1FlexPersistentVolumeSource {

"driver": string;

"fsType"?: string;

"options"?: {
[key: string]: string;
};

"readOnly"?: boolean;

"secretRef"?: IIoK8sApiCoreV1SecretReference;
}

Model.setSchema(IoK8sApiCoreV1FlexPersistentVolumeSource, "io.k8s.api.core.v1.FlexPersistentVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1FlexPersistentVolumeSource as IFlexPersistentVolumeSource,
  IoK8sApiCoreV1FlexPersistentVolumeSource as FlexPersistentVolumeSource
};
