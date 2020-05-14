
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationReference.ts";

/**
 * PriorityLevelConfigurationReference contains information that points to the "request-priority" being used.
 */
export interface IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationReference {
/**
 * `name` is the name of the priority level configuration being referenced Required.
 */
"name": string;
}

/**
 * PriorityLevelConfigurationReference contains information that points to the "request-priority" being used.
 */
export class IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationReference extends Model<IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationReference> implements IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationReference {

"name": string;
}

Model.setSchema(IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationReference, "io.k8s.api.flowcontrol.v1alpha1.PriorityLevelConfigurationReference", addSchema);

export {
  IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationReference as IPriorityLevelConfigurationReference,
  IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationReference as PriorityLevelConfigurationReference
};
