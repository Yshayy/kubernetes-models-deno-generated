
import { IIoK8sApiRbacV1beta1RoleBinding } from "./IoK8sApiRbacV1beta1RoleBinding.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiRbacV1beta1RoleBindingList.ts";

/**
 * RoleBindingList is a collection of RoleBindings Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 RoleBindingList, and will no longer be served in v1.20.
 */
export interface IIoK8sApiRbacV1beta1RoleBindingList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "rbac.authorization.k8s.io/v1beta1";
/**
 * Items is a list of RoleBindings
 */
"items": Array<IIoK8sApiRbacV1beta1RoleBinding>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "RoleBindingList";
/**
 * Standard object's metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * RoleBindingList is a collection of RoleBindings Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 RoleBindingList, and will no longer be served in v1.20.
 */
export class IoK8sApiRbacV1beta1RoleBindingList extends Model<IIoK8sApiRbacV1beta1RoleBindingList> implements IIoK8sApiRbacV1beta1RoleBindingList {

apiVersion: IIoK8sApiRbacV1beta1RoleBindingList["apiVersion"] = IoK8sApiRbacV1beta1RoleBindingList["apiVersion"];

"items": Array<IIoK8sApiRbacV1beta1RoleBinding>;

kind: IIoK8sApiRbacV1beta1RoleBindingList["kind"] = IoK8sApiRbacV1beta1RoleBindingList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiRbacV1beta1RoleBindingList["apiVersion"] = "rbac.authorization.k8s.io/v1beta1";
static kind: IIoK8sApiRbacV1beta1RoleBindingList["kind"] = "RoleBindingList";
}

Model.setSchema(IoK8sApiRbacV1beta1RoleBindingList, "io.k8s.api.rbac.v1beta1.RoleBindingList", addSchema);

export {
  IIoK8sApiRbacV1beta1RoleBindingList as IRoleBindingList,
  IoK8sApiRbacV1beta1RoleBindingList as RoleBindingList
};
