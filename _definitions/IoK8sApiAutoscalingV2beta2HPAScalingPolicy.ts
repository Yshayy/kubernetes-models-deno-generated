
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta2HPAScalingPolicy.ts";

/**
 * HPAScalingPolicy is a single policy which must hold true for a specified past interval.
 */
export interface IIoK8sApiAutoscalingV2beta2HPAScalingPolicy {
/**
 * PeriodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
 */
"periodSeconds": number;
/**
 * Type is used to specify the scaling policy.
 */
"type": string;
/**
 * Value contains the amount of change which is permitted by the policy. It must be greater than zero
 */
"value": number;
}

/**
 * HPAScalingPolicy is a single policy which must hold true for a specified past interval.
 */
export class IoK8sApiAutoscalingV2beta2HPAScalingPolicy extends Model<IIoK8sApiAutoscalingV2beta2HPAScalingPolicy> implements IIoK8sApiAutoscalingV2beta2HPAScalingPolicy {

"periodSeconds": number;

"type": string;

"value": number;
}

Model.setSchema(IoK8sApiAutoscalingV2beta2HPAScalingPolicy, "io.k8s.api.autoscaling.v2beta2.HPAScalingPolicy", addSchema);

export {
  IIoK8sApiAutoscalingV2beta2HPAScalingPolicy as IHPAScalingPolicy,
  IoK8sApiAutoscalingV2beta2HPAScalingPolicy as HPAScalingPolicy
};
