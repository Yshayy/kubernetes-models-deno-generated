
import { IIoK8sApiAdmissionregistrationV1beta1WebhookClientConfig } from "./IoK8sApiAdmissionregistrationV1beta1WebhookClientConfig.ts";

import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { IIoK8sApiAdmissionregistrationV1beta1RuleWithOperations } from "./IoK8sApiAdmissionregistrationV1beta1RuleWithOperations.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAdmissionregistrationV1beta1ValidatingWebhook.ts";

/**
 * ValidatingWebhook describes an admission webhook and the resources and operations it applies to.
 */
export interface IIoK8sApiAdmissionregistrationV1beta1ValidatingWebhook {
/**
 * AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy. Default to `['v1beta1']`.
 */
"admissionReviewVersions"?: Array<string>;
/**
 * ClientConfig defines how to communicate with the hook. Required
 */
"clientConfig": IIoK8sApiAdmissionregistrationV1beta1WebhookClientConfig;
/**
 * FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Ignore.
 */
"failurePolicy"?: string;
/**
 * matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".
 * 
 * - Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.
 * 
 * - Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.
 * 
 * Defaults to "Exact"
 */
"matchPolicy"?: string;
/**
 * The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.
 */
"name": string;
/**
 * NamespaceSelector decides whether to run the webhook on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the webhook.
 * 
 * For example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {
 *   "matchExpressions": [
 *     {
 *       "key": "runlevel",
 *       "operator": "NotIn",
 *       "values": [
 *         "0",
 *         "1"
 *       ]
 *     }
 *   ]
 * }
 * 
 * If instead you want to only run the webhook on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {
 *   "matchExpressions": [
 *     {
 *       "key": "environment",
 *       "operator": "In",
 *       "values": [
 *         "prod",
 *         "staging"
 *       ]
 *     }
 *   ]
 * }
 * 
 * See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels for more examples of label selectors.
 * 
 * Default to the empty LabelSelector, which matches everything.
 */
"namespaceSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
/**
 * ObjectSelector decides whether to run the webhook based on if the object has matching labels. objectSelector is evaluated against both the oldObject and newObject that would be sent to the webhook, and is considered to match if either object matches the selector. A null object (oldObject in the case of create, or newObject in the case of delete) or an object that cannot have labels (like a DeploymentRollback or a PodProxyOptions object) is not considered to match. Use the object selector only if the webhook is opt-in, because end users may skip the admission webhook by setting the labels. Default to the empty LabelSelector, which matches everything.
 */
"objectSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
/**
 * Rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects.
 */
"rules"?: Array<IIoK8sApiAdmissionregistrationV1beta1RuleWithOperations>;
/**
 * SideEffects states whether this webhook has side effects. Acceptable values are: Unknown, None, Some, NoneOnDryRun Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission change and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some. Defaults to Unknown.
 */
"sideEffects"?: string;
/**
 * TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 30 seconds.
 */
"timeoutSeconds"?: number;
}

/**
 * ValidatingWebhook describes an admission webhook and the resources and operations it applies to.
 */
export class IoK8sApiAdmissionregistrationV1beta1ValidatingWebhook extends Model<IIoK8sApiAdmissionregistrationV1beta1ValidatingWebhook> implements IIoK8sApiAdmissionregistrationV1beta1ValidatingWebhook {

"admissionReviewVersions"?: Array<string>;

"clientConfig": IIoK8sApiAdmissionregistrationV1beta1WebhookClientConfig;

"failurePolicy"?: string;

"matchPolicy"?: string;

"name": string;

"namespaceSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;

"objectSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;

"rules"?: Array<IIoK8sApiAdmissionregistrationV1beta1RuleWithOperations>;

"sideEffects"?: string;

"timeoutSeconds"?: number;
}

Model.setSchema(IoK8sApiAdmissionregistrationV1beta1ValidatingWebhook, "io.k8s.api.admissionregistration.v1beta1.ValidatingWebhook", addSchema);

export {
  IIoK8sApiAdmissionregistrationV1beta1ValidatingWebhook as IValidatingWebhook,
  IoK8sApiAdmissionregistrationV1beta1ValidatingWebhook as ValidatingWebhook
};