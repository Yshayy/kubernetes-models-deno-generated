
import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { IIoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta1ExternalMetricSource.ts";

/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). Exactly one "target" type should be set.
 */
export interface IIoK8sApiAutoscalingV2beta1ExternalMetricSource {
/**
 * metricName is the name of the metric in question.
 */
"metricName": string;
/**
 * metricSelector is used to identify a specific time series within a given metric.
 */
"metricSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
/**
 * targetAverageValue is the target per-pod value of global metric (as a quantity). Mutually exclusive with TargetValue.
 */
"targetAverageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;
/**
 * targetValue is the target value of the metric (as a quantity). Mutually exclusive with TargetAverageValue.
 */
"targetValue"?: IIoK8sApimachineryPkgApiResourceQuantity;
}

/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). Exactly one "target" type should be set.
 */
export class IoK8sApiAutoscalingV2beta1ExternalMetricSource extends Model<IIoK8sApiAutoscalingV2beta1ExternalMetricSource> implements IIoK8sApiAutoscalingV2beta1ExternalMetricSource {

"metricName": string;

"metricSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;

"targetAverageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;

"targetValue"?: IIoK8sApimachineryPkgApiResourceQuantity;
}

Model.setSchema(IoK8sApiAutoscalingV2beta1ExternalMetricSource, "io.k8s.api.autoscaling.v2beta1.ExternalMetricSource", addSchema);

export {
  IIoK8sApiAutoscalingV2beta1ExternalMetricSource as IExternalMetricSource,
  IoK8sApiAutoscalingV2beta1ExternalMetricSource as ExternalMetricSource
};
