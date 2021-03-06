
import { IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfiguration } from "./IoK8sApiFlowcontrolV1alpha1PriorityLevelConfiguration.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationList.ts";

/**
 * PriorityLevelConfigurationList is a list of PriorityLevelConfiguration objects.
 */
export interface IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "flowcontrol.apiserver.k8s.io/v1alpha1";
/**
 * `items` is a list of request-priorities.
 */
"items": Array<IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfiguration>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "PriorityLevelConfigurationList";
/**
 * `metadata` is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * PriorityLevelConfigurationList is a list of PriorityLevelConfiguration objects.
 */
export class IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationList extends Model<IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationList> implements IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationList {

apiVersion: IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationList["apiVersion"] = IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationList["apiVersion"];

"items": Array<IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfiguration>;

kind: IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationList["kind"] = IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationList["apiVersion"] = "flowcontrol.apiserver.k8s.io/v1alpha1";
static kind: IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationList["kind"] = "PriorityLevelConfigurationList";
}

Model.setSchema(IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationList, "io.k8s.api.flowcontrol.v1alpha1.PriorityLevelConfigurationList", addSchema);

export {
  IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationList as IPriorityLevelConfigurationList,
  IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationList as PriorityLevelConfigurationList
};
