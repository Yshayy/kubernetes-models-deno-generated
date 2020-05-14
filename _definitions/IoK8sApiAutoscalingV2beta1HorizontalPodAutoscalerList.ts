
import { IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler } from "./IoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerList.ts";

/**
 * HorizontalPodAutoscaler is a list of horizontal pod autoscaler objects.
 */
export interface IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "autoscaling/v2beta1";
/**
 * items is the list of horizontal pod autoscaler objects.
 */
"items": Array<IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "HorizontalPodAutoscalerList";
/**
 * metadata is the standard list metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * HorizontalPodAutoscaler is a list of horizontal pod autoscaler objects.
 */
export class IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerList extends Model<IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerList> implements IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerList {

apiVersion: IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerList["apiVersion"] = IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerList["apiVersion"];

"items": Array<IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscaler>;

kind: IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerList["kind"] = IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerList["apiVersion"] = "autoscaling/v2beta1";
static kind: IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerList["kind"] = "HorizontalPodAutoscalerList";
}

Model.setSchema(IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerList, "io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerList", addSchema);

export {
  IIoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerList as IHorizontalPodAutoscalerList,
  IoK8sApiAutoscalingV2beta1HorizontalPodAutoscalerList as HorizontalPodAutoscalerList
};
