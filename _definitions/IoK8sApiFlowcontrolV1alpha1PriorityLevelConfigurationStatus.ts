
import { IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationCondition } from "./IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationCondition.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationStatus.ts";

/**
 * PriorityLevelConfigurationStatus represents the current state of a "request-priority".
 */
export interface IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationStatus {
/**
 * `conditions` is the current state of "request-priority".
 */
"conditions"?: Array<IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationCondition>;
}

/**
 * PriorityLevelConfigurationStatus represents the current state of a "request-priority".
 */
export class IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationStatus extends Model<IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationStatus> implements IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationStatus {

"conditions"?: Array<IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationCondition>;
}

Model.setSchema(IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationStatus, "io.k8s.api.flowcontrol.v1alpha1.PriorityLevelConfigurationStatus", addSchema);

export {
  IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationStatus as IPriorityLevelConfigurationStatus,
  IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationStatus as PriorityLevelConfigurationStatus
};
