
import { IIoK8sApimachineryPkgApisMetaV1DeleteOptions } from "./IoK8sApimachineryPkgApisMetaV1DeleteOptions.ts";

import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiPolicyV1beta1Eviction.ts";

/**
 * Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
 */
export interface IIoK8sApiPolicyV1beta1Eviction {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "policy/v1beta1";
/**
 * DeleteOptions may be provided
 */
"deleteOptions"?: IIoK8sApimachineryPkgApisMetaV1DeleteOptions;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "Eviction";
/**
 * ObjectMeta describes the pod that is being evicted.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
}

/**
 * Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
 */
export class IoK8sApiPolicyV1beta1Eviction extends Model<IIoK8sApiPolicyV1beta1Eviction> implements IIoK8sApiPolicyV1beta1Eviction {

apiVersion: IIoK8sApiPolicyV1beta1Eviction["apiVersion"] = IoK8sApiPolicyV1beta1Eviction["apiVersion"];

"deleteOptions"?: IIoK8sApimachineryPkgApisMetaV1DeleteOptions;

kind: IIoK8sApiPolicyV1beta1Eviction["kind"] = IoK8sApiPolicyV1beta1Eviction["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

static apiVersion: IIoK8sApiPolicyV1beta1Eviction["apiVersion"] = "policy/v1beta1";
static kind: IIoK8sApiPolicyV1beta1Eviction["kind"] = "Eviction";
}

Model.setSchema(IoK8sApiPolicyV1beta1Eviction, "io.k8s.api.policy.v1beta1.Eviction", addSchema);

export {
  IIoK8sApiPolicyV1beta1Eviction as IEviction,
  IoK8sApiPolicyV1beta1Eviction as Eviction
};
