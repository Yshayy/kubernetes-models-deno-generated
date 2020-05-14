
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ContainerStateWaiting.ts";

/**
 * ContainerStateWaiting is a waiting state of a container.
 */
export interface IIoK8sApiCoreV1ContainerStateWaiting {
/**
 * Message regarding why the container is not yet running.
 */
"message"?: string;
/**
 * (brief) reason the container is not yet running.
 */
"reason"?: string;
}

/**
 * ContainerStateWaiting is a waiting state of a container.
 */
export class IoK8sApiCoreV1ContainerStateWaiting extends Model<IIoK8sApiCoreV1ContainerStateWaiting> implements IIoK8sApiCoreV1ContainerStateWaiting {

"message"?: string;

"reason"?: string;
}

Model.setSchema(IoK8sApiCoreV1ContainerStateWaiting, "io.k8s.api.core.v1.ContainerStateWaiting", addSchema);

export {
  IIoK8sApiCoreV1ContainerStateWaiting as IContainerStateWaiting,
  IoK8sApiCoreV1ContainerStateWaiting as ContainerStateWaiting
};
