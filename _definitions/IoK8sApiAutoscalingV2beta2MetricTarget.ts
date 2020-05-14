
import { IIoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta2MetricTarget.ts";

/**
 * MetricTarget defines the target value, average value, or average utilization of a specific metric
 */
export interface IIoK8sApiAutoscalingV2beta2MetricTarget {
/**
 * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
 */
"averageUtilization"?: number;
/**
 * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
 */
"averageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;
/**
 * type represents whether the metric type is Utilization, Value, or AverageValue
 */
"type": string;
/**
 * value is the target value of the metric (as a quantity).
 */
"value"?: IIoK8sApimachineryPkgApiResourceQuantity;
}

/**
 * MetricTarget defines the target value, average value, or average utilization of a specific metric
 */
export class IoK8sApiAutoscalingV2beta2MetricTarget extends Model<IIoK8sApiAutoscalingV2beta2MetricTarget> implements IIoK8sApiAutoscalingV2beta2MetricTarget {

"averageUtilization"?: number;

"averageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;

"type": string;

"value"?: IIoK8sApimachineryPkgApiResourceQuantity;
}

Model.setSchema(IoK8sApiAutoscalingV2beta2MetricTarget, "io.k8s.api.autoscaling.v2beta2.MetricTarget", addSchema);

export {
  IIoK8sApiAutoscalingV2beta2MetricTarget as IMetricTarget,
  IoK8sApiAutoscalingV2beta2MetricTarget as MetricTarget
};
