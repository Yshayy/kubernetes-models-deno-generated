
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiFlowcontrolV1alpha1GroupSubject.ts";

/**
 * GroupSubject holds detailed information for group-kind subject.
 */
export interface IIoK8sApiFlowcontrolV1alpha1GroupSubject {
/**
 * name is the user group that matches, or "\*" to match all user groups. See https://github.com/kubernetes/apiserver/blob/master/pkg/authentication/user/user.go for some well-known group names. Required.
 */
"name": string;
}

/**
 * GroupSubject holds detailed information for group-kind subject.
 */
export class IoK8sApiFlowcontrolV1alpha1GroupSubject extends Model<IIoK8sApiFlowcontrolV1alpha1GroupSubject> implements IIoK8sApiFlowcontrolV1alpha1GroupSubject {

"name": string;
}

Model.setSchema(IoK8sApiFlowcontrolV1alpha1GroupSubject, "io.k8s.api.flowcontrol.v1alpha1.GroupSubject", addSchema);

export {
  IIoK8sApiFlowcontrolV1alpha1GroupSubject as IGroupSubject,
  IoK8sApiFlowcontrolV1alpha1GroupSubject as GroupSubject
};
