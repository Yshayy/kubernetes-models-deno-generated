
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ContainerStateRunning.ts";

/**
 * ContainerStateRunning is a running state of a container.
 */
export interface IIoK8sApiCoreV1ContainerStateRunning {
/**
 * Time at which the container was last (re-)started
 */
"startedAt"?: IIoK8sApimachineryPkgApisMetaV1Time;
}

/**
 * ContainerStateRunning is a running state of a container.
 */
export class IoK8sApiCoreV1ContainerStateRunning extends Model<IIoK8sApiCoreV1ContainerStateRunning> implements IIoK8sApiCoreV1ContainerStateRunning {

"startedAt"?: IIoK8sApimachineryPkgApisMetaV1Time;
}

Model.setSchema(IoK8sApiCoreV1ContainerStateRunning, "io.k8s.api.core.v1.ContainerStateRunning", addSchema);

export {
  IIoK8sApiCoreV1ContainerStateRunning as IContainerStateRunning,
  IoK8sApiCoreV1ContainerStateRunning as ContainerStateRunning
};
