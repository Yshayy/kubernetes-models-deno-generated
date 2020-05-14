
import { IIoK8sApiAutoscalingV2beta2MetricValueStatus } from "./IoK8sApiAutoscalingV2beta2MetricValueStatus.ts";

import { IIoK8sApiAutoscalingV2beta2MetricIdentifier } from "./IoK8sApiAutoscalingV2beta2MetricIdentifier.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta2ExternalMetricStatus.ts";

/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
export interface IIoK8sApiAutoscalingV2beta2ExternalMetricStatus {
/**
 * current contains the current value for the given metric
 */
"current": IIoK8sApiAutoscalingV2beta2MetricValueStatus;
/**
 * metric identifies the target metric by name and selector
 */
"metric": IIoK8sApiAutoscalingV2beta2MetricIdentifier;
}

/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
export class IoK8sApiAutoscalingV2beta2ExternalMetricStatus extends Model<IIoK8sApiAutoscalingV2beta2ExternalMetricStatus> implements IIoK8sApiAutoscalingV2beta2ExternalMetricStatus {

"current": IIoK8sApiAutoscalingV2beta2MetricValueStatus;

"metric": IIoK8sApiAutoscalingV2beta2MetricIdentifier;
}

Model.setSchema(IoK8sApiAutoscalingV2beta2ExternalMetricStatus, "io.k8s.api.autoscaling.v2beta2.ExternalMetricStatus", addSchema);

export {
  IIoK8sApiAutoscalingV2beta2ExternalMetricStatus as IExternalMetricStatus,
  IoK8sApiAutoscalingV2beta2ExternalMetricStatus as ExternalMetricStatus
};
