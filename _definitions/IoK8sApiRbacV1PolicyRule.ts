
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiRbacV1PolicyRule.ts";

/**
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 */
export interface IIoK8sApiRbacV1PolicyRule {
/**
 * APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.
 */
"apiGroups"?: Array<string>;
/**
 * NonResourceURLs is a set of partial urls that a user should have access to.  \*s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"),  but not both.
 */
"nonResourceURLs"?: Array<string>;
/**
 * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
 */
"resourceNames"?: Array<string>;
/**
 * Resources is a list of resources this rule applies to.  ResourceAll represents all resources.
 */
"resources"?: Array<string>;
/**
 * Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule.  VerbAll represents all kinds.
 */
"verbs": Array<string>;
}

/**
 * PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
 */
export class IoK8sApiRbacV1PolicyRule extends Model<IIoK8sApiRbacV1PolicyRule> implements IIoK8sApiRbacV1PolicyRule {

"apiGroups"?: Array<string>;

"nonResourceURLs"?: Array<string>;

"resourceNames"?: Array<string>;

"resources"?: Array<string>;

"verbs": Array<string>;
}

Model.setSchema(IoK8sApiRbacV1PolicyRule, "io.k8s.api.rbac.v1.PolicyRule", addSchema);

export {
  IIoK8sApiRbacV1PolicyRule as IPolicyRule,
  IoK8sApiRbacV1PolicyRule as PolicyRule
};
