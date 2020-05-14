
import { IIoK8sApiAutoscalingV2beta2MetricTarget } from "./IoK8sApiAutoscalingV2beta2MetricTarget.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta2ResourceMetricSource.ts";

/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 */
export interface IIoK8sApiAutoscalingV2beta2ResourceMetricSource {
/**
 * name is the name of the resource in question.
 */
"name": string;
/**
 * target specifies the target value for the given metric
 */
"target": IIoK8sApiAutoscalingV2beta2MetricTarget;
}

/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 */
export class IoK8sApiAutoscalingV2beta2ResourceMetricSource extends Model<IIoK8sApiAutoscalingV2beta2ResourceMetricSource> implements IIoK8sApiAutoscalingV2beta2ResourceMetricSource {

"name": string;

"target": IIoK8sApiAutoscalingV2beta2MetricTarget;
}

Model.setSchema(IoK8sApiAutoscalingV2beta2ResourceMetricSource, "io.k8s.api.autoscaling.v2beta2.ResourceMetricSource", addSchema);

export {
  IIoK8sApiAutoscalingV2beta2ResourceMetricSource as IResourceMetricSource,
  IoK8sApiAutoscalingV2beta2ResourceMetricSource as ResourceMetricSource
};
