
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiNetworkingV1NetworkPolicySpec } from "./IoK8sApiNetworkingV1NetworkPolicySpec.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiNetworkingV1NetworkPolicy.ts";

/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
export interface IIoK8sApiNetworkingV1NetworkPolicy {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "networking.k8s.io/v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "NetworkPolicy";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the desired behavior for this NetworkPolicy.
 */
"spec"?: IIoK8sApiNetworkingV1NetworkPolicySpec;
}

/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
export class IoK8sApiNetworkingV1NetworkPolicy extends Model<IIoK8sApiNetworkingV1NetworkPolicy> implements IIoK8sApiNetworkingV1NetworkPolicy {

apiVersion: IIoK8sApiNetworkingV1NetworkPolicy["apiVersion"] = IoK8sApiNetworkingV1NetworkPolicy["apiVersion"];

kind: IIoK8sApiNetworkingV1NetworkPolicy["kind"] = IoK8sApiNetworkingV1NetworkPolicy["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiNetworkingV1NetworkPolicySpec;

static apiVersion: IIoK8sApiNetworkingV1NetworkPolicy["apiVersion"] = "networking.k8s.io/v1";
static kind: IIoK8sApiNetworkingV1NetworkPolicy["kind"] = "NetworkPolicy";
}

Model.setSchema(IoK8sApiNetworkingV1NetworkPolicy, "io.k8s.api.networking.v1.NetworkPolicy", addSchema);

export {
  IIoK8sApiNetworkingV1NetworkPolicy as INetworkPolicy,
  IoK8sApiNetworkingV1NetworkPolicy as NetworkPolicy
};
