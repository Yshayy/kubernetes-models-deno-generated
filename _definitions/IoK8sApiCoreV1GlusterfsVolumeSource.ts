
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1GlusterfsVolumeSource.ts";

/**
 * Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
 */
export interface IIoK8sApiCoreV1GlusterfsVolumeSource {
/**
 * EndpointsName is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
 */
"endpoints": string;
/**
 * Path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
 */
"path": string;
/**
 * ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
 */
"readOnly"?: boolean;
}

/**
 * Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
 */
export class IoK8sApiCoreV1GlusterfsVolumeSource extends Model<IIoK8sApiCoreV1GlusterfsVolumeSource> implements IIoK8sApiCoreV1GlusterfsVolumeSource {

"endpoints": string;

"path": string;

"readOnly"?: boolean;
}

Model.setSchema(IoK8sApiCoreV1GlusterfsVolumeSource, "io.k8s.api.core.v1.GlusterfsVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1GlusterfsVolumeSource as IGlusterfsVolumeSource,
  IoK8sApiCoreV1GlusterfsVolumeSource as GlusterfsVolumeSource
};
