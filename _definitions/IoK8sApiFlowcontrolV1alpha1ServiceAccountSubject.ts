
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiFlowcontrolV1alpha1ServiceAccountSubject.ts";

/**
 * ServiceAccountSubject holds detailed information for service-account-kind subject.
 */
export interface IIoK8sApiFlowcontrolV1alpha1ServiceAccountSubject {
/**
 * `name` is the name of matching ServiceAccount objects, or "\*" to match regardless of name. Required.
 */
"name": string;
/**
 * `namespace` is the namespace of matching ServiceAccount objects. Required.
 */
"namespace": string;
}

/**
 * ServiceAccountSubject holds detailed information for service-account-kind subject.
 */
export class IoK8sApiFlowcontrolV1alpha1ServiceAccountSubject extends Model<IIoK8sApiFlowcontrolV1alpha1ServiceAccountSubject> implements IIoK8sApiFlowcontrolV1alpha1ServiceAccountSubject {

"name": string;

"namespace": string;
}

Model.setSchema(IoK8sApiFlowcontrolV1alpha1ServiceAccountSubject, "io.k8s.api.flowcontrol.v1alpha1.ServiceAccountSubject", addSchema);

export {
  IIoK8sApiFlowcontrolV1alpha1ServiceAccountSubject as IServiceAccountSubject,
  IoK8sApiFlowcontrolV1alpha1ServiceAccountSubject as ServiceAccountSubject
};
