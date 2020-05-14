
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1LocalObjectReference.ts";

/**
 * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
 */
export interface IIoK8sApiCoreV1LocalObjectReference {
/**
 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
"name"?: string;
}

/**
 * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
 */
export class IoK8sApiCoreV1LocalObjectReference extends Model<IIoK8sApiCoreV1LocalObjectReference> implements IIoK8sApiCoreV1LocalObjectReference {

"name"?: string;
}

Model.setSchema(IoK8sApiCoreV1LocalObjectReference, "io.k8s.api.core.v1.LocalObjectReference", addSchema);

export {
  IIoK8sApiCoreV1LocalObjectReference as ILocalObjectReference,
  IoK8sApiCoreV1LocalObjectReference as LocalObjectReference
};
