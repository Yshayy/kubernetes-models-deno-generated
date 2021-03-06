
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus.ts";

/**
 * current status of a horizontal pod autoscaler
 */
export interface IIoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus {
/**
 * current average CPU utilization over all pods, represented as a percentage of requested CPU, e.g. 70 means that an average pod is using now 70% of its requested CPU.
 */
"currentCPUUtilizationPercentage"?: number;
/**
 * current number of replicas of pods managed by this autoscaler.
 */
"currentReplicas": number;
/**
 * desired number of replicas of pods managed by this autoscaler.
 */
"desiredReplicas": number;
/**
 * last time the HorizontalPodAutoscaler scaled the number of pods; used by the autoscaler to control how often the number of pods is changed.
 */
"lastScaleTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * most recent generation observed by this autoscaler.
 */
"observedGeneration"?: number;
}

/**
 * current status of a horizontal pod autoscaler
 */
export class IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus extends Model<IIoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus> implements IIoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus {

"currentCPUUtilizationPercentage"?: number;

"currentReplicas": number;

"desiredReplicas": number;

"lastScaleTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

"observedGeneration"?: number;
}

Model.setSchema(IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus, "io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerStatus", addSchema);

export {
  IIoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus as IHorizontalPodAutoscalerStatus,
  IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus as HorizontalPodAutoscalerStatus
};
