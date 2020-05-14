
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1TypedLocalObjectReference.ts";

/**
 * TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
 */
export interface IIoK8sApiCoreV1TypedLocalObjectReference {
/**
 * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
 */
"apiGroup"?: string;
/**
 * Kind is the type of resource being referenced
 */
"kind": string;
/**
 * Name is the name of resource being referenced
 */
"name": string;
}

/**
 * TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
 */
export class IoK8sApiCoreV1TypedLocalObjectReference extends Model<IIoK8sApiCoreV1TypedLocalObjectReference> implements IIoK8sApiCoreV1TypedLocalObjectReference {

"apiGroup"?: string;

"kind": string;

"name": string;
}

Model.setSchema(IoK8sApiCoreV1TypedLocalObjectReference, "io.k8s.api.core.v1.TypedLocalObjectReference", addSchema);

export {
  IIoK8sApiCoreV1TypedLocalObjectReference as ITypedLocalObjectReference,
  IoK8sApiCoreV1TypedLocalObjectReference as TypedLocalObjectReference
};
