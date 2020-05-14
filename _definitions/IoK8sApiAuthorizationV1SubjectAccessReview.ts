
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiAuthorizationV1SubjectAccessReviewSpec } from "./IoK8sApiAuthorizationV1SubjectAccessReviewSpec.ts";

import { IIoK8sApiAuthorizationV1SubjectAccessReviewStatus } from "./IoK8sApiAuthorizationV1SubjectAccessReviewStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuthorizationV1SubjectAccessReview.ts";

/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 */
export interface IIoK8sApiAuthorizationV1SubjectAccessReview {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "authorization.k8s.io/v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "SubjectAccessReview";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec holds information about the request being evaluated
 */
"spec": IIoK8sApiAuthorizationV1SubjectAccessReviewSpec;
/**
 * Status is filled in by the server and indicates whether the request is allowed or not
 */
"status"?: IIoK8sApiAuthorizationV1SubjectAccessReviewStatus;
}

/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 */
export class IoK8sApiAuthorizationV1SubjectAccessReview extends Model<IIoK8sApiAuthorizationV1SubjectAccessReview> implements IIoK8sApiAuthorizationV1SubjectAccessReview {

apiVersion: IIoK8sApiAuthorizationV1SubjectAccessReview["apiVersion"] = IoK8sApiAuthorizationV1SubjectAccessReview["apiVersion"];

kind: IIoK8sApiAuthorizationV1SubjectAccessReview["kind"] = IoK8sApiAuthorizationV1SubjectAccessReview["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec": IIoK8sApiAuthorizationV1SubjectAccessReviewSpec;

"status"?: IIoK8sApiAuthorizationV1SubjectAccessReviewStatus;

static apiVersion: IIoK8sApiAuthorizationV1SubjectAccessReview["apiVersion"] = "authorization.k8s.io/v1";
static kind: IIoK8sApiAuthorizationV1SubjectAccessReview["kind"] = "SubjectAccessReview";
}

Model.setSchema(IoK8sApiAuthorizationV1SubjectAccessReview, "io.k8s.api.authorization.v1.SubjectAccessReview", addSchema);

export {
  IIoK8sApiAuthorizationV1SubjectAccessReview as ISubjectAccessReview,
  IoK8sApiAuthorizationV1SubjectAccessReview as SubjectAccessReview
};
