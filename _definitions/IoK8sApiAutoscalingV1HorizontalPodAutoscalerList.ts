
import { IIoK8sApiAutoscalingV1HorizontalPodAutoscaler } from "./IoK8sApiAutoscalingV1HorizontalPodAutoscaler.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAutoscalingV1HorizontalPodAutoscalerList.ts";

/**
 * list of horizontal pod autoscaler objects.
 */
export interface IIoK8sApiAutoscalingV1HorizontalPodAutoscalerList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "autoscaling/v1";
/**
 * list of horizontal pod autoscaler objects.
 */
"items": Array<IIoK8sApiAutoscalingV1HorizontalPodAutoscaler>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "HorizontalPodAutoscalerList";
/**
 * Standard list metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * list of horizontal pod autoscaler objects.
 */
export class IoK8sApiAutoscalingV1HorizontalPodAutoscalerList extends Model<IIoK8sApiAutoscalingV1HorizontalPodAutoscalerList> implements IIoK8sApiAutoscalingV1HorizontalPodAutoscalerList {

apiVersion: IIoK8sApiAutoscalingV1HorizontalPodAutoscalerList["apiVersion"] = IoK8sApiAutoscalingV1HorizontalPodAutoscalerList["apiVersion"];

"items": Array<IIoK8sApiAutoscalingV1HorizontalPodAutoscaler>;

kind: IIoK8sApiAutoscalingV1HorizontalPodAutoscalerList["kind"] = IoK8sApiAutoscalingV1HorizontalPodAutoscalerList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiAutoscalingV1HorizontalPodAutoscalerList["apiVersion"] = "autoscaling/v1";
static kind: IIoK8sApiAutoscalingV1HorizontalPodAutoscalerList["kind"] = "HorizontalPodAutoscalerList";
}

Model.setSchema(IoK8sApiAutoscalingV1HorizontalPodAutoscalerList, "io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerList", addSchema);

export {
  IIoK8sApiAutoscalingV1HorizontalPodAutoscalerList as IHorizontalPodAutoscalerList,
  IoK8sApiAutoscalingV1HorizontalPodAutoscalerList as HorizontalPodAutoscalerList
};
