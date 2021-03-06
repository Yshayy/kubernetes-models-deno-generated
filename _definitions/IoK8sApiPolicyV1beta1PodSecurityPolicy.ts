
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiPolicyV1beta1PodSecurityPolicySpec } from "./IoK8sApiPolicyV1beta1PodSecurityPolicySpec.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiPolicyV1beta1PodSecurityPolicy.ts";

/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container.
 */
export interface IIoK8sApiPolicyV1beta1PodSecurityPolicy {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "policy/v1beta1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "PodSecurityPolicy";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec defines the policy enforced.
 */
"spec"?: IIoK8sApiPolicyV1beta1PodSecurityPolicySpec;
}

/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container.
 */
export class IoK8sApiPolicyV1beta1PodSecurityPolicy extends Model<IIoK8sApiPolicyV1beta1PodSecurityPolicy> implements IIoK8sApiPolicyV1beta1PodSecurityPolicy {

apiVersion: IIoK8sApiPolicyV1beta1PodSecurityPolicy["apiVersion"] = IoK8sApiPolicyV1beta1PodSecurityPolicy["apiVersion"];

kind: IIoK8sApiPolicyV1beta1PodSecurityPolicy["kind"] = IoK8sApiPolicyV1beta1PodSecurityPolicy["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiPolicyV1beta1PodSecurityPolicySpec;

static apiVersion: IIoK8sApiPolicyV1beta1PodSecurityPolicy["apiVersion"] = "policy/v1beta1";
static kind: IIoK8sApiPolicyV1beta1PodSecurityPolicy["kind"] = "PodSecurityPolicy";
}

Model.setSchema(IoK8sApiPolicyV1beta1PodSecurityPolicy, "io.k8s.api.policy.v1beta1.PodSecurityPolicy", addSchema);

export {
  IIoK8sApiPolicyV1beta1PodSecurityPolicy as IPodSecurityPolicy,
  IoK8sApiPolicyV1beta1PodSecurityPolicy as PodSecurityPolicy
};
