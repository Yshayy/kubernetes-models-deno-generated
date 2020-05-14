
import { IIoK8sApiNetworkingV1beta1Ingress } from "./IoK8sApiNetworkingV1beta1Ingress.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiNetworkingV1beta1IngressList.ts";

/**
 * IngressList is a collection of Ingress.
 */
export interface IIoK8sApiNetworkingV1beta1IngressList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "networking.k8s.io/v1beta1";
/**
 * Items is the list of Ingress.
 */
"items": Array<IIoK8sApiNetworkingV1beta1Ingress>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "IngressList";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * IngressList is a collection of Ingress.
 */
export class IoK8sApiNetworkingV1beta1IngressList extends Model<IIoK8sApiNetworkingV1beta1IngressList> implements IIoK8sApiNetworkingV1beta1IngressList {

apiVersion: IIoK8sApiNetworkingV1beta1IngressList["apiVersion"] = IoK8sApiNetworkingV1beta1IngressList["apiVersion"];

"items": Array<IIoK8sApiNetworkingV1beta1Ingress>;

kind: IIoK8sApiNetworkingV1beta1IngressList["kind"] = IoK8sApiNetworkingV1beta1IngressList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiNetworkingV1beta1IngressList["apiVersion"] = "networking.k8s.io/v1beta1";
static kind: IIoK8sApiNetworkingV1beta1IngressList["kind"] = "IngressList";
}

Model.setSchema(IoK8sApiNetworkingV1beta1IngressList, "io.k8s.api.networking.v1beta1.IngressList", addSchema);

export {
  IIoK8sApiNetworkingV1beta1IngressList as IIngressList,
  IoK8sApiNetworkingV1beta1IngressList as IngressList
};
