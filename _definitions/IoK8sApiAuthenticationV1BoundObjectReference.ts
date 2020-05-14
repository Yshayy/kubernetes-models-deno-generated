
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuthenticationV1BoundObjectReference.ts";

/**
 * BoundObjectReference is a reference to an object that a token is bound to.
 */
export interface IIoK8sApiAuthenticationV1BoundObjectReference {
/**
 * API version of the referent.
 */
"apiVersion"?: string;
/**
 * Kind of the referent. Valid kinds are 'Pod' and 'Secret'.
 */
"kind"?: string;
/**
 * Name of the referent.
 */
"name"?: string;
/**
 * UID of the referent.
 */
"uid"?: string;
}

/**
 * BoundObjectReference is a reference to an object that a token is bound to.
 */
export class IoK8sApiAuthenticationV1BoundObjectReference extends Model<IIoK8sApiAuthenticationV1BoundObjectReference> implements IIoK8sApiAuthenticationV1BoundObjectReference {

"apiVersion"?: string;

"kind"?: string;

"name"?: string;

"uid"?: string;
}

Model.setSchema(IoK8sApiAuthenticationV1BoundObjectReference, "io.k8s.api.authentication.v1.BoundObjectReference", addSchema);

export {
  IIoK8sApiAuthenticationV1BoundObjectReference as IBoundObjectReference,
  IoK8sApiAuthenticationV1BoundObjectReference as BoundObjectReference
};
