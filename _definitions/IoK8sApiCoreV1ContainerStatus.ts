
import { IIoK8sApiCoreV1ContainerState } from "./IoK8sApiCoreV1ContainerState.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ContainerStatus.ts";

/**
 * ContainerStatus contains details for the current status of this container.
 */
export interface IIoK8sApiCoreV1ContainerStatus {
/**
 * Container's ID in the format 'docker://<container_id>'.
 */
"containerID"?: string;
/**
 * The image the container is running. More info: https://kubernetes.io/docs/concepts/containers/images
 */
"image": string;
/**
 * ImageID of the container's image.
 */
"imageID": string;
/**
 * Details about the container's last termination condition.
 */
"lastState"?: IIoK8sApiCoreV1ContainerState;
/**
 * This must be a DNS_LABEL. Each container in a pod must have a unique name. Cannot be updated.
 */
"name": string;
/**
 * Specifies whether the container has passed its readiness probe.
 */
"ready": boolean;
/**
 * The number of times the container has been restarted, currently based on the number of dead containers that have not yet been removed. Note that this is calculated from dead containers. But those containers are subject to garbage collection. This value will get capped at 5 by GC.
 */
"restartCount": number;
/**
 * Specifies whether the container has passed its startup probe. Initialized as false, becomes true after startupProbe is considered successful. Resets to false when the container is restarted, or if kubelet loses state temporarily. Is always true when no startupProbe is defined.
 */
"started"?: boolean;
/**
 * Details about the container's current condition.
 */
"state"?: IIoK8sApiCoreV1ContainerState;
}

/**
 * ContainerStatus contains details for the current status of this container.
 */
export class IoK8sApiCoreV1ContainerStatus extends Model<IIoK8sApiCoreV1ContainerStatus> implements IIoK8sApiCoreV1ContainerStatus {

"containerID"?: string;

"image": string;

"imageID": string;

"lastState"?: IIoK8sApiCoreV1ContainerState;

"name": string;

"ready": boolean;

"restartCount": number;

"started"?: boolean;

"state"?: IIoK8sApiCoreV1ContainerState;
}

Model.setSchema(IoK8sApiCoreV1ContainerStatus, "io.k8s.api.core.v1.ContainerStatus", addSchema);

export {
  IIoK8sApiCoreV1ContainerStatus as IContainerStatus,
  IoK8sApiCoreV1ContainerStatus as ContainerStatus
};
