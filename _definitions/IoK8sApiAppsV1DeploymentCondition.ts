
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1DeploymentCondition.ts";

/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export interface IIoK8sApiAppsV1DeploymentCondition {
/**
 * Last time the condition transitioned from one status to another.
 */
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * The last time this condition was updated.
 */
"lastUpdateTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * A human readable message indicating details about the transition.
 */
"message"?: string;
/**
 * The reason for the condition's last transition.
 */
"reason"?: string;
/**
 * Status of the condition, one of True, False, Unknown.
 */
"status": string;
/**
 * Type of deployment condition.
 */
"type": string;
}

/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export class IoK8sApiAppsV1DeploymentCondition extends Model<IIoK8sApiAppsV1DeploymentCondition> implements IIoK8sApiAppsV1DeploymentCondition {

"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

"lastUpdateTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

"message"?: string;

"reason"?: string;

"status": string;

"type": string;
}

Model.setSchema(IoK8sApiAppsV1DeploymentCondition, "io.k8s.api.apps.v1.DeploymentCondition", addSchema);

export {
  IIoK8sApiAppsV1DeploymentCondition as IDeploymentCondition,
  IoK8sApiAppsV1DeploymentCondition as DeploymentCondition
};
