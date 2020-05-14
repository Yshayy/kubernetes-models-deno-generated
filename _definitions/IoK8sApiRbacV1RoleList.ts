
import { IIoK8sApiRbacV1Role } from "./IoK8sApiRbacV1Role.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiRbacV1RoleList.ts";

/**
 * RoleList is a collection of Roles
 */
export interface IIoK8sApiRbacV1RoleList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "rbac.authorization.k8s.io/v1";
/**
 * Items is a list of Roles
 */
"items": Array<IIoK8sApiRbacV1Role>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "RoleList";
/**
 * Standard object's metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * RoleList is a collection of Roles
 */
export class IoK8sApiRbacV1RoleList extends Model<IIoK8sApiRbacV1RoleList> implements IIoK8sApiRbacV1RoleList {

apiVersion: IIoK8sApiRbacV1RoleList["apiVersion"] = IoK8sApiRbacV1RoleList["apiVersion"];

"items": Array<IIoK8sApiRbacV1Role>;

kind: IIoK8sApiRbacV1RoleList["kind"] = IoK8sApiRbacV1RoleList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiRbacV1RoleList["apiVersion"] = "rbac.authorization.k8s.io/v1";
static kind: IIoK8sApiRbacV1RoleList["kind"] = "RoleList";
}

Model.setSchema(IoK8sApiRbacV1RoleList, "io.k8s.api.rbac.v1.RoleList", addSchema);

export {
  IIoK8sApiRbacV1RoleList as IRoleList,
  IoK8sApiRbacV1RoleList as RoleList
};
