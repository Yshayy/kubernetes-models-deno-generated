
import { IIoK8sApiRbacV1ClusterRole } from "./IoK8sApiRbacV1ClusterRole.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiRbacV1ClusterRoleList.ts";

/**
 * ClusterRoleList is a collection of ClusterRoles
 */
export interface IIoK8sApiRbacV1ClusterRoleList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "rbac.authorization.k8s.io/v1";
/**
 * Items is a list of ClusterRoles
 */
"items": Array<IIoK8sApiRbacV1ClusterRole>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "ClusterRoleList";
/**
 * Standard object's metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ClusterRoleList is a collection of ClusterRoles
 */
export class IoK8sApiRbacV1ClusterRoleList extends Model<IIoK8sApiRbacV1ClusterRoleList> implements IIoK8sApiRbacV1ClusterRoleList {

apiVersion: IIoK8sApiRbacV1ClusterRoleList["apiVersion"] = IoK8sApiRbacV1ClusterRoleList["apiVersion"];

"items": Array<IIoK8sApiRbacV1ClusterRole>;

kind: IIoK8sApiRbacV1ClusterRoleList["kind"] = IoK8sApiRbacV1ClusterRoleList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiRbacV1ClusterRoleList["apiVersion"] = "rbac.authorization.k8s.io/v1";
static kind: IIoK8sApiRbacV1ClusterRoleList["kind"] = "ClusterRoleList";
}

Model.setSchema(IoK8sApiRbacV1ClusterRoleList, "io.k8s.api.rbac.v1.ClusterRoleList", addSchema);

export {
  IIoK8sApiRbacV1ClusterRoleList as IClusterRoleList,
  IoK8sApiRbacV1ClusterRoleList as ClusterRoleList
};
