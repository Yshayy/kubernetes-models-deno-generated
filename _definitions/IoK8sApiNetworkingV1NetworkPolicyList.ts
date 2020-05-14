
import { IIoK8sApiNetworkingV1NetworkPolicy } from "./IoK8sApiNetworkingV1NetworkPolicy.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiNetworkingV1NetworkPolicyList.ts";

/**
 * NetworkPolicyList is a list of NetworkPolicy objects.
 */
export interface IIoK8sApiNetworkingV1NetworkPolicyList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "networking.k8s.io/v1";
/**
 * Items is a list of schema objects.
 */
"items": Array<IIoK8sApiNetworkingV1NetworkPolicy>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "NetworkPolicyList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * NetworkPolicyList is a list of NetworkPolicy objects.
 */
export class IoK8sApiNetworkingV1NetworkPolicyList extends Model<IIoK8sApiNetworkingV1NetworkPolicyList> implements IIoK8sApiNetworkingV1NetworkPolicyList {

apiVersion: IIoK8sApiNetworkingV1NetworkPolicyList["apiVersion"] = IoK8sApiNetworkingV1NetworkPolicyList["apiVersion"];

"items": Array<IIoK8sApiNetworkingV1NetworkPolicy>;

kind: IIoK8sApiNetworkingV1NetworkPolicyList["kind"] = IoK8sApiNetworkingV1NetworkPolicyList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiNetworkingV1NetworkPolicyList["apiVersion"] = "networking.k8s.io/v1";
static kind: IIoK8sApiNetworkingV1NetworkPolicyList["kind"] = "NetworkPolicyList";
}

Model.setSchema(IoK8sApiNetworkingV1NetworkPolicyList, "io.k8s.api.networking.v1.NetworkPolicyList", addSchema);

export {
  IIoK8sApiNetworkingV1NetworkPolicyList as INetworkPolicyList,
  IoK8sApiNetworkingV1NetworkPolicyList as NetworkPolicyList
};
