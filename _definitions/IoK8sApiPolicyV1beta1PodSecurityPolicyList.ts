
import { IIoK8sApiPolicyV1beta1PodSecurityPolicy } from "./IoK8sApiPolicyV1beta1PodSecurityPolicy.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiPolicyV1beta1PodSecurityPolicyList.ts";

/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects.
 */
export interface IIoK8sApiPolicyV1beta1PodSecurityPolicyList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "policy/v1beta1";
/**
 * items is a list of schema objects.
 */
"items": Array<IIoK8sApiPolicyV1beta1PodSecurityPolicy>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "PodSecurityPolicyList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects.
 */
export class IoK8sApiPolicyV1beta1PodSecurityPolicyList extends Model<IIoK8sApiPolicyV1beta1PodSecurityPolicyList> implements IIoK8sApiPolicyV1beta1PodSecurityPolicyList {

apiVersion: IIoK8sApiPolicyV1beta1PodSecurityPolicyList["apiVersion"] = IoK8sApiPolicyV1beta1PodSecurityPolicyList["apiVersion"];

"items": Array<IIoK8sApiPolicyV1beta1PodSecurityPolicy>;

kind: IIoK8sApiPolicyV1beta1PodSecurityPolicyList["kind"] = IoK8sApiPolicyV1beta1PodSecurityPolicyList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiPolicyV1beta1PodSecurityPolicyList["apiVersion"] = "policy/v1beta1";
static kind: IIoK8sApiPolicyV1beta1PodSecurityPolicyList["kind"] = "PodSecurityPolicyList";
}

Model.setSchema(IoK8sApiPolicyV1beta1PodSecurityPolicyList, "io.k8s.api.policy.v1beta1.PodSecurityPolicyList", addSchema);

export {
  IIoK8sApiPolicyV1beta1PodSecurityPolicyList as IPodSecurityPolicyList,
  IoK8sApiPolicyV1beta1PodSecurityPolicyList as PodSecurityPolicyList
};
