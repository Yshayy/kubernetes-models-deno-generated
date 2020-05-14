
import { IIoK8sApiAutoscalingV2beta2HPAScalingPolicy } from "./IoK8sApiAutoscalingV2beta2HPAScalingPolicy.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta2HPAScalingRules.ts";

/**
 * HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen.
 */
export interface IIoK8sApiAutoscalingV2beta2HPAScalingRules {
/**
 * policies is a list of potential scaling polices which can be used during scaling. At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid
 */
"policies"?: Array<IIoK8sApiAutoscalingV2beta2HPAScalingPolicy>;
/**
 * selectPolicy is used to specify which policy should be used. If not set, the default value MaxPolicySelect is used.
 */
"selectPolicy"?: string;
/**
 * StabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).
 */
"stabilizationWindowSeconds"?: number;
}

/**
 * HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen.
 */
export class IoK8sApiAutoscalingV2beta2HPAScalingRules extends Model<IIoK8sApiAutoscalingV2beta2HPAScalingRules> implements IIoK8sApiAutoscalingV2beta2HPAScalingRules {

"policies"?: Array<IIoK8sApiAutoscalingV2beta2HPAScalingPolicy>;

"selectPolicy"?: string;

"stabilizationWindowSeconds"?: number;
}

Model.setSchema(IoK8sApiAutoscalingV2beta2HPAScalingRules, "io.k8s.api.autoscaling.v2beta2.HPAScalingRules", addSchema);

export {
  IIoK8sApiAutoscalingV2beta2HPAScalingRules as IHPAScalingRules,
  IoK8sApiAutoscalingV2beta2HPAScalingRules as HPAScalingRules
};
