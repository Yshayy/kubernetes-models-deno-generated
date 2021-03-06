
import { IIoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta1PodsMetricStatus.ts";

/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 */
export interface IIoK8sApiAutoscalingV2beta1PodsMetricStatus {
/**
 * currentAverageValue is the current value of the average of the metric across all relevant pods (as a quantity)
 */
"currentAverageValue": IIoK8sApimachineryPkgApiResourceQuantity;
/**
 * metricName is the name of the metric in question
 */
"metricName": string;
/**
 * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set in the PodsMetricSource, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics.
 */
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
}

/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 */
export class IoK8sApiAutoscalingV2beta1PodsMetricStatus extends Model<IIoK8sApiAutoscalingV2beta1PodsMetricStatus> implements IIoK8sApiAutoscalingV2beta1PodsMetricStatus {

"currentAverageValue": IIoK8sApimachineryPkgApiResourceQuantity;

"metricName": string;

"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
}

Model.setSchema(IoK8sApiAutoscalingV2beta1PodsMetricStatus, "io.k8s.api.autoscaling.v2beta1.PodsMetricStatus", addSchema);

export {
  IIoK8sApiAutoscalingV2beta1PodsMetricStatus as IPodsMetricStatus,
  IoK8sApiAutoscalingV2beta1PodsMetricStatus as PodsMetricStatus
};
