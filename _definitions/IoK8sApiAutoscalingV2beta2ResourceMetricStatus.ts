
import { IIoK8sApiAutoscalingV2beta2MetricValueStatus } from "./IoK8sApiAutoscalingV2beta2MetricValueStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta2ResourceMetricStatus.ts";

/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
export interface IIoK8sApiAutoscalingV2beta2ResourceMetricStatus {
/**
 * current contains the current value for the given metric
 */
"current": IIoK8sApiAutoscalingV2beta2MetricValueStatus;
/**
 * Name is the name of the resource in question.
 */
"name": string;
}

/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
export class IoK8sApiAutoscalingV2beta2ResourceMetricStatus extends Model<IIoK8sApiAutoscalingV2beta2ResourceMetricStatus> implements IIoK8sApiAutoscalingV2beta2ResourceMetricStatus {

"current": IIoK8sApiAutoscalingV2beta2MetricValueStatus;

"name": string;
}

Model.setSchema(IoK8sApiAutoscalingV2beta2ResourceMetricStatus, "io.k8s.api.autoscaling.v2beta2.ResourceMetricStatus", addSchema);

export {
  IIoK8sApiAutoscalingV2beta2ResourceMetricStatus as IResourceMetricStatus,
  IoK8sApiAutoscalingV2beta2ResourceMetricStatus as ResourceMetricStatus
};
