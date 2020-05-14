
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiAutoscalingV1ScaleSpec } from "./IoK8sApiAutoscalingV1ScaleSpec.ts";

import { IIoK8sApiAutoscalingV1ScaleStatus } from "./IoK8sApiAutoscalingV1ScaleStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV1Scale.ts";

/**
 * Scale represents a scaling request for a resource.
 */
export interface IIoK8sApiAutoscalingV1Scale {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "autoscaling/v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "Scale";
/**
 * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * defines the behavior of the scale. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status.
 */
"spec"?: IIoK8sApiAutoscalingV1ScaleSpec;
/**
 * current status of the scale. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status. Read-only.
 */
"status"?: IIoK8sApiAutoscalingV1ScaleStatus;
}

/**
 * Scale represents a scaling request for a resource.
 */
export class IoK8sApiAutoscalingV1Scale extends Model<IIoK8sApiAutoscalingV1Scale> implements IIoK8sApiAutoscalingV1Scale {

apiVersion: IIoK8sApiAutoscalingV1Scale["apiVersion"] = IoK8sApiAutoscalingV1Scale["apiVersion"];

kind: IIoK8sApiAutoscalingV1Scale["kind"] = IoK8sApiAutoscalingV1Scale["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiAutoscalingV1ScaleSpec;

"status"?: IIoK8sApiAutoscalingV1ScaleStatus;

static apiVersion: IIoK8sApiAutoscalingV1Scale["apiVersion"] = "autoscaling/v1";
static kind: IIoK8sApiAutoscalingV1Scale["kind"] = "Scale";
}

Model.setSchema(IoK8sApiAutoscalingV1Scale, "io.k8s.api.autoscaling.v1.Scale", addSchema);

export {
  IIoK8sApiAutoscalingV1Scale as IScale,
  IoK8sApiAutoscalingV1Scale as Scale
};
