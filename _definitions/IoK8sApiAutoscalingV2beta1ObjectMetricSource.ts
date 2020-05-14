
import { IIoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { IIoK8sApiAutoscalingV2beta1CrossVersionObjectReference } from "./IoK8sApiAutoscalingV2beta1CrossVersionObjectReference.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta1ObjectMetricSource.ts";

/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export interface IIoK8sApiAutoscalingV2beta1ObjectMetricSource {
/**
 * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
 */
"averageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;
/**
 * metricName is the name of the metric in question.
 */
"metricName": string;
/**
 * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping When unset, just the metricName will be used to gather metrics.
 */
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
/**
 * target is the described Kubernetes object.
 */
"target": IIoK8sApiAutoscalingV2beta1CrossVersionObjectReference;
/**
 * targetValue is the target value of the metric (as a quantity).
 */
"targetValue": IIoK8sApimachineryPkgApiResourceQuantity;
}

/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export class IoK8sApiAutoscalingV2beta1ObjectMetricSource extends Model<IIoK8sApiAutoscalingV2beta1ObjectMetricSource> implements IIoK8sApiAutoscalingV2beta1ObjectMetricSource {

"averageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;

"metricName": string;

"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;

"target": IIoK8sApiAutoscalingV2beta1CrossVersionObjectReference;

"targetValue": IIoK8sApimachineryPkgApiResourceQuantity;
}

Model.setSchema(IoK8sApiAutoscalingV2beta1ObjectMetricSource, "io.k8s.api.autoscaling.v2beta1.ObjectMetricSource", addSchema);

export {
  IIoK8sApiAutoscalingV2beta1ObjectMetricSource as IObjectMetricSource,
  IoK8sApiAutoscalingV2beta1ObjectMetricSource as ObjectMetricSource
};
