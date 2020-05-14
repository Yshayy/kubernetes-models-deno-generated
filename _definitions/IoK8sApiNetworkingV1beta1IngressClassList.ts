
import { IIoK8sApiNetworkingV1beta1IngressClass } from "./IoK8sApiNetworkingV1beta1IngressClass.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiNetworkingV1beta1IngressClassList.ts";

/**
 * IngressClassList is a collection of IngressClasses.
 */
export interface IIoK8sApiNetworkingV1beta1IngressClassList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "networking.k8s.io/v1beta1";
/**
 * Items is the list of IngressClasses.
 */
"items": Array<IIoK8sApiNetworkingV1beta1IngressClass>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "IngressClassList";
/**
 * Standard list metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * IngressClassList is a collection of IngressClasses.
 */
export class IoK8sApiNetworkingV1beta1IngressClassList extends Model<IIoK8sApiNetworkingV1beta1IngressClassList> implements IIoK8sApiNetworkingV1beta1IngressClassList {

apiVersion: IIoK8sApiNetworkingV1beta1IngressClassList["apiVersion"] = IoK8sApiNetworkingV1beta1IngressClassList["apiVersion"];

"items": Array<IIoK8sApiNetworkingV1beta1IngressClass>;

kind: IIoK8sApiNetworkingV1beta1IngressClassList["kind"] = IoK8sApiNetworkingV1beta1IngressClassList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiNetworkingV1beta1IngressClassList["apiVersion"] = "networking.k8s.io/v1beta1";
static kind: IIoK8sApiNetworkingV1beta1IngressClassList["kind"] = "IngressClassList";
}

Model.setSchema(IoK8sApiNetworkingV1beta1IngressClassList, "io.k8s.api.networking.v1beta1.IngressClassList", addSchema);

export {
  IIoK8sApiNetworkingV1beta1IngressClassList as IIngressClassList,
  IoK8sApiNetworkingV1beta1IngressClassList as IngressClassList
};
