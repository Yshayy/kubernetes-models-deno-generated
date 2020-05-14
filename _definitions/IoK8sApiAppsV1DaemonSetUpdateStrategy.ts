
import { IIoK8sApiAppsV1RollingUpdateDaemonSet } from "./IoK8sApiAppsV1RollingUpdateDaemonSet.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1DaemonSetUpdateStrategy.ts";

/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
export interface IIoK8sApiAppsV1DaemonSetUpdateStrategy {
/**
 * Rolling update config params. Present only if type = "RollingUpdate".
 */
"rollingUpdate"?: IIoK8sApiAppsV1RollingUpdateDaemonSet;
/**
 * Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate.
 */
"type"?: string;
}

/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
export class IoK8sApiAppsV1DaemonSetUpdateStrategy extends Model<IIoK8sApiAppsV1DaemonSetUpdateStrategy> implements IIoK8sApiAppsV1DaemonSetUpdateStrategy {

"rollingUpdate"?: IIoK8sApiAppsV1RollingUpdateDaemonSet;

"type"?: string;
}

Model.setSchema(IoK8sApiAppsV1DaemonSetUpdateStrategy, "io.k8s.api.apps.v1.DaemonSetUpdateStrategy", addSchema);

export {
  IIoK8sApiAppsV1DaemonSetUpdateStrategy as IDaemonSetUpdateStrategy,
  IoK8sApiAppsV1DaemonSetUpdateStrategy as DaemonSetUpdateStrategy
};
