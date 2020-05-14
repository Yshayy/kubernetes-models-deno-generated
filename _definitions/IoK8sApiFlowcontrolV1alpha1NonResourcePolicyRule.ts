
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiFlowcontrolV1alpha1NonResourcePolicyRule.ts";

/**
 * NonResourcePolicyRule is a predicate that matches non-resource requests according to their verb and the target non-resource URL. A NonResourcePolicyRule matches a request if and only if both (a) at least one member of verbs matches the request and (b) at least one member of nonResourceURLs matches the request.
 */
export interface IIoK8sApiFlowcontrolV1alpha1NonResourcePolicyRule {
/**
 * `nonResourceURLs` is a set of url prefixes that a user should have access to and may not be empty. For example:
 *   - "/healthz" is legal
 *   - "/hea\*" is illegal
 *   - "/hea" is legal but matches nothing
 *   - "/hea/\*" also matches nothing
 *   - "/healthz/\*" matches all per-component health checks.
 * "\*" matches all non-resource urls. if it is present, it must be the only entry. Required.
 */
"nonResourceURLs": Array<string>;
/**
 * `verbs` is a list of matching verbs and may not be empty. "\*" matches all verbs. If it is present, it must be the only entry. Required.
 */
"verbs": Array<string>;
}

/**
 * NonResourcePolicyRule is a predicate that matches non-resource requests according to their verb and the target non-resource URL. A NonResourcePolicyRule matches a request if and only if both (a) at least one member of verbs matches the request and (b) at least one member of nonResourceURLs matches the request.
 */
export class IoK8sApiFlowcontrolV1alpha1NonResourcePolicyRule extends Model<IIoK8sApiFlowcontrolV1alpha1NonResourcePolicyRule> implements IIoK8sApiFlowcontrolV1alpha1NonResourcePolicyRule {

"nonResourceURLs": Array<string>;

"verbs": Array<string>;
}

Model.setSchema(IoK8sApiFlowcontrolV1alpha1NonResourcePolicyRule, "io.k8s.api.flowcontrol.v1alpha1.NonResourcePolicyRule", addSchema);

export {
  IIoK8sApiFlowcontrolV1alpha1NonResourcePolicyRule as INonResourcePolicyRule,
  IoK8sApiFlowcontrolV1alpha1NonResourcePolicyRule as NonResourcePolicyRule
};
