
import { IIoK8sApiCoreV1ContainerStateRunning } from "./IoK8sApiCoreV1ContainerStateRunning.ts";

import { IIoK8sApiCoreV1ContainerStateTerminated } from "./IoK8sApiCoreV1ContainerStateTerminated.ts";

import { IIoK8sApiCoreV1ContainerStateWaiting } from "./IoK8sApiCoreV1ContainerStateWaiting.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ContainerState.ts";

/**
 * ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
 */
export interface IIoK8sApiCoreV1ContainerState {
/**
 * Details about a running container
 */
"running"?: IIoK8sApiCoreV1ContainerStateRunning;
/**
 * Details about a terminated container
 */
"terminated"?: IIoK8sApiCoreV1ContainerStateTerminated;
/**
 * Details about a waiting container
 */
"waiting"?: IIoK8sApiCoreV1ContainerStateWaiting;
}

/**
 * ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
 */
export class IoK8sApiCoreV1ContainerState extends Model<IIoK8sApiCoreV1ContainerState> implements IIoK8sApiCoreV1ContainerState {

"running"?: IIoK8sApiCoreV1ContainerStateRunning;

"terminated"?: IIoK8sApiCoreV1ContainerStateTerminated;

"waiting"?: IIoK8sApiCoreV1ContainerStateWaiting;
}

Model.setSchema(IoK8sApiCoreV1ContainerState, "io.k8s.api.core.v1.ContainerState", addSchema);

export {
  IIoK8sApiCoreV1ContainerState as IContainerState,
  IoK8sApiCoreV1ContainerState as ContainerState
};
