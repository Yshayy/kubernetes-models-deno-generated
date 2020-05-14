
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiRbacV1beta1Subject.ts";

/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
export interface IIoK8sApiRbacV1beta1Subject {
/**
 * APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects.
 */
"apiGroup"?: string;
/**
 * Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
 */
"kind": string;
/**
 * Name of the object being referenced.
 */
"name": string;
/**
 * Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error.
 */
"namespace"?: string;
}

/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
export class IoK8sApiRbacV1beta1Subject extends Model<IIoK8sApiRbacV1beta1Subject> implements IIoK8sApiRbacV1beta1Subject {

"apiGroup"?: string;

"kind": string;

"name": string;

"namespace"?: string;
}

Model.setSchema(IoK8sApiRbacV1beta1Subject, "io.k8s.api.rbac.v1beta1.Subject", addSchema);

export {
  IIoK8sApiRbacV1beta1Subject as ISubject,
  IoK8sApiRbacV1beta1Subject as Subject
};
