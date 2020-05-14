
import { IIoK8sApiCoreV1SecretReference } from "./IoK8sApiCoreV1SecretReference.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1CephFSPersistentVolumeSource.ts";

/**
 * Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
 */
export interface IIoK8sApiCoreV1CephFSPersistentVolumeSource {
/**
 * Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
 */
"monitors": Array<string>;
/**
 * Optional: Used as the mounted root, rather than the full Ceph tree, default is /
 */
"path"?: string;
/**
 * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
 */
"readOnly"?: boolean;
/**
 * Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
 */
"secretFile"?: string;
/**
 * Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
 */
"secretRef"?: IIoK8sApiCoreV1SecretReference;
/**
 * Optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
 */
"user"?: string;
}

/**
 * Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
 */
export class IoK8sApiCoreV1CephFSPersistentVolumeSource extends Model<IIoK8sApiCoreV1CephFSPersistentVolumeSource> implements IIoK8sApiCoreV1CephFSPersistentVolumeSource {

"monitors": Array<string>;

"path"?: string;

"readOnly"?: boolean;

"secretFile"?: string;

"secretRef"?: IIoK8sApiCoreV1SecretReference;

"user"?: string;
}

Model.setSchema(IoK8sApiCoreV1CephFSPersistentVolumeSource, "io.k8s.api.core.v1.CephFSPersistentVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1CephFSPersistentVolumeSource as ICephFSPersistentVolumeSource,
  IoK8sApiCoreV1CephFSPersistentVolumeSource as CephFSPersistentVolumeSource
};
