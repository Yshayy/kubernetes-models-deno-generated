
import { IIoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1EmptyDirVolumeSource.ts";

/**
 * Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling.
 */
export interface IIoK8sApiCoreV1EmptyDirVolumeSource {
/**
 * What type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
 */
"medium"?: string;
/**
 * Total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir
 */
"sizeLimit"?: IIoK8sApimachineryPkgApiResourceQuantity;
}

/**
 * Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling.
 */
export class IoK8sApiCoreV1EmptyDirVolumeSource extends Model<IIoK8sApiCoreV1EmptyDirVolumeSource> implements IIoK8sApiCoreV1EmptyDirVolumeSource {

"medium"?: string;

"sizeLimit"?: IIoK8sApimachineryPkgApiResourceQuantity;
}

Model.setSchema(IoK8sApiCoreV1EmptyDirVolumeSource, "io.k8s.api.core.v1.EmptyDirVolumeSource", addSchema);

export {
  IIoK8sApiCoreV1EmptyDirVolumeSource as IEmptyDirVolumeSource,
  IoK8sApiCoreV1EmptyDirVolumeSource as EmptyDirVolumeSource
};
