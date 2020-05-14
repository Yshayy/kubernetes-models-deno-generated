
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuthorizationV1NonResourceRule.ts";

/**
 * NonResourceRule holds information that describes a rule for the non-resource
 */
export interface IIoK8sApiAuthorizationV1NonResourceRule {
/**
 * NonResourceURLs is a set of partial urls that a user should have access to.  \*s are allowed, but only as the full, final step in the path.  "\*" means all.
 */
"nonResourceURLs"?: Array<string>;
/**
 * Verb is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  "\*" means all.
 */
"verbs": Array<string>;
}

/**
 * NonResourceRule holds information that describes a rule for the non-resource
 */
export class IoK8sApiAuthorizationV1NonResourceRule extends Model<IIoK8sApiAuthorizationV1NonResourceRule> implements IIoK8sApiAuthorizationV1NonResourceRule {

"nonResourceURLs"?: Array<string>;

"verbs": Array<string>;
}

Model.setSchema(IoK8sApiAuthorizationV1NonResourceRule, "io.k8s.api.authorization.v1.NonResourceRule", addSchema);

export {
  IIoK8sApiAuthorizationV1NonResourceRule as INonResourceRule,
  IoK8sApiAuthorizationV1NonResourceRule as NonResourceRule
};
