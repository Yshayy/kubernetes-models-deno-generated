
import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta2MetricIdentifier.ts";

/**
 * MetricIdentifier defines the name and optionally selector for a metric
 */
export interface IIoK8sApiAutoscalingV2beta2MetricIdentifier {
/**
 * name is the name of the given metric
 */
"name": string;
/**
 * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics.
 */
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
}

/**
 * MetricIdentifier defines the name and optionally selector for a metric
 */
export class IoK8sApiAutoscalingV2beta2MetricIdentifier extends Model<IIoK8sApiAutoscalingV2beta2MetricIdentifier> implements IIoK8sApiAutoscalingV2beta2MetricIdentifier {

"name": string;

"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
}

Model.setSchema(IoK8sApiAutoscalingV2beta2MetricIdentifier, "io.k8s.api.autoscaling.v2beta2.MetricIdentifier", addSchema);

export {
  IIoK8sApiAutoscalingV2beta2MetricIdentifier as IMetricIdentifier,
  IoK8sApiAutoscalingV2beta2MetricIdentifier as MetricIdentifier
};
