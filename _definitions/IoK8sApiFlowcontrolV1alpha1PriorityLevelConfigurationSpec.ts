
import { IIoK8sApiFlowcontrolV1alpha1LimitedPriorityLevelConfiguration } from "./IoK8sApiFlowcontrolV1alpha1LimitedPriorityLevelConfiguration.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationSpec.ts";

/**
 * PriorityLevelConfigurationSpec specifies the configuration of a priority level.
 */
export interface IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationSpec {
/**
 * `limited` specifies how requests are handled for a Limited priority level. This field must be non-empty if and only if `type` is `"Limited"`.
 */
"limited"?: IIoK8sApiFlowcontrolV1alpha1LimitedPriorityLevelConfiguration;
/**
 * `type` indicates whether this priority level is subject to limitation on request execution.  A value of `"Exempt"` means that requests of this priority level are not subject to a limit (and thus are never queued) and do not detract from the capacity made available to other priority levels.  A value of `"Limited"` means that (a) requests of this priority level _are_ subject to limits and (b) some of the server's limited capacity is made available exclusively to this priority level. Required.
 */
"type": string;
}

/**
 * PriorityLevelConfigurationSpec specifies the configuration of a priority level.
 */
export class IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationSpec extends Model<IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationSpec> implements IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationSpec {

"limited"?: IIoK8sApiFlowcontrolV1alpha1LimitedPriorityLevelConfiguration;

"type": string;
}

Model.setSchema(IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationSpec, "io.k8s.api.flowcontrol.v1alpha1.PriorityLevelConfigurationSpec", addSchema);

export {
  IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationSpec as IPriorityLevelConfigurationSpec,
  IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationSpec as PriorityLevelConfigurationSpec
};
