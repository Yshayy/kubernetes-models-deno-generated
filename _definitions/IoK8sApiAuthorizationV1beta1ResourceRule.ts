
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuthorizationV1beta1ResourceRule.ts";

/**
 * ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
 */
export interface IIoK8sApiAuthorizationV1beta1ResourceRule {
/**
 * APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.  "\*" means all.
 */
"apiGroups"?: Array<string>;
/**
 * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.  "\*" means all.
 */
"resourceNames"?: Array<string>;
/**
 * Resources is a list of resources this rule applies to.  "\*" means all in the specified apiGroups.
 *  "\*\/foo" represents the subresource 'foo' for all resources in the specified apiGroups.
 */
"resources"?: Array<string>;
/**
 * Verb is a list of kubernetes resource API verbs, like: get, list, watch, create, update, delete, proxy.  "\*" means all.
 */
"verbs": Array<string>;
}

/**
 * ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
 */
export class IoK8sApiAuthorizationV1beta1ResourceRule extends Model<IIoK8sApiAuthorizationV1beta1ResourceRule> implements IIoK8sApiAuthorizationV1beta1ResourceRule {

"apiGroups"?: Array<string>;

"resourceNames"?: Array<string>;

"resources"?: Array<string>;

"verbs": Array<string>;
}

Model.setSchema(IoK8sApiAuthorizationV1beta1ResourceRule, "io.k8s.api.authorization.v1beta1.ResourceRule", addSchema);

export {
  IIoK8sApiAuthorizationV1beta1ResourceRule as IResourceRule,
  IoK8sApiAuthorizationV1beta1ResourceRule as ResourceRule
};
