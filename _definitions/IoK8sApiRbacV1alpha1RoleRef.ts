
import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiRbacV1alpha1RoleRef.ts";

/**
 * RoleRef contains information that points to the role being used
 */
export interface IIoK8sApiRbacV1alpha1RoleRef {
/**
 * APIGroup is the group for the resource being referenced
 */
"apiGroup": string;
/**
 * Kind is the type of resource being referenced
 */
"kind": string;
/**
 * Name is the name of resource being referenced
 */
"name": string;
}

/**
 * RoleRef contains information that points to the role being used
 */
export class IoK8sApiRbacV1alpha1RoleRef extends Model<IIoK8sApiRbacV1alpha1RoleRef> implements IIoK8sApiRbacV1alpha1RoleRef {

"apiGroup": string;

"kind": string;

"name": string;
}

Model.setSchema(IoK8sApiRbacV1alpha1RoleRef, "io.k8s.api.rbac.v1alpha1.RoleRef", addSchema);

export {
  IIoK8sApiRbacV1alpha1RoleRef as IRoleRef,
  IoK8sApiRbacV1alpha1RoleRef as RoleRef
};
