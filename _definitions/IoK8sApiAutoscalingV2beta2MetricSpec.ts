
import { IIoK8sApiAutoscalingV2beta2ExternalMetricSource } from "./IoK8sApiAutoscalingV2beta2ExternalMetricSource.ts";

import { IIoK8sApiAutoscalingV2beta2ObjectMetricSource } from "./IoK8sApiAutoscalingV2beta2ObjectMetricSource.ts";

import { IIoK8sApiAutoscalingV2beta2PodsMetricSource } from "./IoK8sApiAutoscalingV2beta2PodsMetricSource.ts";

import { IIoK8sApiAutoscalingV2beta2ResourceMetricSource } from "./IoK8sApiAutoscalingV2beta2ResourceMetricSource.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta2MetricSpec.ts";

/**
 * MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
 */
export interface IIoK8sApiAutoscalingV2beta2MetricSpec {
/**
 * external refers to a global metric that is not associated with any Kubernetes object. It allows autoscaling based on information coming from components running outside of cluster (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
 */
"external"?: IIoK8sApiAutoscalingV2beta2ExternalMetricSource;
/**
 * object refers to a metric describing a single kubernetes object (for example, hits-per-second on an Ingress object).
 */
"object"?: IIoK8sApiAutoscalingV2beta2ObjectMetricSource;
/**
 * pods refers to a metric describing each pod in the current scale target (for example, transactions-processed-per-second).  The values will be averaged together before being compared to the target value.
 */
"pods"?: IIoK8sApiAutoscalingV2beta2PodsMetricSource;
/**
 * resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
"resource"?: IIoK8sApiAutoscalingV2beta2ResourceMetricSource;
/**
 * type is the type of metric source.  It should be one of "Object", "Pods" or "Resource", each mapping to a matching field in the object.
 */
"type": string;
}

/**
 * MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
 */
export class IoK8sApiAutoscalingV2beta2MetricSpec extends Model<IIoK8sApiAutoscalingV2beta2MetricSpec> implements IIoK8sApiAutoscalingV2beta2MetricSpec {

"external"?: IIoK8sApiAutoscalingV2beta2ExternalMetricSource;

"object"?: IIoK8sApiAutoscalingV2beta2ObjectMetricSource;

"pods"?: IIoK8sApiAutoscalingV2beta2PodsMetricSource;

"resource"?: IIoK8sApiAutoscalingV2beta2ResourceMetricSource;

"type": string;
}

Model.setSchema(IoK8sApiAutoscalingV2beta2MetricSpec, "io.k8s.api.autoscaling.v2beta2.MetricSpec", addSchema);

export {
  IIoK8sApiAutoscalingV2beta2MetricSpec as IMetricSpec,
  IoK8sApiAutoscalingV2beta2MetricSpec as MetricSpec
};
