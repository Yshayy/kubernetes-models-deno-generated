
import { IIoK8sApiAutoscalingV2beta2HPAScalingRules } from "./IoK8sApiAutoscalingV2beta2HPAScalingRules.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerBehavior.ts";

/**
 * HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively).
 */
export interface IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerBehavior {
/**
 * scaleDown is scaling policy for scaling Down. If not set, the default value is to allow to scale down to minReplicas pods, with a 300 second stabilization window (i.e., the highest recommendation for the last 300sec is used).
 */
"scaleDown"?: IIoK8sApiAutoscalingV2beta2HPAScalingRules;
/**
 * scaleUp is scaling policy for scaling Up. If not set, the default value is the higher of:
 *   \* increase no more than 4 pods per 60 seconds
 *   \* double the number of pods per 60 seconds
 * No stabilization is used.
 */
"scaleUp"?: IIoK8sApiAutoscalingV2beta2HPAScalingRules;
}

/**
 * HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively).
 */
export class IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerBehavior extends Model<IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerBehavior> implements IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerBehavior {

"scaleDown"?: IIoK8sApiAutoscalingV2beta2HPAScalingRules;

"scaleUp"?: IIoK8sApiAutoscalingV2beta2HPAScalingRules;
}

Model.setSchema(IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerBehavior, "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerBehavior", addSchema);

export {
  IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerBehavior as IHorizontalPodAutoscalerBehavior,
  IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerBehavior as HorizontalPodAutoscalerBehavior
};
