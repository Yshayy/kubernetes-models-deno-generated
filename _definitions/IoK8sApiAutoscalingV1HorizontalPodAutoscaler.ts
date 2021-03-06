
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec } from "./IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec.ts";

import { IIoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus } from "./IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV1HorizontalPodAutoscaler.ts";

/**
 * configuration of a horizontal pod autoscaler.
 */
export interface IIoK8sApiAutoscalingV1HorizontalPodAutoscaler {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "autoscaling/v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "HorizontalPodAutoscaler";
/**
 * Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * behaviour of autoscaler. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status.
 */
"spec"?: IIoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec;
/**
 * current information about the autoscaler.
 */
"status"?: IIoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus;
}

/**
 * configuration of a horizontal pod autoscaler.
 */
export class IoK8sApiAutoscalingV1HorizontalPodAutoscaler extends Model<IIoK8sApiAutoscalingV1HorizontalPodAutoscaler> implements IIoK8sApiAutoscalingV1HorizontalPodAutoscaler {

apiVersion: IIoK8sApiAutoscalingV1HorizontalPodAutoscaler["apiVersion"] = IoK8sApiAutoscalingV1HorizontalPodAutoscaler["apiVersion"];

kind: IIoK8sApiAutoscalingV1HorizontalPodAutoscaler["kind"] = IoK8sApiAutoscalingV1HorizontalPodAutoscaler["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec;

"status"?: IIoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus;

static apiVersion: IIoK8sApiAutoscalingV1HorizontalPodAutoscaler["apiVersion"] = "autoscaling/v1";
static kind: IIoK8sApiAutoscalingV1HorizontalPodAutoscaler["kind"] = "HorizontalPodAutoscaler";
}

Model.setSchema(IoK8sApiAutoscalingV1HorizontalPodAutoscaler, "io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler", addSchema);

export {
  IIoK8sApiAutoscalingV1HorizontalPodAutoscaler as IHorizontalPodAutoscaler,
  IoK8sApiAutoscalingV1HorizontalPodAutoscaler as HorizontalPodAutoscaler
};
