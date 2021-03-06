
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiFlowcontrolV1alpha1ResourcePolicyRule.ts";

/**
 * ResourcePolicyRule is a predicate that matches some resource requests, testing the request's verb and the target resource. A ResourcePolicyRule matches a resource request if and only if: (a) at least one member of verbs matches the request, (b) at least one member of apiGroups matches the request, (c) at least one member of resources matches the request, and (d) least one member of namespaces matches the request.
 */
export interface IIoK8sApiFlowcontrolV1alpha1ResourcePolicyRule {
/**
 * `apiGroups` is a list of matching API groups and may not be empty. "\*" matches all API groups and, if present, must be the only entry. Required.
 */
"apiGroups": Array<string>;
/**
 * `clusterScope` indicates whether to match requests that do not specify a namespace (which happens either because the resource is not namespaced or the request targets all namespaces). If this field is omitted or false then the `namespaces` field must contain a non-empty list.
 */
"clusterScope"?: boolean;
/**
 * `namespaces` is a list of target namespaces that restricts matches.  A request that specifies a target namespace matches only if either (a) this list contains that target namespace or (b) this list contains "\*".  Note that "\*" matches any specified namespace but does not match a request that _does not specify_ a namespace (see the `clusterScope` field for that). This list may be empty, but only if `clusterScope` is true.
 */
"namespaces"?: Array<string>;
/**
 * `resources` is a list of matching resources (i.e., lowercase and plural) with, if desired, subresource.  For example, [ "services", "nodes/status" ].  This list may not be empty. "\*" matches all resources and, if present, must be the only entry. Required.
 */
"resources": Array<string>;
/**
 * `verbs` is a list of matching verbs and may not be empty. "\*" matches all verbs and, if present, must be the only entry. Required.
 */
"verbs": Array<string>;
}

/**
 * ResourcePolicyRule is a predicate that matches some resource requests, testing the request's verb and the target resource. A ResourcePolicyRule matches a resource request if and only if: (a) at least one member of verbs matches the request, (b) at least one member of apiGroups matches the request, (c) at least one member of resources matches the request, and (d) least one member of namespaces matches the request.
 */
export class IoK8sApiFlowcontrolV1alpha1ResourcePolicyRule extends Model<IIoK8sApiFlowcontrolV1alpha1ResourcePolicyRule> implements IIoK8sApiFlowcontrolV1alpha1ResourcePolicyRule {

"apiGroups": Array<string>;

"clusterScope"?: boolean;

"namespaces"?: Array<string>;

"resources": Array<string>;

"verbs": Array<string>;
}

Model.setSchema(IoK8sApiFlowcontrolV1alpha1ResourcePolicyRule, "io.k8s.api.flowcontrol.v1alpha1.ResourcePolicyRule", addSchema);

export {
  IIoK8sApiFlowcontrolV1alpha1ResourcePolicyRule as IResourcePolicyRule,
  IoK8sApiFlowcontrolV1alpha1ResourcePolicyRule as ResourcePolicyRule
};
