
import { IIoK8sApiAutoscalingV1CrossVersionObjectReference } from "./IoK8sApiAutoscalingV1CrossVersionObjectReference.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec.ts";

/**
 * specification of a horizontal pod autoscaler.
 */
export interface IIoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec {
/**
 * upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas.
 */
"maxReplicas": number;
/**
 * minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down.  It defaults to 1 pod.  minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured.  Scaling is active as long as at least one metric value is available.
 */
"minReplicas"?: number;
/**
 * reference to scaled resource; horizontal pod autoscaler will learn the current resource consumption and will set the desired number of pods by using its Scale subresource.
 */
"scaleTargetRef": IIoK8sApiAutoscalingV1CrossVersionObjectReference;
/**
 * target average CPU utilization (represented as a percentage of requested CPU) over all the pods; if not specified the default autoscaling policy will be used.
 */
"targetCPUUtilizationPercentage"?: number;
}

/**
 * specification of a horizontal pod autoscaler.
 */
export class IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec extends Model<IIoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec> implements IIoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec {

"maxReplicas": number;

"minReplicas"?: number;

"scaleTargetRef": IIoK8sApiAutoscalingV1CrossVersionObjectReference;

"targetCPUUtilizationPercentage"?: number;
}

Model.setSchema(IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec, "io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerSpec", addSchema);

export {
  IIoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec as IHorizontalPodAutoscalerSpec,
  IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec as HorizontalPodAutoscalerSpec
};
