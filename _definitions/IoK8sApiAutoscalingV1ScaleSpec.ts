
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV1ScaleSpec.ts";

/**
 * ScaleSpec describes the attributes of a scale subresource.
 */
export interface IIoK8sApiAutoscalingV1ScaleSpec {
/**
 * desired number of instances for the scaled object.
 */
"replicas"?: number;
}

/**
 * ScaleSpec describes the attributes of a scale subresource.
 */
export class IoK8sApiAutoscalingV1ScaleSpec extends Model<IIoK8sApiAutoscalingV1ScaleSpec> implements IIoK8sApiAutoscalingV1ScaleSpec {

"replicas"?: number;
}

Model.setSchema(IoK8sApiAutoscalingV1ScaleSpec, "io.k8s.api.autoscaling.v1.ScaleSpec", addSchema);

export {
  IIoK8sApiAutoscalingV1ScaleSpec as IScaleSpec,
  IoK8sApiAutoscalingV1ScaleSpec as ScaleSpec
};
