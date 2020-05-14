
import { IIoK8sApiFlowcontrolV1alpha1FlowSchema } from "./IoK8sApiFlowcontrolV1alpha1FlowSchema.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiFlowcontrolV1alpha1FlowSchemaList.ts";

/**
 * FlowSchemaList is a list of FlowSchema objects.
 */
export interface IIoK8sApiFlowcontrolV1alpha1FlowSchemaList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "flowcontrol.apiserver.k8s.io/v1alpha1";
/**
 * `items` is a list of FlowSchemas.
 */
"items": Array<IIoK8sApiFlowcontrolV1alpha1FlowSchema>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "FlowSchemaList";
/**
 * `metadata` is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * FlowSchemaList is a list of FlowSchema objects.
 */
export class IoK8sApiFlowcontrolV1alpha1FlowSchemaList extends Model<IIoK8sApiFlowcontrolV1alpha1FlowSchemaList> implements IIoK8sApiFlowcontrolV1alpha1FlowSchemaList {

apiVersion: IIoK8sApiFlowcontrolV1alpha1FlowSchemaList["apiVersion"] = IoK8sApiFlowcontrolV1alpha1FlowSchemaList["apiVersion"];

"items": Array<IIoK8sApiFlowcontrolV1alpha1FlowSchema>;

kind: IIoK8sApiFlowcontrolV1alpha1FlowSchemaList["kind"] = IoK8sApiFlowcontrolV1alpha1FlowSchemaList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiFlowcontrolV1alpha1FlowSchemaList["apiVersion"] = "flowcontrol.apiserver.k8s.io/v1alpha1";
static kind: IIoK8sApiFlowcontrolV1alpha1FlowSchemaList["kind"] = "FlowSchemaList";
}

Model.setSchema(IoK8sApiFlowcontrolV1alpha1FlowSchemaList, "io.k8s.api.flowcontrol.v1alpha1.FlowSchemaList", addSchema);

export {
  IIoK8sApiFlowcontrolV1alpha1FlowSchemaList as IFlowSchemaList,
  IoK8sApiFlowcontrolV1alpha1FlowSchemaList as FlowSchemaList
};
