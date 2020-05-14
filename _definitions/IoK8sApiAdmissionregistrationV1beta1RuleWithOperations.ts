
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAdmissionregistrationV1beta1RuleWithOperations.ts";

/**
 * RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid.
 */
export interface IIoK8sApiAdmissionregistrationV1beta1RuleWithOperations {
/**
 * APIGroups is the API groups the resources belong to. '\*' is all groups. If '\*' is present, the length of the slice must be one. Required.
 */
"apiGroups"?: Array<string>;
/**
 * APIVersions is the API versions the resources belong to. '\*' is all versions. If '\*' is present, the length of the slice must be one. Required.
 */
"apiVersions"?: Array<string>;
/**
 * Operations is the operations the admission hook cares about - CREATE, UPDATE, or \* for all operations. If '\*' is present, the length of the slice must be one. Required.
 */
"operations"?: Array<string>;
/**
 * Resources is a list of resources this rule applies to.
 * 
 * For example: 'pods' means pods. 'pods/log' means the log subresource of pods. '\*' means all resources, but not subresources. 'pods/\*' means all subresources of pods. '\*\/scale' means all scale subresources. '\*\/\*' means all resources and their subresources.
 * 
 * If wildcard is present, the validation rule will ensure resources do not overlap with each other.
 * 
 * Depending on the enclosing object, subresources might not be allowed. Required.
 */
"resources"?: Array<string>;
/**
 * scope specifies the scope of this rule. Valid values are "Cluster", "Namespaced", and "\*" "Cluster" means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. "Namespaced" means that only namespaced resources will match this rule. "\*" means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is "\*".
 */
"scope"?: string;
}

/**
 * RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid.
 */
export class IoK8sApiAdmissionregistrationV1beta1RuleWithOperations extends Model<IIoK8sApiAdmissionregistrationV1beta1RuleWithOperations> implements IIoK8sApiAdmissionregistrationV1beta1RuleWithOperations {

"apiGroups"?: Array<string>;

"apiVersions"?: Array<string>;

"operations"?: Array<string>;

"resources"?: Array<string>;

"scope"?: string;
}

Model.setSchema(IoK8sApiAdmissionregistrationV1beta1RuleWithOperations, "io.k8s.api.admissionregistration.v1beta1.RuleWithOperations", addSchema);

export {
  IIoK8sApiAdmissionregistrationV1beta1RuleWithOperations as IRuleWithOperations,
  IoK8sApiAdmissionregistrationV1beta1RuleWithOperations as RuleWithOperations
};
