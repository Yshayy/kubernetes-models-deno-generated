
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1NFSVolumeSource.ts";

/**
 * Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.
 */
export interface IIoK8sApiCoreV1NFSVolumeSource {
/**
 * Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
 */
"path": string;
/**
 * ReadOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
 */
"readOnly"?: boolean;
/**
 * Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
 */
"server": string;
}

/**
 * Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.
 */
export class IoK8sApiCoreV1NFSVolumeSource extends Model<IIoK8sApiCoreV1NFSVolumeSource> implements IIoK8sApiCoreV1NFSVolumeSource {

"path": string;

"readOnly"?: boolean;

"server": string;
}

Model.setSchema(IoK8sApiCoreV1NFSVolumeSource, "io.k8s.api.core.v1.NFSVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1NFSVolumeSource as INFSVolumeSource,
  IoK8sApiCoreV1NFSVolumeSource as NFSVolumeSource
};
