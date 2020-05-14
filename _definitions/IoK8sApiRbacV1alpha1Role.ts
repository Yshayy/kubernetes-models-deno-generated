
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiRbacV1alpha1PolicyRule } from "./IoK8sApiRbacV1alpha1PolicyRule.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiRbacV1alpha1Role.ts";

/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 Role, and will no longer be served in v1.20.
 */
export interface IIoK8sApiRbacV1alpha1Role {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "rbac.authorization.k8s.io/v1alpha1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "Role";
/**
 * Standard object's metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Rules holds all the PolicyRules for this Role
 */
"rules"?: Array<IIoK8sApiRbacV1alpha1PolicyRule>;
}

/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 Role, and will no longer be served in v1.20.
 */
export class IoK8sApiRbacV1alpha1Role extends Model<IIoK8sApiRbacV1alpha1Role> implements IIoK8sApiRbacV1alpha1Role {

apiVersion: IIoK8sApiRbacV1alpha1Role["apiVersion"] = IoK8sApiRbacV1alpha1Role["apiVersion"];

kind: IIoK8sApiRbacV1alpha1Role["kind"] = IoK8sApiRbacV1alpha1Role["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"rules"?: Array<IIoK8sApiRbacV1alpha1PolicyRule>;

static apiVersion: IIoK8sApiRbacV1alpha1Role["apiVersion"] = "rbac.authorization.k8s.io/v1alpha1";
static kind: IIoK8sApiRbacV1alpha1Role["kind"] = "Role";
}

Model.setSchema(IoK8sApiRbacV1alpha1Role, "io.k8s.api.rbac.v1alpha1.Role", addSchema);

export {
  IIoK8sApiRbacV1alpha1Role as IRole,
  IoK8sApiRbacV1alpha1Role as Role
};
