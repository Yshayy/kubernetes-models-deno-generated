
import { IIoK8sApiRbacV1alpha1ClusterRoleBinding } from "./IoK8sApiRbacV1alpha1ClusterRoleBinding.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiRbacV1alpha1ClusterRoleBindingList.ts";

/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRoleBindings, and will no longer be served in v1.20.
 */
export interface IIoK8sApiRbacV1alpha1ClusterRoleBindingList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "rbac.authorization.k8s.io/v1alpha1";
/**
 * Items is a list of ClusterRoleBindings
 */
"items": Array<IIoK8sApiRbacV1alpha1ClusterRoleBinding>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "ClusterRoleBindingList";
/**
 * Standard object's metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRoleBindings, and will no longer be served in v1.20.
 */
export class IoK8sApiRbacV1alpha1ClusterRoleBindingList extends Model<IIoK8sApiRbacV1alpha1ClusterRoleBindingList> implements IIoK8sApiRbacV1alpha1ClusterRoleBindingList {

apiVersion: IIoK8sApiRbacV1alpha1ClusterRoleBindingList["apiVersion"] = IoK8sApiRbacV1alpha1ClusterRoleBindingList["apiVersion"];

"items": Array<IIoK8sApiRbacV1alpha1ClusterRoleBinding>;

kind: IIoK8sApiRbacV1alpha1ClusterRoleBindingList["kind"] = IoK8sApiRbacV1alpha1ClusterRoleBindingList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiRbacV1alpha1ClusterRoleBindingList["apiVersion"] = "rbac.authorization.k8s.io/v1alpha1";
static kind: IIoK8sApiRbacV1alpha1ClusterRoleBindingList["kind"] = "ClusterRoleBindingList";
}

Model.setSchema(IoK8sApiRbacV1alpha1ClusterRoleBindingList, "io.k8s.api.rbac.v1alpha1.ClusterRoleBindingList", addSchema);

export {
  IIoK8sApiRbacV1alpha1ClusterRoleBindingList as IClusterRoleBindingList,
  IoK8sApiRbacV1alpha1ClusterRoleBindingList as ClusterRoleBindingList
};
