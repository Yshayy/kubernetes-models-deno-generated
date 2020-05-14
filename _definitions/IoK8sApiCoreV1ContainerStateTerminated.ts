
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ContainerStateTerminated.ts";

/**
 * ContainerStateTerminated is a terminated state of a container.
 */
export interface IIoK8sApiCoreV1ContainerStateTerminated {
/**
 * Container's ID in the format 'docker://<container_id>'
 */
"containerID"?: string;
/**
 * Exit status from the last termination of the container
 */
"exitCode": number;
/**
 * Time at which the container last terminated
 */
"finishedAt"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * Message regarding the last termination of the container
 */
"message"?: string;
/**
 * (brief) reason from the last termination of the container
 */
"reason"?: string;
/**
 * Signal from the last termination of the container
 */
"signal"?: number;
/**
 * Time at which previous execution of the container started
 */
"startedAt"?: IIoK8sApimachineryPkgApisMetaV1Time;
}

/**
 * ContainerStateTerminated is a terminated state of a container.
 */
export class IoK8sApiCoreV1ContainerStateTerminated extends Model<IIoK8sApiCoreV1ContainerStateTerminated> implements IIoK8sApiCoreV1ContainerStateTerminated {

"containerID"?: string;

"exitCode": number;

"finishedAt"?: IIoK8sApimachineryPkgApisMetaV1Time;

"message"?: string;

"reason"?: string;

"signal"?: number;

"startedAt"?: IIoK8sApimachineryPkgApisMetaV1Time;
}

Model.setSchema(IoK8sApiCoreV1ContainerStateTerminated, "io.k8s.api.core.v1.ContainerStateTerminated", addSchema);

export {
  IIoK8sApiCoreV1ContainerStateTerminated as IContainerStateTerminated,
  IoK8sApiCoreV1ContainerStateTerminated as ContainerStateTerminated
};
