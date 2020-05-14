
import { IIoK8sApiFlowcontrolV1alpha1NonResourcePolicyRule } from "./IoK8sApiFlowcontrolV1alpha1NonResourcePolicyRule.ts";

import { IIoK8sApiFlowcontrolV1alpha1ResourcePolicyRule } from "./IoK8sApiFlowcontrolV1alpha1ResourcePolicyRule.ts";

import { IIoK8sApiFlowcontrolV1alpha1Subject } from "./IoK8sApiFlowcontrolV1alpha1Subject.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiFlowcontrolV1alpha1PolicyRulesWithSubjects.ts";

/**
 * PolicyRulesWithSubjects prescribes a test that applies to a request to an apiserver. The test considers the subject making the request, the verb being requested, and the resource to be acted upon. This PolicyRulesWithSubjects matches a request if and only if both (a) at least one member of subjects matches the request and (b) at least one member of resourceRules or nonResourceRules matches the request.
 */
export interface IIoK8sApiFlowcontrolV1alpha1PolicyRulesWithSubjects {
/**
 * `nonResourceRules` is a list of NonResourcePolicyRules that identify matching requests according to their verb and the target non-resource URL.
 */
"nonResourceRules"?: Array<IIoK8sApiFlowcontrolV1alpha1NonResourcePolicyRule>;
/**
 * `resourceRules` is a slice of ResourcePolicyRules that identify matching requests according to their verb and the target resource. At least one of `resourceRules` and `nonResourceRules` has to be non-empty.
 */
"resourceRules"?: Array<IIoK8sApiFlowcontrolV1alpha1ResourcePolicyRule>;
/**
 * subjects is the list of normal user, serviceaccount, or group that this rule cares about. There must be at least one member in this slice. A slice that includes both the system:authenticated and system:unauthenticated user groups matches every request. Required.
 */
"subjects": Array<IIoK8sApiFlowcontrolV1alpha1Subject>;
}

/**
 * PolicyRulesWithSubjects prescribes a test that applies to a request to an apiserver. The test considers the subject making the request, the verb being requested, and the resource to be acted upon. This PolicyRulesWithSubjects matches a request if and only if both (a) at least one member of subjects matches the request and (b) at least one member of resourceRules or nonResourceRules matches the request.
 */
export class IoK8sApiFlowcontrolV1alpha1PolicyRulesWithSubjects extends Model<IIoK8sApiFlowcontrolV1alpha1PolicyRulesWithSubjects> implements IIoK8sApiFlowcontrolV1alpha1PolicyRulesWithSubjects {

"nonResourceRules"?: Array<IIoK8sApiFlowcontrolV1alpha1NonResourcePolicyRule>;

"resourceRules"?: Array<IIoK8sApiFlowcontrolV1alpha1ResourcePolicyRule>;

"subjects": Array<IIoK8sApiFlowcontrolV1alpha1Subject>;
}

Model.setSchema(IoK8sApiFlowcontrolV1alpha1PolicyRulesWithSubjects, "io.k8s.api.flowcontrol.v1alpha1.PolicyRulesWithSubjects", addSchema);

export {
  IIoK8sApiFlowcontrolV1alpha1PolicyRulesWithSubjects as IPolicyRulesWithSubjects,
  IoK8sApiFlowcontrolV1alpha1PolicyRulesWithSubjects as PolicyRulesWithSubjects
};
