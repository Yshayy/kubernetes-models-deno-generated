
import { IIoK8sApiAutoscalingV2beta2MetricValueStatus } from "./IoK8sApiAutoscalingV2beta2MetricValueStatus.ts";

import { IIoK8sApiAutoscalingV2beta2CrossVersionObjectReference } from "./IoK8sApiAutoscalingV2beta2CrossVersionObjectReference.ts";

import { IIoK8sApiAutoscalingV2beta2MetricIdentifier } from "./IoK8sApiAutoscalingV2beta2MetricIdentifier.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta2ObjectMetricStatus.ts";

/**
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export interface IIoK8sApiAutoscalingV2beta2ObjectMetricStatus {
/**
 * current contains the current value for the given metric
 */
"current": IIoK8sApiAutoscalingV2beta2MetricValueStatus;
"describedObject": IIoK8sApiAutoscalingV2beta2CrossVersionObjectReference;
/**
 * metric identifies the target metric by name and selector
 */
"metric": IIoK8sApiAutoscalingV2beta2MetricIdentifier;
}

/**
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export class IoK8sApiAutoscalingV2beta2ObjectMetricStatus extends Model<IIoK8sApiAutoscalingV2beta2ObjectMetricStatus> implements IIoK8sApiAutoscalingV2beta2ObjectMetricStatus {

"current": IIoK8sApiAutoscalingV2beta2MetricValueStatus;
"describedObject": IIoK8sApiAutoscalingV2beta2CrossVersionObjectReference;

"metric": IIoK8sApiAutoscalingV2beta2MetricIdentifier;
}

Model.setSchema(IoK8sApiAutoscalingV2beta2ObjectMetricStatus, "io.k8s.api.autoscaling.v2beta2.ObjectMetricStatus", addSchema);

export {
  IIoK8sApiAutoscalingV2beta2ObjectMetricStatus as IObjectMetricStatus,
  IoK8sApiAutoscalingV2beta2ObjectMetricStatus as ObjectMetricStatus
};
