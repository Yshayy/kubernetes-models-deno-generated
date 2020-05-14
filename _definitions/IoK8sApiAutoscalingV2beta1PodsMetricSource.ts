
import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { IIoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta1PodsMetricSource.ts";

/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
export interface IIoK8sApiAutoscalingV2beta1PodsMetricSource {
/**
 * metricName is the name of the metric in question
 */
"metricName": string;
/**
 * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping When unset, just the metricName will be used to gather metrics.
 */
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
/**
 * targetAverageValue is the target value of the average of the metric across all relevant pods (as a quantity)
 */
"targetAverageValue": IIoK8sApimachineryPkgApiResourceQuantity;
}

/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
export class IoK8sApiAutoscalingV2beta1PodsMetricSource extends Model<IIoK8sApiAutoscalingV2beta1PodsMetricSource> implements IIoK8sApiAutoscalingV2beta1PodsMetricSource {

"metricName": string;

"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;

"targetAverageValue": IIoK8sApimachineryPkgApiResourceQuantity;
}

Model.setSchema(IoK8sApiAutoscalingV2beta1PodsMetricSource, "io.k8s.api.autoscaling.v2beta1.PodsMetricSource", addSchema);

export {
  IIoK8sApiAutoscalingV2beta1PodsMetricSource as IPodsMetricSource,
  IoK8sApiAutoscalingV2beta1PodsMetricSource as PodsMetricSource
};
