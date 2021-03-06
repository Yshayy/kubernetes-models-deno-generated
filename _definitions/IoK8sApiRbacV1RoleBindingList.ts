
import { IIoK8sApiRbacV1RoleBinding } from "./IoK8sApiRbacV1RoleBinding.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiRbacV1RoleBindingList.ts";

/**
 * RoleBindingList is a collection of RoleBindings
 */
export interface IIoK8sApiRbacV1RoleBindingList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "rbac.authorization.k8s.io/v1";
/**
 * Items is a list of RoleBindings
 */
"items": Array<IIoK8sApiRbacV1RoleBinding>;
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
 * RoleBindingList is a collection of RoleBindings
 */
export class IoK8sApiRbacV1RoleBindingList extends Model<IIoK8sApiRbacV1RoleBindingList> implements IIoK8sApiRbacV1RoleBindingList {

apiVersion: IIoK8sApiRbacV1RoleBindingList["apiVersion"] = IoK8sApiRbacV1RoleBindingList["apiVersion"];

"items": Array<IIoK8sApiRbacV1RoleBinding>;

kind: IIoK8sApiRbacV1RoleBindingList["kind"] = IoK8sApiRbacV1RoleBindingList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiRbacV1RoleBindingList["apiVersion"] = "rbac.authorization.k8s.io/v1";
static kind: IIoK8sApiRbacV1RoleBindingList["kind"] = "RoleBindingList";
}

Model.setSchema(IoK8sApiRbacV1RoleBindingList, "io.k8s.api.rbac.v1.RoleBindingList", addSchema);

export {
  IIoK8sApiRbacV1RoleBindingList as IRoleBindingList,
  IoK8sApiRbacV1RoleBindingList as RoleBindingList
};
