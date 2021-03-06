
import { IIoK8sApiCoreV1SecretReference } from "./IoK8sApiCoreV1SecretReference.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1CSIPersistentVolumeSource.ts";

/**
 * Represents storage that is managed by an external CSI volume driver (Beta feature)
 */
export interface IIoK8sApiCoreV1CSIPersistentVolumeSource {
/**
 * ControllerExpandSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI ControllerExpandVolume call. This is an alpha field and requires enabling ExpandCSIVolumes feature gate. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.
 */
"controllerExpandSecretRef"?: IIoK8sApiCoreV1SecretReference;
/**
 * ControllerPublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI ControllerPublishVolume and ControllerUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.
 */
"controllerPublishSecretRef"?: IIoK8sApiCoreV1SecretReference;
/**
 * Driver is the name of the driver to use for this volume. Required.
 */
"driver": string;
/**
 * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs".
 */
"fsType"?: string;
/**
 * NodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.
 */
"nodePublishSecretRef"?: IIoK8sApiCoreV1SecretReference;
/**
 * NodeStageSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodeStageVolume and NodeStageVolume and NodeUnstageVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.
 */
"nodeStageSecretRef"?: IIoK8sApiCoreV1SecretReference;
/**
 * Optional: The value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write).
 */
"readOnly"?: boolean;
/**
 * Attributes of the volume to publish.
 */
"volumeAttributes"?: {
[key: string]: string;
};
/**
 * VolumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.
 */
"volumeHandle": string;
}

/**
 * Represents storage that is managed by an external CSI volume driver (Beta feature)
 */
export class IoK8sApiCoreV1CSIPersistentVolumeSource extends Model<IIoK8sApiCoreV1CSIPersistentVolumeSource> implements IIoK8sApiCoreV1CSIPersistentVolumeSource {

"controllerExpandSecretRef"?: IIoK8sApiCoreV1SecretReference;

"controllerPublishSecretRef"?: IIoK8sApiCoreV1SecretReference;

"driver": string;

"fsType"?: string;

"nodePublishSecretRef"?: IIoK8sApiCoreV1SecretReference;

"nodeStageSecretRef"?: IIoK8sApiCoreV1SecretReference;

"readOnly"?: boolean;

"volumeAttributes"?: {
[key: string]: string;
};

"volumeHandle": string;
}

Model.setSchema(IoK8sApiCoreV1CSIPersistentVolumeSource, "io.k8s.api.core.v1.CSIPersistentVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1CSIPersistentVolumeSource as ICSIPersistentVolumeSource,
  IoK8sApiCoreV1CSIPersistentVolumeSource as CSIPersistentVolumeSource
};
