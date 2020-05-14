
import { IIoK8sApiFlowcontrolV1alpha1FlowSchemaCondition } from "./IoK8sApiFlowcontrolV1alpha1FlowSchemaCondition.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiFlowcontrolV1alpha1FlowSchemaStatus.ts";

/**
 * FlowSchemaStatus represents the current state of a FlowSchema.
 */
export interface IIoK8sApiFlowcontrolV1alpha1FlowSchemaStatus {
/**
 * `conditions` is a list of the current states of FlowSchema.
 */
"conditions"?: Array<IIoK8sApiFlowcontrolV1alpha1FlowSchemaCondition>;
}

/**
 * FlowSchemaStatus represents the current state of a FlowSchema.
 */
export class IoK8sApiFlowcontrolV1alpha1FlowSchemaStatus extends Model<IIoK8sApiFlowcontrolV1alpha1FlowSchemaStatus> implements IIoK8sApiFlowcontrolV1alpha1FlowSchemaStatus {

"conditions"?: Array<IIoK8sApiFlowcontrolV1alpha1FlowSchemaCondition>;
}

Model.setSchema(IoK8sApiFlowcontrolV1alpha1FlowSchemaStatus, "io.k8s.api.flowcontrol.v1alpha1.FlowSchemaStatus", addSchema);

export {
  IIoK8sApiFlowcontrolV1alpha1FlowSchemaStatus as IFlowSchemaStatus,
  IoK8sApiFlowcontrolV1alpha1FlowSchemaStatus as FlowSchemaStatus
};
