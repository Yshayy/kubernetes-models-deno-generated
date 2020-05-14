
import { IIoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta1ExternalMetricStatus.ts";

/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
export interface IIoK8sApiAutoscalingV2beta1ExternalMetricStatus {
/**
 * currentAverageValue is the current value of metric averaged over autoscaled pods.
 */
"currentAverageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;
/**
 * currentValue is the current value of the metric (as a quantity)
 */
"currentValue": IIoK8sApimachineryPkgApiResourceQuantity;
/**
 * metricName is the name of a metric used for autoscaling in metric system.
 */
"metricName": string;
/**
 * metricSelector is used to identify a specific time series within a given metric.
 */
"metricSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
}

/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
export class IoK8sApiAutoscalingV2beta1ExternalMetricStatus extends Model<IIoK8sApiAutoscalingV2beta1ExternalMetricStatus> implements IIoK8sApiAutoscalingV2beta1ExternalMetricStatus {

"currentAverageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;

"currentValue": IIoK8sApimachineryPkgApiResourceQuantity;

"metricName": string;

"metricSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
}

Model.setSchema(IoK8sApiAutoscalingV2beta1ExternalMetricStatus, "io.k8s.api.autoscaling.v2beta1.ExternalMetricStatus", addSchema);

export {
  IIoK8sApiAutoscalingV2beta1ExternalMetricStatus as IExternalMetricStatus,
  IoK8sApiAutoscalingV2beta1ExternalMetricStatus as ExternalMetricStatus
};
