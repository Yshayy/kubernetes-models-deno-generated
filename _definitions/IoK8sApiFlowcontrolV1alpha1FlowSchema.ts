
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiFlowcontrolV1alpha1FlowSchemaSpec } from "./IoK8sApiFlowcontrolV1alpha1FlowSchemaSpec.ts";

import { IIoK8sApiFlowcontrolV1alpha1FlowSchemaStatus } from "./IoK8sApiFlowcontrolV1alpha1FlowSchemaStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiFlowcontrolV1alpha1FlowSchema.ts";

/**
 * FlowSchema defines the schema of a group of flows. Note that a flow is made up of a set of inbound API requests with similar attributes and is identified by a pair of strings: the name of the FlowSchema and a "flow distinguisher".
 */
export interface IIoK8sApiFlowcontrolV1alpha1FlowSchema {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "flowcontrol.apiserver.k8s.io/v1alpha1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "FlowSchema";
/**
 * `metadata` is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * `spec` is the specification of the desired behavior of a FlowSchema. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiFlowcontrolV1alpha1FlowSchemaSpec;
/**
 * `status` is the current status of a FlowSchema. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiFlowcontrolV1alpha1FlowSchemaStatus;
}

/**
 * FlowSchema defines the schema of a group of flows. Note that a flow is made up of a set of inbound API requests with similar attributes and is identified by a pair of strings: the name of the FlowSchema and a "flow distinguisher".
 */
export class IoK8sApiFlowcontrolV1alpha1FlowSchema extends Model<IIoK8sApiFlowcontrolV1alpha1FlowSchema> implements IIoK8sApiFlowcontrolV1alpha1FlowSchema {

apiVersion: IIoK8sApiFlowcontrolV1alpha1FlowSchema["apiVersion"] = IoK8sApiFlowcontrolV1alpha1FlowSchema["apiVersion"];

kind: IIoK8sApiFlowcontrolV1alpha1FlowSchema["kind"] = IoK8sApiFlowcontrolV1alpha1FlowSchema["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiFlowcontrolV1alpha1FlowSchemaSpec;

"status"?: IIoK8sApiFlowcontrolV1alpha1FlowSchemaStatus;

static apiVersion: IIoK8sApiFlowcontrolV1alpha1FlowSchema["apiVersion"] = "flowcontrol.apiserver.k8s.io/v1alpha1";
static kind: IIoK8sApiFlowcontrolV1alpha1FlowSchema["kind"] = "FlowSchema";
}

Model.setSchema(IoK8sApiFlowcontrolV1alpha1FlowSchema, "io.k8s.api.flowcontrol.v1alpha1.FlowSchema", addSchema);

export {
  IIoK8sApiFlowcontrolV1alpha1FlowSchema as IFlowSchema,
  IoK8sApiFlowcontrolV1alpha1FlowSchema as FlowSchema
};
