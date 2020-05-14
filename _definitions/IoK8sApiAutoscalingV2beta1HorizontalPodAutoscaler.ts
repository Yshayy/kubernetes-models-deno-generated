
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerSpec } from "./IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerSpec.ts";

import { IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus } from "./IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler.ts";

/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 */
export interface IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "autoscaling/v2beta1";
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
"spec"?: IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerSpec;
/**
 * status is the current information about the autoscaler.
 */
"status"?: IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus;
}

/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 */
export class IoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler extends Model<IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler> implements IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler {

apiVersion: IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler["apiVersion"] = IoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler["apiVersion"];

kind: IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler["kind"] = IoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerSpec;

"status"?: IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerStatus;

static apiVersion: IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler["apiVersion"] = "autoscaling/v2beta1";
static kind: IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler["kind"] = "HorizontalPodAutoscaler";
}

Model.setSchema(IoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler, "io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscaler", addSchema);

export {
  IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler as IHorizontalPodAutoscaler,
  IoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler as HorizontalPodAutoscaler
};
