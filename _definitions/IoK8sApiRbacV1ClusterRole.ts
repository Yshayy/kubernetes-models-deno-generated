
import { IIoK8sApiRbacV1AggregationRule } from "./IoK8sApiRbacV1AggregationRule.ts";

import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiRbacV1PolicyRule } from "./IoK8sApiRbacV1PolicyRule.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiRbacV1ClusterRole.ts";

/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export interface IIoK8sApiRbacV1ClusterRole {
/**
 * AggregationRule is an optional field that describes how to build the Rules for this ClusterRole. If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be stomped by the controller.
 */
"aggregationRule"?: IIoK8sApiRbacV1AggregationRule;
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "rbac.authorization.k8s.io/v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "ClusterRole";
/**
 * Standard object's metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Rules holds all the PolicyRules for this ClusterRole
 */
"rules"?: Array<IIoK8sApiRbacV1PolicyRule>;
}

/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export class IoK8sApiRbacV1ClusterRole extends Model<IIoK8sApiRbacV1ClusterRole> implements IIoK8sApiRbacV1ClusterRole {

"aggregationRule"?: IIoK8sApiRbacV1AggregationRule;

apiVersion: IIoK8sApiRbacV1ClusterRole["apiVersion"] = IoK8sApiRbacV1ClusterRole["apiVersion"];

kind: IIoK8sApiRbacV1ClusterRole["kind"] = IoK8sApiRbacV1ClusterRole["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"rules"?: Array<IIoK8sApiRbacV1PolicyRule>;

static apiVersion: IIoK8sApiRbacV1ClusterRole["apiVersion"] = "rbac.authorization.k8s.io/v1";
static kind: IIoK8sApiRbacV1ClusterRole["kind"] = "ClusterRole";
}

Model.setSchema(IoK8sApiRbacV1ClusterRole, "io.k8s.api.rbac.v1.ClusterRole", addSchema);

export {
  IIoK8sApiRbacV1ClusterRole as IClusterRole,
  IoK8sApiRbacV1ClusterRole as ClusterRole
};
