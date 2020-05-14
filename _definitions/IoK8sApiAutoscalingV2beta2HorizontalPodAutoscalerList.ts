
import { IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler } from "./IoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerList.ts";

/**
 * HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects.
 */
export interface IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "autoscaling/v2beta2";
/**
 * items is the list of horizontal pod autoscaler objects.
 */
"items": Array<IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler>;
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
 * HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects.
 */
export class IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerList extends Model<IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerList> implements IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerList {

apiVersion: IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerList["apiVersion"] = IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerList["apiVersion"];

"items": Array<IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscaler>;

kind: IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerList["kind"] = IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerList["apiVersion"] = "autoscaling/v2beta2";
static kind: IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerList["kind"] = "HorizontalPodAutoscalerList";
}

Model.setSchema(IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerList, "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerList", addSchema);

export {
  IIoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerList as IHorizontalPodAutoscalerList,
  IoK8sApiAutoscalingV2beta2HorizontalPodAutoscalerList as HorizontalPodAutoscalerList
};
