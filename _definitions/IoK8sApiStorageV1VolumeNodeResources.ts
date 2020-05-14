
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiStorageV1VolumeNodeResources.ts";

/**
 * VolumeNodeResources is a set of resource limits for scheduling of volumes.
 */
export interface IIoK8sApiStorageV1VolumeNodeResources {
/**
 * Maximum number of unique volumes managed by the CSI driver that can be used on a node. A volume that is both attached and mounted on a node is considered to be used once, not twice. The same rule applies for a unique volume that is shared among multiple pods on the same node. If this field is not specified, then the supported number of volumes on this node is unbounded.
 */
"count"?: number;
}

/**
 * VolumeNodeResources is a set of resource limits for scheduling of volumes.
 */
export class IoK8sApiStorageV1VolumeNodeResources extends Model<IIoK8sApiStorageV1VolumeNodeResources> implements IIoK8sApiStorageV1VolumeNodeResources {

"count"?: number;
}

Model.setSchema(IoK8sApiStorageV1VolumeNodeResources, "io.k8s.api.storage.v1.VolumeNodeResources", addSchema);

export {
  IIoK8sApiStorageV1VolumeNodeResources as IVolumeNodeResources,
  IoK8sApiStorageV1VolumeNodeResources as VolumeNodeResources
};
