
import { IIoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta1ResourceMetricSource.ts";

/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 */
export interface IIoK8sApiAutoscalingV2beta1ResourceMetricSource {
/**
 * name is the name of the resource in question.
 */
"name": string;
/**
 * targetAverageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.
 */
"targetAverageUtilization"?: number;
/**
 * targetAverageValue is the target value of the average of the resource metric across all relevant pods, as a raw value (instead of as a percentage of the request), similar to the "pods" metric source type.
 */
"targetAverageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;
}

/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 */
export class IoK8sApiAutoscalingV2beta1ResourceMetricSource extends Model<IIoK8sApiAutoscalingV2beta1ResourceMetricSource> implements IIoK8sApiAutoscalingV2beta1ResourceMetricSource {

"name": string;

"targetAverageUtilization"?: number;

"targetAverageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;
}

Model.setSchema(IoK8sApiAutoscalingV2beta1ResourceMetricSource, "io.k8s.api.autoscaling.v2beta1.ResourceMetricSource", addSchema);

export {
  IIoK8sApiAutoscalingV2beta1ResourceMetricSource as IResourceMetricSource,
  IoK8sApiAutoscalingV2beta1ResourceMetricSource as ResourceMetricSource
};
