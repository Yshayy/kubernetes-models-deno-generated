
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuthorizationV1beta1ResourceAttributes.ts";

/**
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 */
export interface IIoK8sApiAuthorizationV1beta1ResourceAttributes {
/**
 * Group is the API Group of the Resource.  "\*" means all.
 */
"group"?: string;
/**
 * Name is the name of the resource being requested for a "get" or deleted for a "delete". "" (empty) means all.
 */
"name"?: string;
/**
 * Namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces "" (empty) is defaulted for LocalSubjectAccessReviews "" (empty) is empty for cluster-scoped resources "" (empty) means "all" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview
 */
"namespace"?: string;
/**
 * Resource is one of the existing resource types.  "\*" means all.
 */
"resource"?: string;
/**
 * Subresource is one of the existing resource types.  "" means none.
 */
"subresource"?: string;
/**
 * Verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  "\*" means all.
 */
"verb"?: string;
/**
 * Version is the API Version of the Resource.  "\*" means all.
 */
"version"?: string;
}

/**
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 */
export class IoK8sApiAuthorizationV1beta1ResourceAttributes extends Model<IIoK8sApiAuthorizationV1beta1ResourceAttributes> implements IIoK8sApiAuthorizationV1beta1ResourceAttributes {

"group"?: string;

"name"?: string;

"namespace"?: string;

"resource"?: string;

"subresource"?: string;

"verb"?: string;

"version"?: string;
}

Model.setSchema(IoK8sApiAuthorizationV1beta1ResourceAttributes, "io.k8s.api.authorization.v1beta1.ResourceAttributes", addSchema);

export {
  IIoK8sApiAuthorizationV1beta1ResourceAttributes as IResourceAttributes,
  IoK8sApiAuthorizationV1beta1ResourceAttributes as ResourceAttributes
};
