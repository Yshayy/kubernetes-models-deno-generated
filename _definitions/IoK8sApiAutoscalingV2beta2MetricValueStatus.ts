
import { IIoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta2MetricValueStatus.ts";

/**
 * MetricValueStatus holds the current value for a metric
 */
export interface IIoK8sApiAutoscalingV2beta2MetricValueStatus {
/**
 * currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.
 */
"averageUtilization"?: number;
/**
 * averageValue is the current value of the average of the metric across all relevant pods (as a quantity)
 */
"averageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;
/**
 * value is the current value of the metric (as a quantity).
 */
"value"?: IIoK8sApimachineryPkgApiResourceQuantity;
}

/**
 * MetricValueStatus holds the current value for a metric
 */
export class IoK8sApiAutoscalingV2beta2MetricValueStatus extends Model<IIoK8sApiAutoscalingV2beta2MetricValueStatus> implements IIoK8sApiAutoscalingV2beta2MetricValueStatus {

"averageUtilization"?: number;

"averageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;

"value"?: IIoK8sApimachineryPkgApiResourceQuantity;
}

Model.setSchema(IoK8sApiAutoscalingV2beta2MetricValueStatus, "io.k8s.api.autoscaling.v2beta2.MetricValueStatus", addSchema);

export {
  IIoK8sApiAutoscalingV2beta2MetricValueStatus as IMetricValueStatus,
  IoK8sApiAutoscalingV2beta2MetricValueStatus as MetricValueStatus
};
