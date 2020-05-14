
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiRbacV1alpha1RoleRef } from "./IoK8sApiRbacV1alpha1RoleRef.ts";

import { IIoK8sApiRbacV1alpha1Subject } from "./IoK8sApiRbacV1alpha1Subject.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiRbacV1alpha1ClusterRoleBinding.ts";

/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRoleBinding, and will no longer be served in v1.20.
 */
export interface IIoK8sApiRbacV1alpha1ClusterRoleBinding {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "rbac.authorization.k8s.io/v1alpha1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "ClusterRoleBinding";
/**
 * Standard object's metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * RoleRef can only reference a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
 */
"roleRef": IIoK8sApiRbacV1alpha1RoleRef;
/**
 * Subjects holds references to the objects the role applies to.
 */
"subjects"?: Array<IIoK8sApiRbacV1alpha1Subject>;
}

/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRoleBinding, and will no longer be served in v1.20.
 */
export class IoK8sApiRbacV1alpha1ClusterRoleBinding extends Model<IIoK8sApiRbacV1alpha1ClusterRoleBinding> implements IIoK8sApiRbacV1alpha1ClusterRoleBinding {

apiVersion: IIoK8sApiRbacV1alpha1ClusterRoleBinding["apiVersion"] = IoK8sApiRbacV1alpha1ClusterRoleBinding["apiVersion"];

kind: IIoK8sApiRbacV1alpha1ClusterRoleBinding["kind"] = IoK8sApiRbacV1alpha1ClusterRoleBinding["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"roleRef": IIoK8sApiRbacV1alpha1RoleRef;

"subjects"?: Array<IIoK8sApiRbacV1alpha1Subject>;

static apiVersion: IIoK8sApiRbacV1alpha1ClusterRoleBinding["apiVersion"] = "rbac.authorization.k8s.io/v1alpha1";
static kind: IIoK8sApiRbacV1alpha1ClusterRoleBinding["kind"] = "ClusterRoleBinding";
}

Model.setSchema(IoK8sApiRbacV1alpha1ClusterRoleBinding, "io.k8s.api.rbac.v1alpha1.ClusterRoleBinding", addSchema);

export {
  IIoK8sApiRbacV1alpha1ClusterRoleBinding as IClusterRoleBinding,
  IoK8sApiRbacV1alpha1ClusterRoleBinding as ClusterRoleBinding
};
