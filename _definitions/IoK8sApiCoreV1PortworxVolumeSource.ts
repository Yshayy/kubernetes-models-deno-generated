
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PortworxVolumeSource.ts";

/**
 * PortworxVolumeSource represents a Portworx volume resource.
 */
export interface IIoK8sApiCoreV1PortworxVolumeSource {
/**
 * FSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified.
 */
"fsType"?: string;
/**
 * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
 */
"readOnly"?: boolean;
/**
 * VolumeID uniquely identifies a Portworx volume
 */
"volumeID": string;
}

/**
 * PortworxVolumeSource represents a Portworx volume resource.
 */
export class IoK8sApiCoreV1PortworxVolumeSource extends Model<IIoK8sApiCoreV1PortworxVolumeSource> implements IIoK8sApiCoreV1PortworxVolumeSource {

"fsType"?: string;

"readOnly"?: boolean;

"volumeID": string;
}

Model.setSchema(IoK8sApiCoreV1PortworxVolumeSource, "io.k8s.api.core.v1.PortworxVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1PortworxVolumeSource as IPortworxVolumeSource,
  IoK8sApiCoreV1PortworxVolumeSource as PortworxVolumeSource
};
