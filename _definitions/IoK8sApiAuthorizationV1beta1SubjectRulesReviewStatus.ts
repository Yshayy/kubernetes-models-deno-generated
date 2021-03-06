
import { IIoK8sApiAuthorizationV1beta1NonResourceRule } from "./IoK8sApiAuthorizationV1beta1NonResourceRule.ts";

import { IIoK8sApiAuthorizationV1beta1ResourceRule } from "./IoK8sApiAuthorizationV1beta1ResourceRule.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuthorizationV1beta1SubjectRulesReviewStatus.ts";

/**
 * SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
 */
export interface IIoK8sApiAuthorizationV1beta1SubjectRulesReviewStatus {
/**
 * EvaluationError can appear in combination with Rules. It indicates an error occurred during rule evaluation, such as an authorizer that doesn't support rule evaluation, and that ResourceRules and/or NonResourceRules may be incomplete.
 */
"evaluationError"?: string;
/**
 * Incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn't support rules evaluation.
 */
"incomplete": boolean;
/**
 * NonResourceRules is the list of actions the subject is allowed to perform on non-resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
 */
"nonResourceRules": Array<IIoK8sApiAuthorizationV1beta1NonResourceRule>;
/**
 * ResourceRules is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
 */
"resourceRules": Array<IIoK8sApiAuthorizationV1beta1ResourceRule>;
}

/**
 * SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
 */
export class IoK8sApiAuthorizationV1beta1SubjectRulesReviewStatus extends Model<IIoK8sApiAuthorizationV1beta1SubjectRulesReviewStatus> implements IIoK8sApiAuthorizationV1beta1SubjectRulesReviewStatus {

"evaluationError"?: string;

"incomplete": boolean;

"nonResourceRules": Array<IIoK8sApiAuthorizationV1beta1NonResourceRule>;

"resourceRules": Array<IIoK8sApiAuthorizationV1beta1ResourceRule>;
}

Model.setSchema(IoK8sApiAuthorizationV1beta1SubjectRulesReviewStatus, "io.k8s.api.authorization.v1beta1.SubjectRulesReviewStatus", addSchema);

export {
  IIoK8sApiAuthorizationV1beta1SubjectRulesReviewStatus as ISubjectRulesReviewStatus,
  IoK8sApiAuthorizationV1beta1SubjectRulesReviewStatus as SubjectRulesReviewStatus
};
