
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta2CrossVersionObjectReference.ts";

/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
export interface IIoK8sApiAutoscalingV2beta2CrossVersionObjectReference {
/**
 * API version of the referent
 */
"apiVersion"?: string;
/**
 * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds"
 */
"kind": string;
/**
 * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
 */
"name": string;
}

/**
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 */
export class IoK8sApiAutoscalingV2beta2CrossVersionObjectReference extends Model<IIoK8sApiAutoscalingV2beta2CrossVersionObjectReference> implements IIoK8sApiAutoscalingV2beta2CrossVersionObjectReference {

"apiVersion"?: string;

"kind": string;

"name": string;
}

Model.setSchema(IoK8sApiAutoscalingV2beta2CrossVersionObjectReference, "io.k8s.api.autoscaling.v2beta2.CrossVersionObjectReference", addSchema);

export {
  IIoK8sApiAutoscalingV2beta2CrossVersionObjectReference as ICrossVersionObjectReference,
  IoK8sApiAutoscalingV2beta2CrossVersionObjectReference as CrossVersionObjectReference
};
