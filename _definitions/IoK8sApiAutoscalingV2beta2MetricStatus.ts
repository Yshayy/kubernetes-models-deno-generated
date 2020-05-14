
import { IIoK8sApiAutoscalingV2beta2ExternalMetricStatus } from "./IoK8sApiAutoscalingV2beta2ExternalMetricStatus.ts";

import { IIoK8sApiAutoscalingV2beta2ObjectMetricStatus } from "./IoK8sApiAutoscalingV2beta2ObjectMetricStatus.ts";

import { IIoK8sApiAutoscalingV2beta2PodsMetricStatus } from "./IoK8sApiAutoscalingV2beta2PodsMetricStatus.ts";

import { IIoK8sApiAutoscalingV2beta2ResourceMetricStatus } from "./IoK8sApiAutoscalingV2beta2ResourceMetricStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta2MetricStatus.ts";

/**
 * MetricStatus describes the last-read state of a single metric.
 */
export interface IIoK8sApiAutoscalingV2beta2MetricStatus {
/**
 * external refers to a global metric that is not associated with any Kubernetes object. It allows autoscaling based on information coming from components running outside of cluster (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
 */
"external"?: IIoK8sApiAutoscalingV2beta2ExternalMetricStatus;
/**
 * object refers to a metric describing a single kubernetes object (for example, hits-per-second on an Ingress object).
 */
"object"?: IIoK8sApiAutoscalingV2beta2ObjectMetricStatus;
/**
 * pods refers to a metric describing each pod in the current scale target (for example, transactions-processed-per-second).  The values will be averaged together before being compared to the target value.
 */
"pods"?: IIoK8sApiAutoscalingV2beta2PodsMetricStatus;
/**
 * resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
"resource"?: IIoK8sApiAutoscalingV2beta2ResourceMetricStatus;
/**
 * type is the type of metric source.  It will be one of "Object", "Pods" or "Resource", each corresponds to a matching field in the object.
 */
"type": string;
}

/**
 * MetricStatus describes the last-read state of a single metric.
 */
export class IoK8sApiAutoscalingV2beta2MetricStatus extends Model<IIoK8sApiAutoscalingV2beta2MetricStatus> implements IIoK8sApiAutoscalingV2beta2MetricStatus {

"external"?: IIoK8sApiAutoscalingV2beta2ExternalMetricStatus;

"object"?: IIoK8sApiAutoscalingV2beta2ObjectMetricStatus;

"pods"?: IIoK8sApiAutoscalingV2beta2PodsMetricStatus;

"resource"?: IIoK8sApiAutoscalingV2beta2ResourceMetricStatus;

"type": string;
}

Model.setSchema(IoK8sApiAutoscalingV2beta2MetricStatus, "io.k8s.api.autoscaling.v2beta2.MetricStatus", addSchema);

export {
  IIoK8sApiAutoscalingV2beta2MetricStatus as IMetricStatus,
  IoK8sApiAutoscalingV2beta2MetricStatus as MetricStatus
};
