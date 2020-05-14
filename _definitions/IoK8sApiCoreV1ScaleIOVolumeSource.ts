
import { IIoK8sApiCoreV1LocalObjectReference } from "./IoK8sApiCoreV1LocalObjectReference.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ScaleIOVolumeSource.ts";

/**
 * ScaleIOVolumeSource represents a persistent ScaleIO volume
 */
export interface IIoK8sApiCoreV1ScaleIOVolumeSource {
/**
 * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs".
 */
"fsType"?: string;
/**
 * The host address of the ScaleIO API Gateway.
 */
"gateway": string;
/**
 * The name of the ScaleIO Protection Domain for the configured storage.
 */
"protectionDomain"?: string;
/**
 * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
 */
"readOnly"?: boolean;
/**
 * SecretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
 */
"secretRef": IIoK8sApiCoreV1LocalObjectReference;
/**
 * Flag to enable/disable SSL communication with Gateway, default false
 */
"sslEnabled"?: boolean;
/**
 * Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
 */
"storageMode"?: string;
/**
 * The ScaleIO Storage Pool associated with the protection domain.
 */
"storagePool"?: string;
/**
 * The name of the storage system as configured in ScaleIO.
 */
"system": string;
/**
 * The name of a volume already created in the ScaleIO system that is associated with this volume source.
 */
"volumeName"?: string;
}

/**
 * ScaleIOVolumeSource represents a persistent ScaleIO volume
 */
export class IoK8sApiCoreV1ScaleIOVolumeSource extends Model<IIoK8sApiCoreV1ScaleIOVolumeSource> implements IIoK8sApiCoreV1ScaleIOVolumeSource {

"fsType"?: string;

"gateway": string;

"protectionDomain"?: string;

"readOnly"?: boolean;

"secretRef": IIoK8sApiCoreV1LocalObjectReference;

"sslEnabled"?: boolean;

"storageMode"?: string;

"storagePool"?: string;

"system": string;

"volumeName"?: string;
}

Model.setSchema(IoK8sApiCoreV1ScaleIOVolumeSource, "io.k8s.api.core.v1.ScaleIOVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1ScaleIOVolumeSource as IScaleIOVolumeSource,
  IoK8sApiCoreV1ScaleIOVolumeSource as ScaleIOVolumeSource
};
