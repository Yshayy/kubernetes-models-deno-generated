
import { IIoK8sApiCoreV1LocalObjectReference } from "./IoK8sApiCoreV1LocalObjectReference.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1CSIVolumeSource.ts";

/**
 * Represents a source location of a volume to mount, managed by an external CSI driver
 */
export interface IIoK8sApiCoreV1CSIVolumeSource {
/**
 * Driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.
 */
"driver": string;
/**
 * Filesystem type to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.
 */
"fsType"?: string;
/**
 * NodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and  may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed.
 */
"nodePublishSecretRef"?: IIoK8sApiCoreV1LocalObjectReference;
/**
 * Specifies a read-only configuration for the volume. Defaults to false (read/write).
 */
"readOnly"?: boolean;
/**
 * VolumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values.
 */
"volumeAttributes"?: {
[key: string]: string;
};
}

/**
 * Represents a source location of a volume to mount, managed by an external CSI driver
 */
export class IoK8sApiCoreV1CSIVolumeSource extends Model<IIoK8sApiCoreV1CSIVolumeSource> implements IIoK8sApiCoreV1CSIVolumeSource {

"driver": string;

"fsType"?: string;

"nodePublishSecretRef"?: IIoK8sApiCoreV1LocalObjectReference;

"readOnly"?: boolean;

"volumeAttributes"?: {
[key: string]: string;
};
}

Model.setSchema(IoK8sApiCoreV1CSIVolumeSource, "io.k8s.api.core.v1.CSIVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1CSIVolumeSource as ICSIVolumeSource,
  IoK8sApiCoreV1CSIVolumeSource as CSIVolumeSource
};
