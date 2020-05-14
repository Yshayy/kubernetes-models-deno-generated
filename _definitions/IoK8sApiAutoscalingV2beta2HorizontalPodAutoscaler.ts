
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec } from "./IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec.ts";

import { IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerStatus } from "./IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler.ts";

/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 */
export interface IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "autoscaling/v2beta2";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "HorizontalPodAutoscaler";
/**
 * metadata is the standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec is the specification for the behaviour of the autoscaler. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status.
 */
"spec"?: IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec;
/**
 * status is the current information about the autoscaler.
 */
"status"?: IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerStatus;
}

/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 */
export class IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler extends Model<IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler> implements IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler {

apiVersion: IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler["apiVersion"] = IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler["apiVersion"];

kind: IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler["kind"] = IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerSpec;

"status"?: IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerStatus;

static apiVersion: IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler["apiVersion"] = "autoscaling/v2beta2";
static kind: IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler["kind"] = "HorizontalPodAutoscaler";
}

Model.setSchema(IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler, "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscaler", addSchema);

export {
  IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler as IHorizontalPodAutoscaler,
  IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler as HorizontalPodAutoscaler
};
