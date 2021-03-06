
import { IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition } from "./IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition.ts";

import { IIoK8sApiAutoscalingV2beta1MetricStatus } from "./IoK8sApiAutoscalingV2beta1MetricStatus.ts";

import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus.ts";

/**
 * HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
 */
export interface IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus {
/**
 * conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met.
 */
"conditions": Array<IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition>;
/**
 * currentMetrics is the last read state of the metrics used by this autoscaler.
 */
"currentMetrics"?: Array<IIoK8sApiAutoscalingV2beta1MetricStatus>;
/**
 * currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.
 */
"currentReplicas": number;
/**
 * desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
 */
"desiredReplicas": number;
/**
 * lastScaleTime is the last time the HorizontalPodAutoscaler scaled the number of pods, used by the autoscaler to control how often the number of pods is changed.
 */
"lastScaleTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * observedGeneration is the most recent generation observed by this autoscaler.
 */
"observedGeneration"?: number;
}

/**
 * HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
 */
export class IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus extends Model<IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus> implements IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus {

"conditions": Array<IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerCondition>;

"currentMetrics"?: Array<IIoK8sApiAutoscalingV2beta1MetricStatus>;

"currentReplicas": number;

"desiredReplicas": number;

"lastScaleTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

"observedGeneration"?: number;
}

Model.setSchema(IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus, "io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerStatus", addSchema);

export {
  IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus as IHorizontalPodAutoscalerStatus,
  IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus as HorizontalPodAutoscalerStatus
};
