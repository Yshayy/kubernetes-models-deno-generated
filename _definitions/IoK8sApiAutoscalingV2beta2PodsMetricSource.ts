
import { IIoK8sApiAutoscalingV2beta2MetricIdentifier } from "./IoK8sApiAutoscalingV2beta2MetricIdentifier.ts";

import { IIoK8sApiAutoscalingV2beta2MetricTarget } from "./IoK8sApiAutoscalingV2beta2MetricTarget.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta2PodsMetricSource.ts";

/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
export interface IIoK8sApiAutoscalingV2beta2PodsMetricSource {
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
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
export class IoK8sApiAutoscalingV2beta2PodsMetricSource extends Model<IIoK8sApiAutoscalingV2beta2PodsMetricSource> implements IIoK8sApiAutoscalingV2beta2PodsMetricSource {

"metric": IIoK8sApiAutoscalingV2beta2MetricIdentifier;

"target": IIoK8sApiAutoscalingV2beta2MetricTarget;
}

Model.setSchema(IoK8sApiAutoscalingV2beta2PodsMetricSource, "io.k8s.api.autoscaling.v2beta2.PodsMetricSource", addSchema);

export {
  IIoK8sApiAutoscalingV2beta2PodsMetricSource as IPodsMetricSource,
  IoK8sApiAutoscalingV2beta2PodsMetricSource as PodsMetricSource
};
