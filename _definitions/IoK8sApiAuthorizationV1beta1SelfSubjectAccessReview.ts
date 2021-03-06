
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiAuthorizationV1beta1SelfSubjectAccessReviewSpec } from "./IoK8sApiAuthorizationV1beta1SelfSubjectAccessReviewSpec.ts";

import { IIoK8sApiAuthorizationV1beta1SubjectAccessReviewStatus } from "./IoK8sApiAuthorizationV1beta1SubjectAccessReviewStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview.ts";

/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 */
export interface IIoK8sApiAuthorizationV1beta1SelfSubjectAccessReview {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "authorization.k8s.io/v1beta1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "SelfSubjectAccessReview";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec holds information about the request being evaluated.  user and groups must be empty
 */
"spec": IIoK8sApiAuthorizationV1beta1SelfSubjectAccessReviewSpec;
/**
 * Status is filled in by the server and indicates whether the request is allowed or not
 */
"status"?: IIoK8sApiAuthorizationV1beta1SubjectAccessReviewStatus;
}

/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 */
export class IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview extends Model<IIoK8sApiAuthorizationV1beta1SelfSubjectAccessReview> implements IIoK8sApiAuthorizationV1beta1SelfSubjectAccessReview {

apiVersion: IIoK8sApiAuthorizationV1beta1SelfSubjectAccessReview["apiVersion"] = IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview["apiVersion"];

kind: IIoK8sApiAuthorizationV1beta1SelfSubjectAccessReview["kind"] = IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec": IIoK8sApiAuthorizationV1beta1SelfSubjectAccessReviewSpec;

"status"?: IIoK8sApiAuthorizationV1beta1SubjectAccessReviewStatus;

static apiVersion: IIoK8sApiAuthorizationV1beta1SelfSubjectAccessReview["apiVersion"] = "authorization.k8s.io/v1beta1";
static kind: IIoK8sApiAuthorizationV1beta1SelfSubjectAccessReview["kind"] = "SelfSubjectAccessReview";
}

Model.setSchema(IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview, "io.k8s.api.authorization.v1beta1.SelfSubjectAccessReview", addSchema);

export {
  IIoK8sApiAuthorizationV1beta1SelfSubjectAccessReview as ISelfSubjectAccessReview,
  IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview as SelfSubjectAccessReview
};
