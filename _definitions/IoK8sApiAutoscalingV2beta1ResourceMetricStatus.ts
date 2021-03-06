
import { IIoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta1ResourceMetricStatus.ts";

/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
export interface IIoK8sApiAutoscalingV2beta1ResourceMetricStatus {
/**
 * currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.  It will only be present if `targetAverageValue` was set in the corresponding metric specification.
 */
"currentAverageUtilization"?: number;
/**
 * currentAverageValue is the current value of the average of the resource metric across all relevant pods, as a raw value (instead of as a percentage of the request), similar to the "pods" metric source type. It will always be set, regardless of the corresponding metric specification.
 */
"currentAverageValue": IIoK8sApimachineryPkgApiResourceQuantity;
/**
 * name is the name of the resource in question.
 */
"name": string;
}

/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
export class IoK8sApiAutoscalingV2beta1ResourceMetricStatus extends Model<IIoK8sApiAutoscalingV2beta1ResourceMetricStatus> implements IIoK8sApiAutoscalingV2beta1ResourceMetricStatus {

"currentAverageUtilization"?: number;

"currentAverageValue": IIoK8sApimachineryPkgApiResourceQuantity;

"name": string;
}

Model.setSchema(IoK8sApiAutoscalingV2beta1ResourceMetricStatus, "io.k8s.api.autoscaling.v2beta1.ResourceMetricStatus", addSchema);

export {
  IIoK8sApiAutoscalingV2beta1ResourceMetricStatus as IResourceMetricStatus,
  IoK8sApiAutoscalingV2beta1ResourceMetricStatus as ResourceMetricStatus
};
