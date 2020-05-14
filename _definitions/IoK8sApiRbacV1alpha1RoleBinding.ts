
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiRbacV1alpha1RoleRef } from "./IoK8sApiRbacV1alpha1RoleRef.ts";

import { IIoK8sApiRbacV1alpha1Subject } from "./IoK8sApiRbacV1alpha1Subject.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiRbacV1alpha1RoleBinding.ts";

/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 RoleBinding, and will no longer be served in v1.20.
 */
export interface IIoK8sApiRbacV1alpha1RoleBinding {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "rbac.authorization.k8s.io/v1alpha1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "RoleBinding";
/**
 * Standard object's metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * RoleRef can reference a Role in the current namespace or a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
 */
"roleRef": IIoK8sApiRbacV1alpha1RoleRef;
/**
 * Subjects holds references to the objects the role applies to.
 */
"subjects"?: Array<IIoK8sApiRbacV1alpha1Subject>;
}

/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 RoleBinding, and will no longer be served in v1.20.
 */
export class IoK8sApiRbacV1alpha1RoleBinding extends Model<IIoK8sApiRbacV1alpha1RoleBinding> implements IIoK8sApiRbacV1alpha1RoleBinding {

apiVersion: IIoK8sApiRbacV1alpha1RoleBinding["apiVersion"] = IoK8sApiRbacV1alpha1RoleBinding["apiVersion"];

kind: IIoK8sApiRbacV1alpha1RoleBinding["kind"] = IoK8sApiRbacV1alpha1RoleBinding["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"roleRef": IIoK8sApiRbacV1alpha1RoleRef;

"subjects"?: Array<IIoK8sApiRbacV1alpha1Subject>;

static apiVersion: IIoK8sApiRbacV1alpha1RoleBinding["apiVersion"] = "rbac.authorization.k8s.io/v1alpha1";
static kind: IIoK8sApiRbacV1alpha1RoleBinding["kind"] = "RoleBinding";
}

Model.setSchema(IoK8sApiRbacV1alpha1RoleBinding, "io.k8s.api.rbac.v1alpha1.RoleBinding", addSchema);

export {
  IIoK8sApiRbacV1alpha1RoleBinding as IRoleBinding,
  IoK8sApiRbacV1alpha1RoleBinding as RoleBinding
};
