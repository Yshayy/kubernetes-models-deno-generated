
import { IIoK8sApiCoreV1SecretReference } from "./IoK8sApiCoreV1SecretReference.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1CinderPersistentVolumeSource.ts";

/**
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 */
export interface IIoK8sApiCoreV1CinderPersistentVolumeSource {
/**
 * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
 */
"fsType"?: string;
/**
 * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
 */
"readOnly"?: boolean;
/**
 * Optional: points to a secret object containing parameters used to connect to OpenStack.
 */
"secretRef"?: IIoK8sApiCoreV1SecretReference;
/**
 * volume id used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
 */
"volumeID": string;
}

/**
 * Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
 */
export class IoK8sApiCoreV1CinderPersistentVolumeSource extends Model<IIoK8sApiCoreV1CinderPersistentVolumeSource> implements IIoK8sApiCoreV1CinderPersistentVolumeSource {

"fsType"?: string;

"readOnly"?: boolean;

"secretRef"?: IIoK8sApiCoreV1SecretReference;

"volumeID": string;
}

Model.setSchema(IoK8sApiCoreV1CinderPersistentVolumeSource, "io.k8s.api.core.v1.CinderPersistentVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1CinderPersistentVolumeSource as ICinderPersistentVolumeSource,
  IoK8sApiCoreV1CinderPersistentVolumeSource as CinderPersistentVolumeSource
};
