
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationSpec } from "./IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationSpec.ts";

import { IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationStatus } from "./IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiFlowcontrolV1alpha1PriorityLevelConfiguration.ts";

/**
 * PriorityLevelConfiguration represents the configuration of a priority level.
 */
export interface IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfiguration {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "flowcontrol.apiserver.k8s.io/v1alpha1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "PriorityLevelConfiguration";
/**
 * `metadata` is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * `spec` is the specification of the desired behavior of a "request-priority". More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationSpec;
/**
 * `status` is the current status of a "request-priority". More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationStatus;
}

/**
 * PriorityLevelConfiguration represents the configuration of a priority level.
 */
export class IoK8sApiFlowcontrolV1alpha1PriorityLevelConfiguration extends Model<IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfiguration> implements IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfiguration {

apiVersion: IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfiguration["apiVersion"] = IoK8sApiFlowcontrolV1alpha1PriorityLevelConfiguration["apiVersion"];

kind: IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfiguration["kind"] = IoK8sApiFlowcontrolV1alpha1PriorityLevelConfiguration["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationSpec;

"status"?: IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationStatus;

static apiVersion: IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfiguration["apiVersion"] = "flowcontrol.apiserver.k8s.io/v1alpha1";
static kind: IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfiguration["kind"] = "PriorityLevelConfiguration";
}

Model.setSchema(IoK8sApiFlowcontrolV1alpha1PriorityLevelConfiguration, "io.k8s.api.flowcontrol.v1alpha1.PriorityLevelConfiguration", addSchema);

export {
  IIoK8sApiFlowcontrolV1alpha1PriorityLevelConfiguration as IPriorityLevelConfiguration,
  IoK8sApiFlowcontrolV1alpha1PriorityLevelConfiguration as PriorityLevelConfiguration
};
