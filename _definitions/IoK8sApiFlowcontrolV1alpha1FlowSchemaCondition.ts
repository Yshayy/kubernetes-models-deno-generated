
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiFlowcontrolV1alpha1FlowSchemaCondition.ts";

/**
 * FlowSchemaCondition describes conditions for a FlowSchema.
 */
export interface IIoK8sApiFlowcontrolV1alpha1FlowSchemaCondition {
/**
 * `lastTransitionTime` is the last time the condition transitioned from one status to another.
 */
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * `message` is a human-readable message indicating details about last transition.
 */
"message"?: string;
/**
 * `reason` is a unique, one-word, CamelCase reason for the condition's last transition.
 */
"reason"?: string;
/**
 * `status` is the status of the condition. Can be True, False, Unknown. Required.
 */
"status"?: string;
/**
 * `type` is the type of the condition. Required.
 */
"type"?: string;
}

/**
 * FlowSchemaCondition describes conditions for a FlowSchema.
 */
export class IoK8sApiFlowcontrolV1alpha1FlowSchemaCondition extends Model<IIoK8sApiFlowcontrolV1alpha1FlowSchemaCondition> implements IIoK8sApiFlowcontrolV1alpha1FlowSchemaCondition {

"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

"message"?: string;

"reason"?: string;

"status"?: string;

"type"?: string;
}

Model.setSchema(IoK8sApiFlowcontrolV1alpha1FlowSchemaCondition, "io.k8s.api.flowcontrol.v1alpha1.FlowSchemaCondition", addSchema);

export {
  IIoK8sApiFlowcontrolV1alpha1FlowSchemaCondition as IFlowSchemaCondition,
  IoK8sApiFlowcontrolV1alpha1FlowSchemaCondition as FlowSchemaCondition
};
