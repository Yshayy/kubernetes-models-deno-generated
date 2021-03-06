
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1NodeCondition.ts";

/**
 * NodeCondition contains condition information for a node.
 */
export interface IIoK8sApiCoreV1NodeCondition {
/**
 * Last time we got an update on a given condition.
 */
"lastHeartbeatTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * Last time the condition transit from one status to another.
 */
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * Human readable message indicating details about last transition.
 */
"message"?: string;
/**
 * (brief) reason for the condition's last transition.
 */
"reason"?: string;
/**
 * Status of the condition, one of True, False, Unknown.
 */
"status": string;
/**
 * Type of node condition.
 */
"type": string;
}

/**
 * NodeCondition contains condition information for a node.
 */
export class IoK8sApiCoreV1NodeCondition extends Model<IIoK8sApiCoreV1NodeCondition> implements IIoK8sApiCoreV1NodeCondition {

"lastHeartbeatTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

"message"?: string;

"reason"?: string;

"status": string;

"type": string;
}

Model.setSchema(IoK8sApiCoreV1NodeCondition, "io.k8s.api.core.v1.NodeCondition", addSchema);

export {
  IIoK8sApiCoreV1NodeCondition as INodeCondition,
  IoK8sApiCoreV1NodeCondition as NodeCondition
};
