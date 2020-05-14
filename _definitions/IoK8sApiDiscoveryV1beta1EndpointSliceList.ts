
import { IIoK8sApiDiscoveryV1beta1EndpointSlice } from "./IoK8sApiDiscoveryV1beta1EndpointSlice.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiDiscoveryV1beta1EndpointSliceList.ts";

/**
 * EndpointSliceList represents a list of endpoint slices
 */
export interface IIoK8sApiDiscoveryV1beta1EndpointSliceList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "discovery.k8s.io/v1beta1";
/**
 * List of endpoint slices
 */
"items": Array<IIoK8sApiDiscoveryV1beta1EndpointSlice>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "EndpointSliceList";
/**
 * Standard list metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * EndpointSliceList represents a list of endpoint slices
 */
export class IoK8sApiDiscoveryV1beta1EndpointSliceList extends Model<IIoK8sApiDiscoveryV1beta1EndpointSliceList> implements IIoK8sApiDiscoveryV1beta1EndpointSliceList {

apiVersion: IIoK8sApiDiscoveryV1beta1EndpointSliceList["apiVersion"] = IoK8sApiDiscoveryV1beta1EndpointSliceList["apiVersion"];

"items": Array<IIoK8sApiDiscoveryV1beta1EndpointSlice>;

kind: IIoK8sApiDiscoveryV1beta1EndpointSliceList["kind"] = IoK8sApiDiscoveryV1beta1EndpointSliceList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiDiscoveryV1beta1EndpointSliceList["apiVersion"] = "discovery.k8s.io/v1beta1";
static kind: IIoK8sApiDiscoveryV1beta1EndpointSliceList["kind"] = "EndpointSliceList";
}

Model.setSchema(IoK8sApiDiscoveryV1beta1EndpointSliceList, "io.k8s.api.discovery.v1beta1.EndpointSliceList", addSchema);

export {
  IIoK8sApiDiscoveryV1beta1EndpointSliceList as IEndpointSliceList,
  IoK8sApiDiscoveryV1beta1EndpointSliceList as EndpointSliceList
};
