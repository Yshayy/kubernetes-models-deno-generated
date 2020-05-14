
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiFlowcontrolV1alpha1UserSubject.ts";

/**
 * UserSubject holds detailed information for user-kind subject.
 */
export interface IIoK8sApiFlowcontrolV1alpha1UserSubject {
/**
 * `name` is the username that matches, or "\*" to match all usernames. Required.
 */
"name": string;
}

/**
 * UserSubject holds detailed information for user-kind subject.
 */
export class IoK8sApiFlowcontrolV1alpha1UserSubject extends Model<IIoK8sApiFlowcontrolV1alpha1UserSubject> implements IIoK8sApiFlowcontrolV1alpha1UserSubject {

"name": string;
}

Model.setSchema(IoK8sApiFlowcontrolV1alpha1UserSubject, "io.k8s.api.flowcontrol.v1alpha1.UserSubject", addSchema);

export {
  IIoK8sApiFlowcontrolV1alpha1UserSubject as IUserSubject,
  IoK8sApiFlowcontrolV1alpha1UserSubject as UserSubject
};
