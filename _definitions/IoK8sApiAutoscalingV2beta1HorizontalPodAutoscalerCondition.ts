
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition.ts";

/**
 * HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
 */
export interface IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition {
/**
 * lastTransitionTime is the last time the condition transitioned from one status to another
 */
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * message is a human-readable explanation containing details about the transition
 */
"message"?: string;
/**
 * reason is the reason for the condition's last transition.
 */
"reason"?: string;
/**
 * status is the status of the condition (True, False, Unknown)
 */
"status": string;
/**
 * type describes the current condition
 */
"type": string;
}

/**
 * HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
 */
export class IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition extends Model<IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition> implements IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition {

"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

"message"?: string;

"reason"?: string;

"status": string;

"type": string;
}

Model.setSchema(IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition, "io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerCondition", addSchema);

export {
  IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition as IHorizontalPodAutoscalerCondition,
  IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition as HorizontalPodAutoscalerCondition
};
