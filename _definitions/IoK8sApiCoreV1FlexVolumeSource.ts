
import { IIoK8sApiCoreV1LocalObjectReference } from "./IoK8sApiCoreV1LocalObjectReference.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1FlexVolumeSource.ts";

/**
 * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
 */
export interface IIoK8sApiCoreV1FlexVolumeSource {
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
"secretRef"?: IIoK8sApiCoreV1LocalObjectReference;
}

/**
 * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
 */
export class IoK8sApiCoreV1FlexVolumeSource extends Model<IIoK8sApiCoreV1FlexVolumeSource> implements IIoK8sApiCoreV1FlexVolumeSource {

"driver": string;

"fsType"?: string;

"options"?: {
[key: string]: string;
};

"readOnly"?: boolean;

"secretRef"?: IIoK8sApiCoreV1LocalObjectReference;
}

Model.setSchema(IoK8sApiCoreV1FlexVolumeSource, "io.k8s.api.core.v1.FlexVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1FlexVolumeSource as IFlexVolumeSource,
  IoK8sApiCoreV1FlexVolumeSource as FlexVolumeSource
};
