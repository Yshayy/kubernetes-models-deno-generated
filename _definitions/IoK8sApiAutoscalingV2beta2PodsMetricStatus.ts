
import { IIoK8sApiAutoscalingV2beta2MetricValueStatus } from "./IoK8sApiAutoscalingV2beta2MetricValueStatus.ts";

import { IIoK8sApiAutoscalingV2beta2MetricIdentifier } from "./IoK8sApiAutoscalingV2beta2MetricIdentifier.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta2PodsMetricStatus.ts";

/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 */
export interface IIoK8sApiAutoscalingV2beta2PodsMetricStatus {
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
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 */
export class IoK8sApiAutoscalingV2beta2PodsMetricStatus extends Model<IIoK8sApiAutoscalingV2beta2PodsMetricStatus> implements IIoK8sApiAutoscalingV2beta2PodsMetricStatus {

"current": IIoK8sApiAutoscalingV2beta2MetricValueStatus;

"metric": IIoK8sApiAutoscalingV2beta2MetricIdentifier;
}

Model.setSchema(IoK8sApiAutoscalingV2beta2PodsMetricStatus, "io.k8s.api.autoscaling.v2beta2.PodsMetricStatus", addSchema);

export {
  IIoK8sApiAutoscalingV2beta2PodsMetricStatus as IPodsMetricStatus,
  IoK8sApiAutoscalingV2beta2PodsMetricStatus as PodsMetricStatus
};
