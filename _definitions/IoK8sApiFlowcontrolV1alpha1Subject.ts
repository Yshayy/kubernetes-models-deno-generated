
import { IIoK8sApiFlowcontrolV1alpha1GroupSubject } from "./IoK8sApiFlowcontrolV1alpha1GroupSubject.ts";

import { IIoK8sApiFlowcontrolV1alpha1ServiceAccountSubject } from "./IoK8sApiFlowcontrolV1alpha1ServiceAccountSubject.ts";

import { IIoK8sApiFlowcontrolV1alpha1UserSubject } from "./IoK8sApiFlowcontrolV1alpha1UserSubject.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiFlowcontrolV1alpha1Subject.ts";

/**
 * Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
 */
export interface IIoK8sApiFlowcontrolV1alpha1Subject {
"group"?: IIoK8sApiFlowcontrolV1alpha1GroupSubject;
/**
 * Required
 */
"kind": string;
"serviceAccount"?: IIoK8sApiFlowcontrolV1alpha1ServiceAccountSubject;
"user"?: IIoK8sApiFlowcontrolV1alpha1UserSubject;
}

/**
 * Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
 */
export class IoK8sApiFlowcontrolV1alpha1Subject extends Model<IIoK8sApiFlowcontrolV1alpha1Subject> implements IIoK8sApiFlowcontrolV1alpha1Subject {
"group"?: IIoK8sApiFlowcontrolV1alpha1GroupSubject;

"kind": string;
"serviceAccount"?: IIoK8sApiFlowcontrolV1alpha1ServiceAccountSubject;
"user"?: IIoK8sApiFlowcontrolV1alpha1UserSubject;
}

Model.setSchema(IoK8sApiFlowcontrolV1alpha1Subject, "io.k8s.api.flowcontrol.v1alpha1.Subject", addSchema);

export {
  IIoK8sApiFlowcontrolV1alpha1Subject as ISubject,
  IoK8sApiFlowcontrolV1alpha1Subject as Subject
};
