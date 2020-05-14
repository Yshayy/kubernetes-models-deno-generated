
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuthorizationV1SubjectAccessReviewStatus.ts";

/**
 * SubjectAccessReviewStatus
 */
export interface IIoK8sApiAuthorizationV1SubjectAccessReviewStatus {
/**
 * Allowed is required. True if the action would be allowed, false otherwise.
 */
"allowed": boolean;
/**
 * Denied is optional. True if the action would be denied, otherwise false. If both allowed is false and denied is false, then the authorizer has no opinion on whether to authorize the action. Denied may not be true if Allowed is true.
 */
"denied"?: boolean;
/**
 * EvaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.
 */
"evaluationError"?: string;
/**
 * Reason is optional.  It indicates why a request was allowed or denied.
 */
"reason"?: string;
}

/**
 * SubjectAccessReviewStatus
 */
export class IoK8sApiAuthorizationV1SubjectAccessReviewStatus extends Model<IIoK8sApiAuthorizationV1SubjectAccessReviewStatus> implements IIoK8sApiAuthorizationV1SubjectAccessReviewStatus {

"allowed": boolean;

"denied"?: boolean;

"evaluationError"?: string;

"reason"?: string;
}

Model.setSchema(IoK8sApiAuthorizationV1SubjectAccessReviewStatus, "io.k8s.api.authorization.v1.SubjectAccessReviewStatus", addSchema);

export {
  IIoK8sApiAuthorizationV1SubjectAccessReviewStatus as ISubjectAccessReviewStatus,
  IoK8sApiAuthorizationV1SubjectAccessReviewStatus as SubjectAccessReviewStatus
};
