
import { IIoK8sApiAppsV1RollingUpdateDeployment } from "./IoK8sApiAppsV1RollingUpdateDeployment.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1DeploymentStrategy.ts";

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export interface IIoK8sApiAppsV1DeploymentStrategy {
/**
 * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate.
 */
"rollingUpdate"?: IIoK8sApiAppsV1RollingUpdateDeployment;
/**
 * Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.
 */
"type"?: string;
}

/**
 * DeploymentStrategy describes how to replace existing pods with new ones.
 */
export class IoK8sApiAppsV1DeploymentStrategy extends Model<IIoK8sApiAppsV1DeploymentStrategy> implements IIoK8sApiAppsV1DeploymentStrategy {

"rollingUpdate"?: IIoK8sApiAppsV1RollingUpdateDeployment;

"type"?: string;
}

Model.setSchema(IoK8sApiAppsV1DeploymentStrategy, "io.k8s.api.apps.v1.DeploymentStrategy", addSchema);

export {
  IIoK8sApiAppsV1DeploymentStrategy as IDeploymentStrategy,
  IoK8sApiAppsV1DeploymentStrategy as DeploymentStrategy
};
