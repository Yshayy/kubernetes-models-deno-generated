
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec } from "./IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec.ts";

import { IIoK8sApiAuthorizationV1SubjectRulesReviewStatus } from "./IoK8sApiAuthorizationV1SubjectRulesReviewStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuthorizationV1SelfSubjectRulesReview.ts";

/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 */
export interface IIoK8sApiAuthorizationV1SelfSubjectRulesReview {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "authorization.k8s.io/v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "SelfSubjectRulesReview";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec holds information about the request being evaluated.
 */
"spec": IIoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec;
/**
 * Status is filled in by the server and indicates the set of actions a user can perform.
 */
"status"?: IIoK8sApiAuthorizationV1SubjectRulesReviewStatus;
}

/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 */
export class IoK8sApiAuthorizationV1SelfSubjectRulesReview extends Model<IIoK8sApiAuthorizationV1SelfSubjectRulesReview> implements IIoK8sApiAuthorizationV1SelfSubjectRulesReview {

apiVersion: IIoK8sApiAuthorizationV1SelfSubjectRulesReview["apiVersion"] = IoK8sApiAuthorizationV1SelfSubjectRulesReview["apiVersion"];

kind: IIoK8sApiAuthorizationV1SelfSubjectRulesReview["kind"] = IoK8sApiAuthorizationV1SelfSubjectRulesReview["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec": IIoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec;

"status"?: IIoK8sApiAuthorizationV1SubjectRulesReviewStatus;

static apiVersion: IIoK8sApiAuthorizationV1SelfSubjectRulesReview["apiVersion"] = "authorization.k8s.io/v1";
static kind: IIoK8sApiAuthorizationV1SelfSubjectRulesReview["kind"] = "SelfSubjectRulesReview";
}

Model.setSchema(IoK8sApiAuthorizationV1SelfSubjectRulesReview, "io.k8s.api.authorization.v1.SelfSubjectRulesReview", addSchema);

export {
  IIoK8sApiAuthorizationV1SelfSubjectRulesReview as ISelfSubjectRulesReview,
  IoK8sApiAuthorizationV1SelfSubjectRulesReview as SelfSubjectRulesReview
};
