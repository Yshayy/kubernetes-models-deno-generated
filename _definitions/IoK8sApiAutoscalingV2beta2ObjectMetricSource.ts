
import { IIoK8sApiAutoscalingV2beta2CrossVersionObjectReference } from "./IoK8sApiAutoscalingV2beta2CrossVersionObjectReference.ts";

import { IIoK8sApiAutoscalingV2beta2MetricIdentifier } from "./IoK8sApiAutoscalingV2beta2MetricIdentifier.ts";

import { IIoK8sApiAutoscalingV2beta2MetricTarget } from "./IoK8sApiAutoscalingV2beta2MetricTarget.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta2ObjectMetricSource.ts";

/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export interface IIoK8sApiAutoscalingV2beta2ObjectMetricSource {
"describedObject": IIoK8sApiAutoscalingV2beta2CrossVersionObjectReference;
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
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export class IoK8sApiAutoscalingV2beta2ObjectMetricSource extends Model<IIoK8sApiAutoscalingV2beta2ObjectMetricSource> implements IIoK8sApiAutoscalingV2beta2ObjectMetricSource {
"describedObject": IIoK8sApiAutoscalingV2beta2CrossVersionObjectReference;

"metric": IIoK8sApiAutoscalingV2beta2MetricIdentifier;

"target": IIoK8sApiAutoscalingV2beta2MetricTarget;
}

Model.setSchema(IoK8sApiAutoscalingV2beta2ObjectMetricSource, "io.k8s.api.autoscaling.v2beta2.ObjectMetricSource", addSchema);

export {
  IIoK8sApiAutoscalingV2beta2ObjectMetricSource as IObjectMetricSource,
  IoK8sApiAutoscalingV2beta2ObjectMetricSource as ObjectMetricSource
};
