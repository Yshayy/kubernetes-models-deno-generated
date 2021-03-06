
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV1ScaleStatus.ts";

/**
 * ScaleStatus represents the current status of a scale subresource.
 */
export interface IIoK8sApiAutoscalingV1ScaleStatus {
/**
 * actual number of observed instances of the scaled object.
 */
"replicas": number;
/**
 * label query over pods that should match the replicas count. This is same as the label selector but in the string format to avoid introspection by clients. The string will be in the same format as the query-param syntax. More info about label selectors: http://kubernetes.io/docs/user-guide/labels#label-selectors
 */
"selector"?: string;
}

/**
 * ScaleStatus represents the current status of a scale subresource.
 */
export class IoK8sApiAutoscalingV1ScaleStatus extends Model<IIoK8sApiAutoscalingV1ScaleStatus> implements IIoK8sApiAutoscalingV1ScaleStatus {

"replicas": number;

"selector"?: string;
}

Model.setSchema(IoK8sApiAutoscalingV1ScaleStatus, "io.k8s.api.autoscaling.v1.ScaleStatus", addSchema);

export {
  IIoK8sApiAutoscalingV1ScaleStatus as IScaleStatus,
  IoK8sApiAutoscalingV1ScaleStatus as ScaleStatus
};
