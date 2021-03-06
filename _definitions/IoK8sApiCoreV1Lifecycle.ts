
import { IIoK8sApiCoreV1Handler } from "./IoK8sApiCoreV1Handler.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1Lifecycle.ts";

/**
 * Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
 */
export interface IIoK8sApiCoreV1Lifecycle {
/**
 * PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
 */
"postStart"?: IIoK8sApiCoreV1Handler;
/**
 * PreStop is called immediately before a container is terminated due to an API request or management event such as liveness/startup probe failure, preemption, resource contention, etc. The handler is not called if the container crashes or exits. The reason for termination is passed to the handler. The Pod's termination grace period countdown begins before the PreStop hooked is executed. Regardless of the outcome of the handler, the container will eventually terminate within the Pod's termination grace period. Other management of the container blocks until the hook completes or until the termination grace period is reached. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
 */
"preStop"?: IIoK8sApiCoreV1Handler;
}

/**
 * Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
 */
export class IoK8sApiCoreV1Lifecycle extends Model<IIoK8sApiCoreV1Lifecycle> implements IIoK8sApiCoreV1Lifecycle {

"postStart"?: IIoK8sApiCoreV1Handler;

"preStop"?: IIoK8sApiCoreV1Handler;
}

Model.setSchema(IoK8sApiCoreV1Lifecycle, "io.k8s.api.core.v1.Lifecycle", addSchema);

export {
  IIoK8sApiCoreV1Lifecycle as ILifecycle,
  IoK8sApiCoreV1Lifecycle as Lifecycle
};
