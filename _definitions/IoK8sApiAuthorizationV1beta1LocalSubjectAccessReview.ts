
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiAuthorizationV1beta1SubjectAccessReviewSpec } from "./IoK8sApiAuthorizationV1beta1SubjectAccessReviewSpec.ts";

import { IIoK8sApiAuthorizationV1beta1SubjectAccessReviewStatus } from "./IoK8sApiAuthorizationV1beta1SubjectAccessReviewStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview.ts";

/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 */
export interface IIoK8sApiAuthorizationV1beta1LocalSubjectAccessReview {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "authorization.k8s.io/v1beta1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "LocalSubjectAccessReview";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec holds information about the request being evaluated.  spec.namespace must be equal to the namespace you made the request against.  If empty, it is defaulted.
 */
"spec": IIoK8sApiAuthorizationV1beta1SubjectAccessReviewSpec;
/**
 * Status is filled in by the server and indicates whether the request is allowed or not
 */
"status"?: IIoK8sApiAuthorizationV1beta1SubjectAccessReviewStatus;
}

/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 */
export class IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview extends Model<IIoK8sApiAuthorizationV1beta1LocalSubjectAccessReview> implements IIoK8sApiAuthorizationV1beta1LocalSubjectAccessReview {

apiVersion: IIoK8sApiAuthorizationV1beta1LocalSubjectAccessReview["apiVersion"] = IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview["apiVersion"];

kind: IIoK8sApiAuthorizationV1beta1LocalSubjectAccessReview["kind"] = IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec": IIoK8sApiAuthorizationV1beta1SubjectAccessReviewSpec;

"status"?: IIoK8sApiAuthorizationV1beta1SubjectAccessReviewStatus;

static apiVersion: IIoK8sApiAuthorizationV1beta1LocalSubjectAccessReview["apiVersion"] = "authorization.k8s.io/v1beta1";
static kind: IIoK8sApiAuthorizationV1beta1LocalSubjectAccessReview["kind"] = "LocalSubjectAccessReview";
}

Model.setSchema(IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview, "io.k8s.api.authorization.v1beta1.LocalSubjectAccessReview", addSchema);

export {
  IIoK8sApiAuthorizationV1beta1LocalSubjectAccessReview as ILocalSubjectAccessReview,
  IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview as LocalSubjectAccessReview
};
