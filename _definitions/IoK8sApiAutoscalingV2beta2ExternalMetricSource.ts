
import { IIoK8sApiAutoscalingV2beta2MetricIdentifier } from "./IoK8sApiAutoscalingV2beta2MetricIdentifier.ts";

import { IIoK8sApiAutoscalingV2beta2MetricTarget } from "./IoK8sApiAutoscalingV2beta2MetricTarget.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta2ExternalMetricSource.ts";

/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
 */
export interface IIoK8sApiAutoscalingV2beta2ExternalMetricSource {
/**
 * metric identifies the target metric by name and selector
 */
"metric": IIoK8sApiAutoscalingV2beta2MetricIdentifier;
/**
 * target specifies the target value for the given metric
 */
"target": IIoK8sApiAutoscalingV2beta2MetricTarget;
}

/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
 */
export class IoK8sApiAutoscalingV2beta2ExternalMetricSource extends Model<IIoK8sApiAutoscalingV2beta2ExternalMetricSource> implements IIoK8sApiAutoscalingV2beta2ExternalMetricSource {

"metric": IIoK8sApiAutoscalingV2beta2MetricIdentifier;

"target": IIoK8sApiAutoscalingV2beta2MetricTarget;
}

Model.setSchema(IoK8sApiAutoscalingV2beta2ExternalMetricSource, "io.k8s.api.autoscaling.v2beta2.ExternalMetricSource", addSchema);

export {
  IIoK8sApiAutoscalingV2beta2ExternalMetricSource as IExternalMetricSource,
  IoK8sApiAutoscalingV2beta2ExternalMetricSource as ExternalMetricSource
};
